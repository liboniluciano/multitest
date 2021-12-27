import { getRepository } from "typeorm";
import Employee from "../../../repositories/entities/Employee";
import { formatDate } from "../../utils/formatDate";
import { ICreateEmployeeDTO } from "./CreateEmployeeDTO";
import { IRequestCreateEmployeeDTO } from "./RequestCreateEmployeeDTO";

export class CreateEmployeeUseCase {
  async execute(
    employee: IRequestCreateEmployeeDTO
  ): Promise<ICreateEmployeeDTO> {
    const employeeRepo = getRepository(Employee);

    const {
      registration_date,
      cpf,
      id_level,
      name,
      id_role,
      salary,
      status,
      uf_born,
    } = employee;

    const hasEmployee = await employeeRepo.findOne({ where: { cpf } });

    if (hasEmployee) {
      throw new Error("Already an employee with this cpf");
    }

    const dateFormatted = formatDate(registration_date);

    const newEmployee: ICreateEmployeeDTO = {
      registration_date: new Date(dateFormatted),
      cpf,
      level: { id: id_level },
      name,
      role: { id: id_role },
      salary,
      status: status === "ATIVO" ? true : false,
      uf_born,
    };

    await employeeRepo.save(newEmployee);

    return newEmployee;
  }
}
