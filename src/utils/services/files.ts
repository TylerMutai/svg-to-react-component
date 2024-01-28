export const submitFiles = async (
  language: "ts" | "js",
  files: File[],
): Promise<string> => {
  let message;
  try {
    const formData = new FormData();
    formData.append("language", language);
    for (const f of files) {
      formData.append("files", f);
    }
    const res = await fetch("/api/file", {
      method: "POST",
      body: formData,
    });
    if (res.ok) {
      const blob = await res.blob();
      window.open(URL.createObjectURL(blob), "_blank");
      message = `The operation was successful. Your zip file should begin downloading shortly.`;
    } else {
      const json = await res.json();
      message = json.message;
    }
  } catch (e) {
    message = `An error occurred when processing files. Message: ${e.message}`;
  }
  return message;
};
