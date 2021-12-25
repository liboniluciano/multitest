import { getRepository } from "typeorm";
import Role from "../../../repositories/entities/Role";
import { ICreateRoleDTO } from "./CreateRoleDTO";

export class CreateRoleUseCase {
  async execute(nameLevel: string) {
    const repoRole = getRepository(Role);

    const hasRole = await repoRole.findOne({
      where: { name: nameLevel },
    });
    if (!hasRole) {
      const obj: ICreateRoleDTO = {
        name: nameLevel,
      };
      const { id } = await repoRole.save(obj);
      return id;
    } else {
      return hasRole.id;
    }
  }
}
