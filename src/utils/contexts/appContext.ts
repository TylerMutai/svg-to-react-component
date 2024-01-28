"use client";

import React, { Dispatch, SetStateAction } from "react";

interface AppContextProps {
  language: "ts" | "js";
  setLanguage: Dispatch<SetStateAction<string>>;
  files: File[];
  setFiles: Dispatch<SetStateAction<File[]>>;
  isLoading: boolean;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
}

const AppContext = React.createContext<AppContextProps>({
  language: "ts",
  files: [],
  isLoading: false,
  setLanguage: (() => {}) as any,
  setFiles: (() => {}) as any,
  setIsLoading: (() => {}) as any,
});

export default AppContext;
