import { createElement } from "react";
import IconType from "../../utils/types/iconType";
import IconBaseProps from "../../utils/types/iconBaseProps";

export interface SelectedItemProps extends IconBaseProps {
  as: IconType;
  color?: string;
}

function CustomIcon({
  color = "currentColor",
  as,
  ...restProps
}: SelectedItemProps) {
  return createElement(as, {
    className: `w-[24px] h-[24px] object-contain`,
    color,
    ...restProps,
  });
}

export default CustomIcon;
