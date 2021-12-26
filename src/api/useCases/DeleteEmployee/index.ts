import { FindOneEmployeeUseCase } from "../FindOneEmployee/FindOneEmployeeUseCase";
import { DeleteEmployeeController } from "./DeleteEmployeeController";
import { DeleteEmployeeUseCase } from "./DeleteEmployeeUseCase";

const deleteEmployeeUseCase = new DeleteEmployeeUseCase();
const findOneEmployeeUseCase = new FindOneEmployeeUseCase();

const deleteEmployeeController = new DeleteEmployeeController(
  deleteEmployeeUseCase,
  findOneEmployeeUseCase
);

export { deleteEmployeeController };
