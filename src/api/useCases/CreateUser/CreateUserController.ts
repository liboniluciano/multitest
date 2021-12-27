import { Request, Response } from "express";
import { CreateUserUseCase } from "./CreateUserUseCase";

export class CreateUserController {
  constructor(private createUserUseCase = new CreateUserUseCase()) {}

  async handle(req: Request, res: Response): Promise<Response> {
    const user = await this.createUserUseCase.execute(req.body);
    return res.send();
  }
}
