import Image, { ImageProps } from "next/image";
import React from "react";

export type ImgProps = ImageProps &
  Partial<{
    className: string;
    width: number | `${number}`;
    height: number | `${number}`;
    fill: boolean;
    src: string;
    alt: string;
  }>;

const CustomImg: React.FC<React.PropsWithChildren<ImgProps>> = ({
  className,
  width = 32,
  height = 32,
  fill,
  src = "/logo.png",
  alt = "an image",
  ...restProps
}) => {
  return (
    <Image
      width={width ? `${width}` : width}
      height={height ? `${height}` : height}
      fill={!(width && height)}
      className={className}
      src={src}
      alt={alt}
      {...restProps}
    />
  );
};
export default CustomImg;
