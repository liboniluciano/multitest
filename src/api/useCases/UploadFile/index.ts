import { UploadFileController } from "./UploadFileController";
import { UploadFileUseCase } from "./UploadFileUseCase";

const uploadFileUserCase = new UploadFileUseCase();

const uploadFileController = new UploadFileController(uploadFileUserCase);

export { uploadFileController };
