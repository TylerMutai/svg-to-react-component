import React, { useContext } from "react";
import CustomButton from "../components/CustomButton/CustomButton";
import AppContext from "../utils/contexts/appContext";

function ConvertButton() {
  const { isLoading, setIsLoading, files } = useContext(AppContext);

  const _handleSubmit = async () => {
    let message;
    try {
      setIsLoading(true);
      const formData = new FormData();
      for (const f of files) {
        formData.set("files", f);
      }
      const res = await fetch("/api/file", {
        method: "POST",
        body: formData,
      });
      const json = await res.json();
      if (!res.ok) {
        const blob = await res.blob();
        window.open(URL.createObjectURL(blob), "_blank");
        message = `The operation was successful. Your zip file should begin downloading shortly.`;
      } else {
        message = `An error occurred when processing files. Message: ${JSON.stringify(json)}`;
      }
    } catch (e) {
      message = `An error occurred when processing files. Message: ${e.message}`;
    }
    alert(message);
    setIsLoading(false);
  };
  return (
    <CustomButton disabled={isLoading} onClick={_handleSubmit}>
      {isLoading ? "Processing..." : "Convert"}
    </CustomButton>
  );
}

export default ConvertButton;
