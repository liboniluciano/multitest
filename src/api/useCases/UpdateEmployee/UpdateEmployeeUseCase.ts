import { getRepository } from "typeorm";
import Employee from "../../../repositories/entities/Employee";
import { formatDate } from "../../utils/formatDate";
import { IRequestUpdateEmployeeDTO } from "./UpdateEmployeeRequestDTO";

export class UpdateEmployeeUseCase {
  async execute(
    employee: Employee,
    requestUpdate: IRequestUpdateEmployeeDTO
  ): Promise<void> {
    const repoEmployee = getRepository(Employee);
    const dateFormatted = requestUpdate.registration_date
      ? formatDate(requestUpdate.registration_date)
      : null;

    const updatedEmployee: Employee = {
      id: employee.id,
      registration_date: new Date(dateFormatted) ?? employee.registration_date,
      cpf: requestUpdate.cpf ?? employee.cpf,
      salary: requestUpdate.salary ?? employee.salary,
      name: requestUpdate.name ?? employee.name,
      uf_born: requestUpdate.uf_born ?? employee.uf_born,
      status:
        requestUpdate.status === "ATIVO" ? true : false ?? employee.status,
      level: { id: requestUpdate.id_level ?? employee.level.id },
      role: { id: requestUpdate.id_role ?? employee.role.id },
    };

    await repoEmployee.save(updatedEmployee);
  }
}
