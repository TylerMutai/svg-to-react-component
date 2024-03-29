"use client";

import CustomFileInput from "../components/inputs/Input/CustomFileInput/CustomFileInput";
import CustomFileInputDisplay from "../components/inputs/Input/CustomFileInput/CustomFileInputDisplay";
import LanguagePicker from "./LanguagePicker";
import AppContext from "../utils/contexts/appContext";
import React, { useMemo, useState } from "react";
import FormContainer from "../components/FormFactory/FormContainer";
import CustomButton from "../components/CustomButton/CustomButton";
import { submitFiles } from "../utils/services/files";

function LandingPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [files, setFiles] = useState<File[]>([]);
  const [language, setLanguage] = useState<"ts" | "js">("ts");
  const vals = useMemo(
    () => ({
      isLoading,
      files,
      language,
      setIsLoading,
      setLanguage,
      setFiles,
    }),
    [isLoading, files, language, setIsLoading, setLanguage, setFiles],
  );

  const _handleSubmit = async (data: any) => {
    setIsLoading(true);
    const m = await submitFiles(language, data.files);
    alert(m);
    setIsLoading(false);
  };
  return (
    <AppContext.Provider value={vals}>
      <FormContainer onSubmit={_handleSubmit}>
        <div className="flex flex-col gap-8 h-[100vh] p-10 w-full overflow-auto bg-blue-100 items-center justify-center">
          <div className="h-[200px] flex-shrink-0 flex-grow-0" />
          <div className="flex flex-col gap-8 p-10 my-10 flex-shrink-0 flex-grow-1 shadow-lg relative w-[80%] lg:w-[65%] xl:w-[50%] items-center justify-center">
            <div className="absolute w-full h-full left-0 top-0 bg-[rgba(255,255,255,.9)]" />
            <div className="flex flex-col gap-8 z-50 justify-center items-center">
              <h1 className="text-center whitespace-wrap font-bold">
                Convert your SVG images to stateful React components.
              </h1>
              <p className="text-center whitespace-wrap">
                This tool simplifies the conversion of SVG images into React
                components, catering to developers seeking dynamic hover
                effects, scaling transitions, or improved load times. It's a
                straightforward solution for enhancing your project's visuals
                and performance.
              </p>
              <CustomFileInput name={"files"} />
              <div className="flex flex-col gap-3">
                <h5 className="text-center font-bold">
                  Your loaded SVGs will appear here.
                </h5>
                <CustomFileInputDisplay name={"files"} />
              </div>
              <LanguagePicker />
              <CustomButton
                type="submit"
                disabled={isLoading}
                onClick={_handleSubmit}
              >
                {isLoading ? "Processing..." : "Convert"}
              </CustomButton>
            </div>
          </div>
        </div>
      </FormContainer>
    </AppContext.Provider>
  );
}

export default LandingPage;
