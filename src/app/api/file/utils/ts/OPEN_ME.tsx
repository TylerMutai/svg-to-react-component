import React from "react";
import CustomIcon from "./CustomIcon";

/**
 *
 * An example on how you can now use your SVG icons in your app
 * [CustomIcon] is just a wrapper for your SVG icons with added utilities to make it easier to
 * render your SVG icons. You can pass additional props like color, fill, and all other available svg props.
 * Replace [icon] with the function name of your generated SVG icon.
 */
function OpenMe() {
  return <CustomIcon as={icon} />;
}

export default OpenMe;
