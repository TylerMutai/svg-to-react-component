import React, { useContext } from "react";
import FormContext from "../../../../utils/contexts/formContext";
import CustomButton from "../../../CustomButton/CustomButton";

export interface CustomFileInputProps {
  className?: string;
  name: string;
}

const CustomFileInputDisplay = ({
  className = "",
  name,
}: CustomFileInputProps) => {
  const { watch, setValue } = useContext(FormContext);
  const files = watch(name) as File[];

  const handleRemove = (index: number) => {
    const filesCopy = [...(files ?? [])];
    const filesToAdd: File[] = [];
    for (let i = 0; i < filesCopy.length; i += 1) {
      if (i !== index) {
        filesToAdd.push(filesCopy[i]);
      }
    }
    setValue(name, filesToAdd);
  };

  return (
    <div className={`${className} flex flex-col gap-3 w-full h-full`}>
      {files?.length ? (
        files?.map((f, i) => (
          <div
            key={f.name}
            className="w-full flex-col gap-2 flex border border-solid border-[##E3E3E3] rounded-[5px]"
          >
            <div className="flex flex-row items-center justify-between w-full">
              <p className="whitespace-break-spaces overflow-clip px-2">
                {f.name}
              </p>
              <CustomButton onClick={() => handleRemove(i)} className="m-2">
                X
              </CustomButton>
            </div>
            <div className="w-full h-[4px] bg-[#35A839]" />
          </div>
        ))
      ) : (
        <div className="flex flex-row items-center w-full h-full">
          <p className="text-center p-5 border border-gray-500 border-dashed rounded-[10px] w-full">
            No uploaded files yet.
          </p>
        </div>
      )}
    </div>
  );
};

export default CustomFileInputDisplay;