import { cleanString } from "../helpers/general";
import fs from "fs";

const retryIncrementValue = 10000; // 10 seconds.
const maxRetryIncrement = 100000; // 100 seconds.
/**
 * @param destinationPath the path to prune.
 * This function will run indefinitely if it runs into any errors until pruning is successful.
 * We'll increment the value of [retryDelay] by [retryIncrementValue] on every failure until a threshold total of
 * [maxRetryIncrement] where now the function will retry in equal intervals until cleanup is successful.
 *
 * Meanwhile, we'll return immediately with an error after the first try if an error occurs
 * so that the user doesn't get agitated.
 * @param retryDelay
 * @param totalRetries
 */
export const performCleanup = (
  destinationPath: string,
  retryDelay = 1000,
  totalRetries = 0,
): { status: boolean; message: string } => {
  console.info(
    cleanString(`Pruning path '${destinationPath}'. 
      The retry delay is: [${retryDelay}]. We so far have retried this operation: [${totalRetries}] times.`),
  );
  try {
    if (fs.existsSync(destinationPath)) {
      console.info(cleanString(`Destination exists. Attempting to delete it.`));
      fs.rmSync(destinationPath, { recursive: true });
    }
  } catch (e) {
    const m = JSON.stringify(e);
    console.error(
      cleanString(
        `An error: \n ${m} \n occurred. Current total delay: [${retryDelay}]. Current total retries: 
        [${totalRetries}].`,
      ),
    );
    const rDelay = retryDelay + retryIncrementValue;
    const _rDelay = rDelay >= maxRetryIncrement ? maxRetryIncrement : rDelay;
    setTimeout(
      () => performCleanup(destinationPath, _rDelay, totalRetries + 1),
      _rDelay,
    );
    return { status: false, message: m };
  }
  return { status: true, message: "Cleanup operation was successful." };
};