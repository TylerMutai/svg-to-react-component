import { createElement } from "react";
import IconType from "./iconType";
import IconBaseProps from "./iconBaseProps";

/**
 *
 * An example on how you can now use your SVG icons in your app
 * [CustomIcon] is just a wrapper for your SVG icons with added utilities to make it easier to
 * render your SVG icons. You can pass additional props like color, fill, and all other available svg props.
 * Replace [icon] with the function name of your generated SVG icon.
 */
export interface CustomIconProps extends IconBaseProps {
  as: IconType;
  color?: string;
}

function CustomIcon({
  color = "currentColor",
  as,
  style = {},
  ...restProps
}: CustomIconProps) {
  return createElement(as, {
    style: {
      width: style?.width || `${24}px`,
      height: style?.height || `${24}px`,
      objectFit: style?.objectFit || `contain`,
      ...(style || {}),
    },
    color,
    ...restProps,
  });
}

export default CustomIcon;
