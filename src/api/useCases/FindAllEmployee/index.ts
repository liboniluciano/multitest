import { FindAllEmployeeController } from "./FindAllEmployeeController";
import { FindAllEmployeeUseCase } from "./FindAllEmployeeUseCase";

const findAllEmployeeUseCase = new FindAllEmployeeUseCase();

const findAllEmployeeController = new FindAllEmployeeController(
  findAllEmployeeUseCase
);

export { findAllEmployeeController };
