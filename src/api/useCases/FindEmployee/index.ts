import { FindEmployeeController } from "./FindEmployeeController";
import { FindEmployeeUseCase } from "./FindEmployeeUseCase";

const findEmployeeUseCase = new FindEmployeeUseCase();

const findEmployeeController = new FindEmployeeController(findEmployeeUseCase);

export { findEmployeeController };
