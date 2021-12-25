import { EmployeeFromFileUseCase } from "../EmployeeFromFile/EmployeeFromFileUseCase";
import { UploadFileController } from "./UploadFileController";
import { UploadFileUseCase } from "./UploadFileUseCase";

const uploadFileUserCase = new UploadFileUseCase();
const employeeFromFileuseCase = new EmployeeFromFileUseCase();

const uploadFileController = new UploadFileController(
  uploadFileUserCase,
  employeeFromFileuseCase
);

export { uploadFileController };
