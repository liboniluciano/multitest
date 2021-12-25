const fs = require("fs");
import { resolve } from "path";

export const getFilesFromPath = () => {
  const folderUpload = resolve(__dirname, "..", "tmp", "uploads");

  return fs.readdirSync(folderUpload);
};
