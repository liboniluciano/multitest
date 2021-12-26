import { FindOneEmployeeUseCase } from "../FindOneEmployee/FindOneEmployeeUseCase";
import { CreateEmployeeController } from "./CreateEmployeeController";
import { CreateEmployeeUseCase } from "./CreateEmployeeUseCase";

const createEmployeeUseCase = new CreateEmployeeUseCase();
const findOneEmployeeUseCase = new FindOneEmployeeUseCase();

const createEmployeeController = new CreateEmployeeController(
  createEmployeeUseCase,
  findOneEmployeeUseCase
);

export { createEmployeeController };
