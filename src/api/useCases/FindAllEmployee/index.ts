import { EmployeeRepository } from "../../../repositories/entities/implementations/EmployeeRepository";
import { CreateLevelUseCase } from "../CreateLevel/CreateLevelUseCase";
import { FindAllEmployeeController } from "./FindAllEmployeeController";
import { FindAllEmployeeUseCase } from "./FindAllEmployeeUseCase";

const employeeRepository = new EmployeeRepository();

const findAllEmployeeUseCase = new FindAllEmployeeUseCase();

const findAllEmployeeController = new FindAllEmployeeController(
  findAllEmployeeUseCase
);

export { findAllEmployeeController };
