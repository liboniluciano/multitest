import { IFindAllEmployeeDTO } from "../api/useCases/FindAllEmployee/FindAllEmployeeDTO";
import Employee from "./entities/Employee";

export interface IEmployeeRepository {
  findAll(page: number, quantity: number): Promise<IFindAllEmployeeDTO>;
}
