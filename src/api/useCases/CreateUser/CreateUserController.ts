import { Request, Response } from "express";
import { CreateUserUseCase } from "./CreateUserUseCase";

export class CreateUserController {
  constructor(private createUserUseCase = new CreateUserUseCase()) {}

  async handle(req: Request, res: Response): Promise<Response> {
    try {
      await this.createUserUseCase.execute(req.body);
      return res.send();
    } catch (error) {
      return res.status(500).json({ error: "There was an error saving user." });
    }
  }
}
