import svgson from "svgson";
import fs from "fs";
import path from "path";
import stringRepresentation from "../../pages/Blueprints/ReactComponentTypescriptBlueprint";
import { ZipAFolder } from "zip-a-folder";

const placeholderKey = "bazengaDaddy";
const placeholderValue = "bazengaMammi";

export const svgParser = async (language: "ts" | "js", files: File[]) => {
  const promises: (() => Promise<void>)[] = [];
  const stringSVGs: string[] = [];
  for (const file of files) {
    promises.push(async () => {
      const text = await file.text();
      stringSVGs.push(text);
    });
  }
  await Promise.all(promises);
  const parsedSVGs: string[] = [];
  const parsedSVGsPromises: (() => Promise<void>)[] = [];
  for (const s of stringSVGs) {
    parsedSVGsPromises.push(async () => {
      const t = await svgson.parse(s, {
        camelcase: true,
        transformNode: (node) => {
          const nodeCopy = { ...node };
          if (nodeCopy.name === "svg") {
            nodeCopy.attributes[placeholderKey] = placeholderValue;
          }
          if (nodeCopy.attributes.fill) {
            if (nodeCopy.attributes.fill !== "none") {
              nodeCopy.attributes.fill = "currentColor";
            }
          }

          if (nodeCopy.attributes.stroke) {
            if (nodeCopy.attributes.stroke !== "none") {
              nodeCopy.attributes.stroke = "currentColor";
            }
          }
          if (nodeCopy.attributes.strokeWidth) {
            nodeCopy.attributes.strokeWidth = "props.strokeWidth || 1.5";
          }
          return nodeCopy;
        },
      });
      parsedSVGs.push(
        svgson
          .stringify(t)
          .replace(`${placeholderKey}="${placeholderValue}"`, "{...props}"),
      );
    });
  }
  await Promise.all(parsedSVGsPromises);
  return await createFileResponse(language, parsedSVGs);
};

const cleanString = (s: string) => s.replace(/\s+/g, " ").trim();
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
const performCleanup = (
  destinationPath: string,
  retryDelay = 1000,
  totalRetries = 0,
): { status: boolean; message: string } => {
  console.info(
    cleanString(`Pruning path '${destinationPath}'. 
      The retry delay is: [${retryDelay}]. We so far have retried this operation: [${totalRetries}] times.`),
  );
  try {
    if (!fs.existsSync(destinationPath)) {
      console.info(cleanString(`Destination exists. Attempting to delete it.`));
      fs.rmSync(destinationPath);
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
    setTimeout(() =>
      performCleanup(
        destinationPath,
        rDelay >= maxRetryIncrement ? maxRetryIncrement : rDelay,
        totalRetries + 1,
      ),
    );
    return { status: false, message: m };
  }
  return { status: true, message: "Cleanup operation was successful." };
};
export const createFileResponse = async (
  language: "ts" | "js",
  svgStrings: string[],
): Promise<{ status: boolean; message: string; zipFilePath?: string }> => {
  const array = new Uint8Array(2);
  const nums = self.crypto.getRandomValues(array);
  const directoryName = `${new Date().getTime()}${nums[0]}${nums[1]}`;
  const destination = `./temp/${directoryName}`;
  const destinationPath = path.join(destination);

  // copy boilerplate
  try {
    const p = `./utils/${language}/`;
    const files = fs.readdirSync(p);
    console.info(
      `Successfully read files in '${p}'. Starting the copying process.\n`,
    );

    if (!fs.existsSync(destinationPath)) {
      console.info(
        `Destination path ${destinationPath} doesn't existing. Creating directory now.`,
      );
      fs.mkdirSync(destinationPath);
    }
    for (const f of files) {
      const source = path.join(p, f);
      const dest = path.join(destinationPath, f);
      console.info(`Copying file ${f} from ${source} to ${dest}`);
      fs.copyFileSync(source, dest);
      console.info(`Copying file ${f} from ${source} to ${dest} successful.`);
    }
  } catch (e) {
    const m = JSON.stringify(e);
    console.error(`An error occurred. Details: \n (${m} \n. Doing cleanup.`);
    return {
      status: false,
      message: cleanString(
        `Hear me out. Turns out the operation failed. If you are brave enough, re-try the request. I have a 
          gut feeling it won't fail this time. Be brave. Here's more information about what happened: 
          ${m} - ${performCleanup(destinationPath)}
          `,
      ),
    };
  }

  // for each SVG, create an equivalent file in the [destinationPath] directory.
  const promises: (() => Promise<void>)[] = [];
  const errors: string[] = [];
  for (let i = 0; i < svgStrings.length; i++) {
    const svg = svgStrings[i];
    promises.push(async () => {
      try {
        const iconName = `IconComponent${i}`;
        const iconFileName = `${iconName}.${language}x`;
        const data = new Uint8Array(
          Buffer.from(stringRepresentation(iconName, svg)),
        );
        console.info(cleanString(`Writing file: ${iconFileName}`));
        fs.writeFile(``, data, (err) => {
          if (err) {
            throw err;
          }
          console.info(`File ${iconFileName} written successfully.`);
        });
      } catch (e) {
        const m = cleanString(
          `We run into an issue with writing file [${svg}]. Error: \n ${JSON.stringify(e)}\n `,
        );
        console.error(m);
        errors.push(m);
      }
    });
  }

  await Promise.all(promises);
  if (errors.length) {
    const m = cleanString(
      `Failure rate was ${Math.ceil(((svgStrings.length + 1) / (errors.length + 1)) * 100)}%. Aborting. Errors: ${errors.join("; \n")}`,
    );
    return {
      status: false,
      message: `${m} - ${performCleanup(destinationPath)}`,
    };
  }

  try {
    const zipFileName = `jsd-${directoryName}.zip`;
    await ZipAFolder.zip(destinationPath, zipFileName);
    const zipFilePath = path.join(destinationPath, zipFileName);
    console.info(
      `File copying complete. Files generated successfully. Zipping folder to [${zipFilePath}].`,
    );

    return {
      status: true,
      message: "Files generated successfully.",
      zipFilePath: zipFilePath,
    };
  } catch (e) {
    const m = cleanString(
      `An error occurred during creating a zip file. Error: ${JSON.stringify(e)}`,
    );
    return {
      status: false,
      message: `${m} - ${performCleanup(destinationPath)}`,
    };
  }
};
