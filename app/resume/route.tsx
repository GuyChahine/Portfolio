import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET() {
  const filePath = path.join(process.cwd(), "public", "files", "resume.pdf");
  const fileBuffer = await fs.promises.readFile(filePath);

  return new NextResponse(fileBuffer, {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": 'attachment; filename="Guy Chahine Resume.pdf"',
      "Cache-Control": "no-cache",
    },
  });
}
