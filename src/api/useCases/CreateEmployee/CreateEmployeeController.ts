import { validate } from "class-validator";
import { Request, Response } from "express";
import { CreateEmployeeUseCase } from "./CreateEmployeeUseCase";

export class CreateEmployeeController {
  constructor(private createEmployeeUseCase = new CreateEmployeeUseCase()) {}

  async handle(req: Request, res: Response): Promise<Response> {
    try {
      const employee = await this.createEmployeeUseCase.execute(req.body);

      return res.status(201).json(employee);
    } catch (error) {
      console.log(error);
      return res
        .status(500)
        .json({ error: "There was an error saving employee." });
    }
  }
}
