import { getRepository } from "typeorm";
import User from "../../../repositories/entities/User";
import { ICreateUserDTO } from "./CreateUserDTO";

export class CreateUserUseCase {
  async execute(user: ICreateUserDTO) {
    const userRepo = getRepository(User);

    const newUser = userRepo.create(user);
    return await userRepo.save(newUser);
  }
}
