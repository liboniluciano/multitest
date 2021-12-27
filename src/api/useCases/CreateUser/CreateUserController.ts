import { validate } from "class-validator";
import { Request, Response } from "express";
import { getRepository } from "typeorm";
import Employee from "../../../repositories/entities/Employee";
import { CreateUserUseCase } from "./CreateUserUseCase";

export class CreateUserController {
  constructor(private createUserUseCase = new CreateUserUseCase()) {}

  async handle(req: Request, res: Response): Promise<Response> {
    const repo = getRepository(Employee);

    const user = repo.create(req.body);

    const errors = await validate(user);
    console.log(errors);
    if (errors.length === 0) {
      await this.createUserUseCase.execute(req.body);
      return res.send();
    }

    return res.status(400).json(errors.map((err) => err.constraints));
  }
}
