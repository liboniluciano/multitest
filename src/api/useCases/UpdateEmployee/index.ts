import { FindOneEmployeeUseCase } from "../FindOneEmployee/FindOneEmployeeUseCase";
import { UpdateEmployeeController } from "./UpdateEmployeeController";
import { UpdateEmployeeUseCase } from "./UpdateEmployeeUseCase";

const updateEmployeeUseCase = new UpdateEmployeeUseCase();
const findOneEmployeeUseCase = new FindOneEmployeeUseCase();

const updateEmployeeController = new UpdateEmployeeController();

export { updateEmployeeController };
