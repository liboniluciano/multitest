import { getDataFromPath } from "../../utils/getDataFromPath";
import { getFilesFromPath } from "../../utils/getFilesFromPath";
import { getRepository } from "typeorm";

import Level from "../../../repositories/entities/Level";
import Role from "../../../repositories/entities/Role";
import Employee from "../../../repositories/entities/Employee";
import { formatDate } from "../../utils/formatDate";
import { CreateLevelUseCase } from "../CreateLevel/CreateLevelUseCase";
import { CreateRoleUseCase } from "../CreateRole/CreateRoleUseCase";

interface IRole {
  name: string;
}

interface IEmployee {
  registration_date: Date;
  cpf: number;
  name: string;
  uf_born: string;
  salary: number;
  status: boolean;
  level: {
    id: number;
  };
  role: {
    id: number;
  };
}

export class EmployeeFromFileUseCase {
  async execute() {
    const createLevelUserCase = new CreateLevelUseCase();
    const createRoleUserCase = new CreateRoleUseCase();

    const filePath = await getFilesFromPath();

    if (!filePath) {
      return false;
    }

    const data = await getDataFromPath(filePath);

    const repoEmployee = getRepository(Employee);
    for (var i = 1; i < data.length; i++) {
      if (data[i].length === 0) {
        continue;
      }

      const employee = data[i].split(";");
      const formattedDate = formatDate(employee[0]);
      const roleAndLevel = employee[1].split(" ");

      const hasEmployees = await repoEmployee.findOne({
        where: { cpf: Number(employee[2]) },
      });

      if (hasEmployees) {
        continue;
      }

      const role = await createRoleUserCase.execute(roleAndLevel[0].toString());

      const level = await createLevelUserCase.execute(
        roleAndLevel[1].toString()
      );

      const employeeSave: IEmployee = {
        registration_date: new Date(formattedDate),
        cpf: Number(employee[2]),
        name: employee[3],
        uf_born: employee[4],
        salary: Number(employee[5]),
        status: employee[6] === "ATIVO" ? true : false,
        level: {
          id: level,
        },
        role: {
          id: role,
        },
      };

      await repoEmployee.save(employeeSave);
    }
  }
  catch(error) {
    console.log(error);
  }
}
