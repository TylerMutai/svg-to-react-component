import React, { ChangeEvent, FC, useContext, useState } from "react";
import FormContext from "../../../../utils/contexts/formContext";
import CustomImg from "../../../Img/CustomImg";
import ErrorMessage from "../../../ErrorMessage/ErrorMessage";

export interface CustomFileInputProps {
  name: string;
}

const filePickerInputId = "file-picker-input-id";
const CustomFileInput: FC<CustomFileInputProps> = ({
  name,
}: CustomFileInputProps) => {
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const { setValue, errors } = useContext(FormContext);

  const handleFilePickerClick = () => {
    document.getElementById(filePickerInputId)?.click();
  };

  const handleFileSelect = (e: ChangeEvent<HTMLInputElement>) => {
    let files = [...selectedFiles];
    files.push(...Array.from(e.target.files || []));
    setSelectedFiles(files);
    setValue(name, files);
  };

  return (
    <div className="flex flex-col items-start justify-start w-full gap-[8px]">
      <input
        id={filePickerInputId}
        accept={"image/svg+xml"}
        multiple
        type="file"
        style={{
          visibility: "hidden",
          width: 0,
          height: 0,
        }}
        onChange={handleFileSelect}
      />
      <button
        type="button"
        onClick={handleFilePickerClick}
        onKeyDown={handleFilePickerClick}
        className={`rounded-[10px] border border-solid border-primary-color-1000 min-h-[150px] border-dashed flex flex-col items-center justify-start p-6 px-5 w-full`}
      >
        <div className="flex flex-col items-center justify-start gap-4 w-full">
          <CustomImg
            className="h-[100px] w-[100px] object-contain flex-grow-0 flex-shrink-0"
            src="/images/uploadIcon.svg"
            alt="upload"
          />
          <p className="text-inherit text-center flex flex-wrap items-center justify-center gap-[2px]">
            <span className="text-inherit font-bold">
              Browse for SVGs you'd like to convert.
            </span>
            <span className="text-inherit font-bold"> </span>
            <span className="text-inherit font-bold underline !text-primary-color-1000">
              Browse
            </span>
          </p>
          <p className="text-inherit text-center text-sm">
            <span className="text-inherit font-normal">Supported formats:</span>
            <span className="text-inherit font-normal !text-primary-color-1000">
              {" "}
              SVG
            </span>
          </p>
        </div>
      </button>
      {errors && <ErrorMessage errors={errors[name]} />}
    </div>
  );
};

export default CustomFileInput;
