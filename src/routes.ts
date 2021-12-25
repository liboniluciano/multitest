import { Router } from "express";
import multer from "multer";
import multerConfig from "./api/config/multer";
import { uploadFileController } from "./api/useCases/UploadFile";

const routes = Router();
const upload = multer(multerConfig);

routes.get("/ping", (req, res) => {
  return res.json({ message: "Hello Multi!" });
});

routes.post("/files", upload.single("file"), (req, res) => {
  if (!req.file) {
    return res.status(500).json({
      error: "Could not upload the file. Only txt type documents are accepted.",
    });
  }
  return res.json({ message: "The upload was a success!" });
});

export default routes;
