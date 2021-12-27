import { getCustomRepository, getRepository } from "typeorm";
import Employee from "../../../repositories/entities/Employee";
import { EmployeeRepository } from "../../../repositories/implementations/EmployeeRepository";

export class FindEmployeeUseCase {
  async execute(query: any) {
    const repoEmployee = getCustomRepository(EmployeeRepository);

    const employee = await repoEmployee.findWithParameters(query);

    return employee;
  }
}
