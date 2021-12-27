import { getRepository } from "typeorm";
import User from "../../../repositories/entities/User";

export class UserValidatePasswordUseCase {
  async execute(user: User, password: string) {
    if (!user.checkPassword(password)) {
      return false;
    } else return true;
  }
}
