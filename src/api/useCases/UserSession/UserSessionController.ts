import { Request, Response } from "express";
import { UserSessionUseCase } from "./UserSessionUseCase";

export class UserSessionController {
  constructor(private userSessionUserCase = new UserSessionUseCase()) {}

  async handle(req: Request, res: Response): Promise<Response> {
    try {
      const userToken = await this.userSessionUserCase.execute(req.body);
      return res.send(userToken);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ error: "deu ruim" });
    }
  }
}
