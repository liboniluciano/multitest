import { Request, Response } from "express";
import { UploadFileUseCase } from "./UploadFileUseCase";

export class UploadFileController {
  constructor(private uploadFileUserCase: UploadFileUseCase) {}

  async handle(req: Request, res: Response): Promise<Response> {
    try {
      await this.uploadFileUserCase.execute(req.file);

      return res.status(200).json({ message: "The upload was successful!" });
    } catch (err) {
      return res.status(500).json({
        error:
          "Could not upload the file. Only txt type documents are accepted",
      });
    }
  }
}
