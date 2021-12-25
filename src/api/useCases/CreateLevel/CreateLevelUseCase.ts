import { getRepository } from "typeorm/globals";
import Level from "../../../repositories/entities/Level";
import { ICreateLevelDTO } from "./CreateLevelDTO";

export class CreateLevelUseCase {
  async execute(nameLevel: string) {
    const repoLevel = getRepository(Level);

    const hasLevel = await repoLevel.findOne({
      where: { name: nameLevel },
    });

    if (!hasLevel) {
      const obj: ICreateLevelDTO = {
        name: nameLevel,
      };
      const { id } = await repoLevel.save(obj);
      return id;
    } else {
      return hasLevel.id;
    }
  }
}
