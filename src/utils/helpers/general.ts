export const cleanString = (s: string) => s.replace(/\s+/g, " ").trim();

/**
 * A wrapper function that runs a list of async functions concurrently and only returns when
 * all promises complete.
 * @param promises an iterable like an array with a list of async functions
 */
export const runAllPromises = (promises: (() => Promise<any>)[]) => {
  return new Promise<void>((resolve) => {
    let _queue = new Set();

    // let's store apparent 'keys', basically indices, that'll represent each function.
    for (let i = 1; i <= promises.length; i += 1) {
      _queue.add(i);
    }

    // We'll simulate the locking process with this. We don't want our [_queue] being mutated concurrently
    // then end up with an inconsistent state.
    let _lock = false;

    // This will be called by every async function when they complete.
    const _cleanup = (idx: number, isError?: boolean) => {
      // pause execution as long as a 'thread' is accessing our [_queue].
      console.info(
        `Cleanup called by child from ${isError ? "catch" : "then"}: [${idx}]. Queue length: [${_queue.size}].`,
      );
      if (_lock) {
        console.info(
          cleanString(`Waiting for one of the 'threads' to release the lock and allow us to mutate the queue. 
          Sleeping for 2 seconds. Child key: [${idx}]`),
        );

        setTimeout(() => _cleanup(idx), 2000);
        return;
      }
      _lock = true;
      _queue.delete(idx);
      if (!_queue.size) {
        // We're finally done. return.
        resolve();
        return;
      }
      _lock = false;
      console.info(
        `Child with id: [${idx}] successfully ran. New Queue length: [${_queue.size}].`,
      );
    };

    // Fire each async call, attach callbacks. Logically, I expect that eventually [_cleanup] will be called
    // the same number of times as the length of the [promises] array, so we don't really need a loop.
    promises.forEach((p, index) => {
      // create a new pointer to index. I assume the value might be overriden.
      const _index = index + 1;
      p()
        .then(() => _cleanup(_index, false))
        .catch(() => _cleanup(_index, true));
    });
  });
};
