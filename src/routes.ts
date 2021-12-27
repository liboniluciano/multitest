import { Router } from "express";
import multer from "multer";
import multerConfig from "./api/config/multer";
import { createEmployeeController } from "./api/useCases/CreateEmployee";
import { employeeFromFileController } from "./api/useCases/EmployeeFromFile";
import { uploadFileController } from "./api/useCases/UploadFile";
import { deleteEmployeeController } from "./api/useCases/DeleteEmployee";
import { updateEmployeeController } from "./api/useCases/UpdateEmployee";
import { findAllEmployeeController } from "./api/useCases/FindAllEmployee";
import { findEmployeeController } from "./api/useCases/FindEmployee";

const routes = Router();
const upload = multer(multerConfig);

routes.post("/upload", upload.single("file"), (req, res) => {
  return uploadFileController.handle(req, res);
});

routes.post("/employee", (req, res) => {
  return createEmployeeController.handle(req, res);
});

routes.get("/employee/all", (req, res) => {
  return findAllEmployeeController.handle(req, res);
});

routes.get("/employee", (req, res) => {
  return findEmployeeController.handle(req, res);
});

routes.put("/employee", (req, res) => {
  return updateEmployeeController.handle(req, res);
});

routes.delete("/employee/:cpf", (req, res) => {
  return deleteEmployeeController.handle(req, res);
});

routes.post("/employeeFile", (req, res) => {
  return employeeFromFileController.handle(req, res);
});

routes.get("/ping", (req, res) => {
  return res.json({ message: "Hello Multi!" });
});

export default routes;
