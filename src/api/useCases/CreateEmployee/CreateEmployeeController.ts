import { validate } from "class-validator";
import { Request, Response } from "express";
import { FindOneEmployeeUseCase } from "../FindOneEmployee/FindOneEmployeeUseCase";
import { CreateEmployeeUseCase } from "./CreateEmployeeUseCase";

export class CreateEmployeeController {
  constructor(
    private createEmployeeUseCase = new CreateEmployeeUseCase(),
    private findOneEmployeeUseCase = new FindOneEmployeeUseCase()
  ) {}

  async handle(req: Request, res: Response): Promise<Response> {
    try {
      const hasEmployee = await this.findOneEmployeeUseCase.execute(
        req.body.cpf
      );

      if (hasEmployee) {
        return res.status(400).json({ error: "This employee already exists" });
      }

      const employee = await this.createEmployeeUseCase.execute(req.body);

      return res.status(201).json(employee);
    } catch (error) {
      return res
        .status(500)
        .json({ error: "There was an error saving employee." });
    }
  }
}
