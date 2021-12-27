import jwt from "jsonwebtoken";
import { getRepository } from "typeorm";
import User from "../../../repositories/entities/User";
import authConfig from "../../config/auth";
import { IUserSessionDTO } from "./UserSessionDTO";

export class UserSessionUseCase {
  async execute(userSession: IUserSessionDTO) {
    const { name, mail } = userSession;

    const obj = {
      user: {
        name,
        mail,
      },
      token: jwt.sign({ name, mail }, authConfig.secret || "", {
        expiresIn: authConfig.expiresIn,
      }),
    };
    return obj;
  }
}
