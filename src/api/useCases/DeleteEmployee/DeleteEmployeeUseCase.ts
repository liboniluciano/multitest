import { getRepository } from "typeorm";
import Employee from "../../../repositories/entities/Employee";

export class DeleteEmployeeUseCase {
  async execute(employee: Employee) {
    const repoEmployee = getRepository(Employee);

    await repoEmployee.remove(employee);
  }
}
