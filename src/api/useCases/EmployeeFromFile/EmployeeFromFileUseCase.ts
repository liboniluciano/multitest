import { getDataFromPath } from "../../utils/getDataFromPath";
import { getFilesFromPath } from "../../utils/getFilesFromPath";
import { getRepository } from "typeorm";

import Level from "../../../repositories/entities/Level";
import Role from "../../../repositories/entities/Role";
import Employee from "../../../repositories/entities/Employee";
import { formatDate } from "../../utils/formatDate";
import { CreateLevelUseCase } from "../CreateLevel/CreateLevelUseCase";

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

    let idRole = 0;

    const filePath = await getFilesFromPath();
    const data = await getDataFromPath(filePath);

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
            id: hasRole?.id || idRole,
          },
        };

        await repoEmployee.save(employeeSave);
      }
    } catch (error) {
      console.log(error);
    }
  }
}
