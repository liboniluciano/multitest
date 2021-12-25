import { EmployeeFromFileController } from "./EmployeeFromFileController";
import { EmployeeFromFileUseCase } from "./EmployeeFromFileUseCase";

const employeeFromFileUserCase = new EmployeeFromFileUseCase();

const employeeFromFileController = new EmployeeFromFileController(
  employeeFromFileUserCase
);

export { employeeFromFileController };
