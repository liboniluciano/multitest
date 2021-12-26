import { getCustomRepository } from "typeorm";
import { EmployeeRepository } from "../../../repositories/entities/implementations/EmployeeRepository";

export class FindAllEmployeeUseCase {
  async execute(page: number, quantity: number) {
    const repoEmployee = getCustomRepository(EmployeeRepository);
    const employees = await repoEmployee.findAll(page, quantity);

    return employees;
  }
}
