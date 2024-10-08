// src/app/api/saveData/route.ts
import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import { parse } from "json2csv";

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();
    const csvFilePath = path.join(process.cwd(), "form_data.csv");
    const csvData = parse([{ name, email, message }], {
      header: !fs.existsSync(csvFilePath),
    });
    fs.appendFileSync(csvFilePath, csvData + "\n", "utf8");
    return NextResponse.json({ message: "Data saved successfully!" });
  } catch (error) {
    console.error("Error saving data:", error);
    return NextResponse.json({ error: "Failed to save data" }, { status: 500 });
  }
}
