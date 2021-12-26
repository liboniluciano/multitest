import { getRepository } from "typeorm";
import Employee from "../../../repositories/entities/Employee";

export class FindOneEmployeeUseCase {
  async execute(cpf: number): Promise<Employee> {
    const repoEmployee = getRepository(Employee);

    const employee = await repoEmployee.findOne({
      where: { cpf },
    });

    return employee;
  }
}
