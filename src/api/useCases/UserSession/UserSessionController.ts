import { Request, Response } from "express";
import { FindUserUseCase } from "../UserFindUser/FindUserUseCase";
import { UserValidatePasswordUseCase } from "../UserValidatePassword/UserValidatePasswordUseCase";
import { UserSessionUseCase } from "./UserSessionUseCase";

export class UserSessionController {
  constructor(
    private userSessionUserCase = new UserSessionUseCase(),
    private findUserUseCase = new FindUserUseCase(),
    private userValidatePasswordUseCase = new UserValidatePasswordUseCase()
  ) {}

  async handle(req: Request, res: Response): Promise<Response> {
    try {
      const hasUser = await this.findUserUseCase.execute(req.body.mail);

      if (!hasUser) {
        return res.status(401).json({ error: "User not found!" });
      }

      const matchPassword = await this.userValidatePasswordUseCase.execute(
        hasUser,
        req.body.password
      );

      if (!matchPassword) {
        return res
          .status(401)
          .json({ error: "Password does not match correct!" });
      }

      const userToken = await this.userSessionUserCase.execute(req.body);
      return res.send(userToken);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ error: "deu ruim" });
    }
  }
}
