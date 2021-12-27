import jwt from "jsonwebtoken";
import authConfig from "../../config/auth";
import { IUserSessionDTO } from "./UserSessionDTO";

export class UserSessionUseCase {
  async execute(userSession: IUserSessionDTO) {
    const { name, mail } = userSession;

    console.log(authConfig.secret);

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
