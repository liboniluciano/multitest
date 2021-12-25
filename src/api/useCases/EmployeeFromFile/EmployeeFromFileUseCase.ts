import { getDataFromPath } from "../../utils/getDataFromPath";
import { getFilesFromPath } from "../../utils/getFilesFromPath";
import { getRepository } from "typeorm";

import Level from "../../../repositories/entities/Level";
import Role from "../../../repositories/entities/Role";
import Employee from "../../../repositories/entities/Employee";
import { formatDate } from "../../utils/formatDate";

interface ILevel {
  name: string;
}

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
  id_level: number;
  id_role: number;
}

export class EmployeeFromFileUseCase {
  async execute() {
    let idLevel = 0;
    let idRole = 0;

    const filePath = await getFilesFromPath();
    const data = await getDataFromPath(filePath);

    const repoLevel = getRepository(Level);
    const repoRole = getRepository(Role);
    const repoEmployee = getRepository(Employee);

    try {
      for (var i = 1; i < 10; i++) {
        const employee = data[i].split(";");
        const formattedDate = formatDate(employee[0]);

        const roleAndLevel = employee[1].split(" ");

        const hasRole = await repoRole.findOne({
          where: { name: roleAndLevel[0] },
        });
        if (!hasRole) {
          const obj: IRole = {
            name: roleAndLevel[0].toString(),
          };
          const { id } = await repoRole.save(obj);
          idRole = id;
        }

        const hasLevel = await repoLevel.findOne({
          where: { name: roleAndLevel[1] },
        });
        if (!hasLevel) {
          const obj: ILevel = {
            name: roleAndLevel[1].toString(),
          };
          const { id } = await repoLevel.save(obj);
          idLevel = id;
        }

        const employeeSave: IEmployee = {
          registration_date: new Date(formattedDate),
          cpf: Number(employee[2]),
          name: employee[3],
          uf_born: employee[4],
          salary: Number(employee[5]),
          status: employee[6] === "ATIVO" ? true : false,
          id_level: hasLevel.id || idLevel,
          id_role: hasRole.id || idRole,
        };

        console.log(employeeSave);

        await repoEmployee.save(employeeSave);
      }
    } catch (error) {
      console.log(error);
    }
  }
}
