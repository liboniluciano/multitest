import { CreateEmployeeController } from "./CreateEmployeeController";
import { CreateEmployeeUseCase } from "./CreateEmployeeUseCase";

const createEmployeeUseCase = new CreateEmployeeUseCase();

const createEmployeeController = new CreateEmployeeController(
  createEmployeeUseCase
);

export { createEmployeeController };
