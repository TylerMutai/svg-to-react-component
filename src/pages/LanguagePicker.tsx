import React, { ChangeEvent, useContext } from "react";
import AppContext from "../utils/contexts/appContext";

const languageMapper = {
  ts: "TypeScript",
  js: "JavaScript",
};

function LanguagePicker() {
  const { language, setLanguage } = useContext(AppContext);
  const _handleSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setLanguage(e.target.value as any);
  };

  return (
    <div className="flex flex-col w-full items-center justify-center gap-2">
      <p className="italic font-['Figtree-ExtraBold'] font-bold">
        (Want the output in a different language? Change it here. Current:{" "}
        {languageMapper[language]})
      </p>
      <select onChange={_handleSelectChange}>
        <option value={"ts"}> TypeScript (Default)</option>
        <option value={"js"}> JavaScript</option>
      </select>
    </div>
  );
}

export default LanguagePicker;
