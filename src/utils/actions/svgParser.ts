import fs from "fs";
import path from "path";
import stringRepresentation from "../../pages/Blueprints/ReactComponentTypescriptBlueprint";
import { ZipAFolder } from "zip-a-folder";
import { crypto } from "next/dist/compiled/@edge-runtime/primitives";
import { cleanString, runAllPromises } from "../helpers/general";
import * as process from "process";

const placeholderKey = "placeholderKey";
const placeholderValue = "placeholderValue";
const rootDirectory = path.join(process.cwd());

export const svgParser = async (language: "ts" | "js", files: File[]) => {
  const promises: (() => Promise<void>)[] = [];
  const stringSVGs: string[] = [];
  for (const file of files) {
    promises.push(async () => {
      const text = await file.text();
      stringSVGs.push(text);
    });
  }

  await runAllPromises(promises);
  const parsedSVGs: string[] = [];
  const parsedSVGsPromises: (() => Promise<void>)[] = [];

  for (const s of stringSVGs) {
    const __sCopy = `${s}`;
    parsedSVGsPromises.push(async () => {
      const _sCopy = `${__sCopy}`;
      const svgson = await import("svgson");
      try {
        const t = await svgson.parse(_sCopy, {
          camelcase: true,
          transformNode: (node) => {
            const nodeCopy = { ...node };
            nodeCopy.attributes[placeholderKey] = placeholderValue;

            for (const child of nodeCopy.children) {
              if (child.attributes.fill !== "none") {
                child.attributes.fill = "currentColor";
              }
              if (child.attributes.stroke) {
                if (child.attributes.stroke !== "none") {
                  child.attributes.stroke = "currentColor";
                }
              }
              console.log("CHILD ATTRIBUTES: ", child.attributes);
              if (child.attributes["stroke-width"]) {
                child.attributes["stroke-width"] = "{props.strokeWidth || 1.5}";
              }
            }
            return nodeCopy;
          },
        });
        parsedSVGs.push(
          svgson
            .stringify(t)
            .replace(`${placeholderKey}="${placeholderValue}"`, "{...props}")
            .replaceAll(
              `strokeWidth="{props.strokeWidth || 1.5}"`,
              `strokeWidth={props.strokeWidth || 1.5}`,
            ),
        );
      } catch (e) {
        console.log("An error occurred parsing the SVG files. ", e);
      }
    });
  }

  await runAllPromises(parsedSVGsPromises);
  return await createFileResponse(language, parsedSVGs);
};

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
export const createFileResponse = async (
  language: "ts" | "js",
  svgStrings: string[],
): Promise<{ status: boolean; message: string; zipFilePath?: string }> => {
  const array = new Uint8Array(2);
  const nums = crypto.getRandomValues(array);
  const directoryName = `${new Date().getTime()}${nums[0]}${nums[1]}`;
  const destination = `temp/${directoryName}`;
  const destinationPath = path.join(rootDirectory, destination);
  const destinationUtilsPath = path.join(destinationPath, "utils");

  // copy boilerplate
  try {
    const p = path.join(rootDirectory, `utils/${language}/`);
    const files = fs.readdirSync(p);
    console.info(
      `Successfully read files in '${p}'. Starting the copying process.\n`,
    );

    if (!fs.existsSync(destinationUtilsPath)) {
      console.info(
        `Destination path ${destinationUtilsPath} doesn't exist. Creating directory now.`,
      );
      fs.mkdirSync(destinationUtilsPath, { recursive: true });
    }
    for (const f of files) {
      const source = path.join(p, f);
      const dest = path.join(destinationUtilsPath, f);
      console.info(`Copying file ${f} from ${source} to ${dest}`);
      fs.copyFileSync(source, dest);
      console.info(`Copying file ${f} from ${source} to ${dest} successful.`);
    }
  } catch (e) {
    const m = JSON.stringify(e);
    console.error(
      `An error occurred. Details: \n (${m} \n ${e} \n. Doing cleanup.`,
    );
    return {
      status: false,
      message: cleanString(
        `An error occurred: 
          ${m} - ${performCleanup(destinationPath)}
          `,
      ),
    };
  }

  // for each SVG, create an equivalent file in the [destinationPath] directory.
  const promises: (() => Promise<void>)[] = [];
  const errors: string[] = [];
  for (let i = 0; i < svgStrings.length; i++) {
    const _svg = svgStrings[i];
    promises.push(() => {
      const svg = `${_svg}`;
      return new Promise((resolve) => {
        try {
          const iconName = `IconComponent${i}`;
          const iconFileName = `${iconName}.${language}x`;
          const data = new Uint8Array(
            Buffer.from(stringRepresentation(iconName, svg)),
          );
          const dest = path.join(destinationPath, iconFileName);
          console.info(cleanString(`Writing file: ${dest}`));
          fs.writeFileSync(dest, data);
          console.info(`File ${dest} written successfully.`);
        } catch (e) {
          const m = cleanString(
            `We run into an issue with writing file. Error: \n ${JSON.stringify(e)}\n `,
          );
          console.error(m);
          errors.push(m);
        }
        resolve();
      });
    });
  }

  await runAllPromises(promises);
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
    const zipFilePath = path.join("temp/", zipFileName);
    console.log("zipFilePath", zipFilePath);
    await ZipAFolder.zip(destinationPath, zipFilePath, {});
    console.info(
      `File copying complete. Files generated successfully. Zipping folder to [${zipFilePath}].`,
    );
    // TODO: Handle cleanup even after success.
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
