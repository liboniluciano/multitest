import { getRepository } from "typeorm";
import User from "../../../repositories/entities/User";

export class FindUserUseCase {
  async execute(mail: string) {
    const userRepo = getRepository(User);

    const user = await userRepo.findOne({
      where: { mail },
    });

    return user;
  }
}
