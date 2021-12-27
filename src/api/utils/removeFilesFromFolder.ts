import { resolve } from "path";
import rimraf from "rimraf";

const folderUpload = resolve(__dirname, "..", "tmp", "uploads");

export const removeFilesFromFolder = async () => {
  try {
    rimraf(`${folderUpload}`, () => {});
  } catch (error) {}
};
