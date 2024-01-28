import { svgParser } from "../../../utils/actions/svgParser";
import fs from "fs";
import { NextRequest } from "next/server";

export async function POST(request: NextRequest): Promise<Response> {
  const formData = await request.formData();
  const language = (formData.get("language") || "ts") as any;
  const files = formData.getAll("files") as File[];
  const res = await svgParser(language, files);

  if (res.status && res.zipFilePath) {
    const blob = await fs.openAsBlob(res.zipFilePath);
    return new Response(blob, {
      status: 200,
      statusText: res.message,
      headers: {
        "Content-Type": `application/zip`,
        "Content-Length": `${blob.size}`,
      },
    });
  }

  return new Response(JSON.stringify(res), {
    status: 422,
    statusText: res.message,
    headers: {
      "Content-Type": "application/json",
    },
  });
}
