import { resolve } from "path";
import fs from "fs";

export const getDataFromPath = async (path: string) => {
  const folderUpload = resolve(__dirname, "..", "tmp", "uploads", `${path[0]}`);
  return fs.readFileSync(`${folderUpload}`, "utf8").split("\n");
};
