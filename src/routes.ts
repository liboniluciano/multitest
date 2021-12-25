import { Router } from "express";
import multer from "multer";
import multerConfig from "./api/config/multer";
import { employeeFromFileController } from "./api/useCases/EmployeeFromFile";
import { uploadFileController } from "./api/useCases/UploadFile";

const routes = Router();
const upload = multer(multerConfig);

routes.post("/upload", upload.single("file"), (req, res) => {
  return uploadFileController.handle(req, res);
});

routes.post("/employeeFile", (req, res) => {
  return employeeFromFileController.handle(req, res);
});

routes.get("/ping", (req, res) => {
  return res.json({ message: "Hello Multi!" });
});

export default routes;
