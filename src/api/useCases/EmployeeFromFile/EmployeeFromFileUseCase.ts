import { getDataFromPath } from "../../utils/getDataFromPath";
import { getFilesFromPath } from "../../utils/getFilesFromPath";

export class EmployeeFromFileUseCase {
  async execute() {
    const filePath = await getFilesFromPath();
    const data = await getDataFromPath(filePath);
  }
}
