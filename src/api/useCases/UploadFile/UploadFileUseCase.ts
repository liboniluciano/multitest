export class UploadFileUseCase {
  async execute(file: any) {
    const { mimetype } = file;
    if (mimetype !== "text/plain") {
      throw new Error("File type not supported");
    }
  }
}
