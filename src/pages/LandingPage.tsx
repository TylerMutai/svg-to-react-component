"use client";

import CustomFileInput from "../components/inputs/Input/CustomFileInput/CustomFileInput";
import CustomFileInputDisplay from "../components/inputs/Input/CustomFileInput/CustomFileInputDisplay";
import CustomButton from "../components/CustomButton/CustomButton";
import LanguagePicker from "./LanguagePicker";
import AppContext from "../utils/contexts/appContext";
import { useMemo, useState } from "react";

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
  return (
    <AppContext.Provider value={vals}>
      <div className="flex flex-col gap-8 h-[100vh] p-10 w-full overflow-auto bg-blue-100 items-center justify-center">
        <div className="h-[200px] flex-shrink-0 flex-grow-0" />
        <div className="flex flex-col gap-8 p-10 my-10 flex-shrink-0 flex-grow-1 shadow-lg relative w-[80%] lg:w-[65%] xl:w-[50%] items-center justify-center">
          <div className="absolute w-full h-full left-0 top-0 bg-[rgba(255,255,255,.7)]" />
          <div className="flex flex-col gap-8 z-50 justify-center items-center">
            <h1 className="text-center whitespace-wrap font-bold">
              Convert your SVG components to stateful React components.
            </h1>
            <p className="text-center whitespace-wrap">
              What does this mean? Simple. You can now use your SVG images like
              actual icons. Want a different color on hover not just on the
              text, but also your SVG image? Want a particular scaling
              transition? Want balzingly fast initial loads? Then you definitely
              are in the right place!
            </p>
            <CustomFileInput name={"svgImages"} />
            <div className="flex flex-col gap-3">
              <h5 className="text-center font-bold">
                Your loaded SVGs will appear here.
              </h5>
              <CustomFileInputDisplay name={"svgImages"} />
            </div>
            <LanguagePicker />
            <CustomButton />
          </div>
        </div>
      </div>
    </AppContext.Provider>
  );
}

export default LandingPage;
