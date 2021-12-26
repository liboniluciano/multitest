import { Request, Response } from "express";
import { FindOneEmployeeUseCase } from "../FindOneEmployee/FindOneEmployeeUseCase";
import { UpdateEmployeeUseCase } from "./UpdateEmployeeUseCase";

export class UpdateEmployeeController {
  constructor(
    private findOneEmployeeUseCase = new FindOneEmployeeUseCase(),
    private updateEmployeeUseCase = new UpdateEmployeeUseCase()
  ) {}
  async handle(req: Request, res: Response): Promise<Response> {
    const { cpf } = req.body;

    if (!cpf) {
      return res.status(400).json({ message: "CPF is required" });
    }

    try {
      const hasEmployee = await this.findOneEmployeeUseCase.execute(
        Number(cpf)
      );

      if (!hasEmployee) {
        return res.status(404).json({ error: "This employee was not found!" });
      }

      await this.updateEmployeeUseCase.execute(hasEmployee, req.body);

      res.status(201).send({ message: "Employee updated successfully!" });
    } catch (error) {
      return res
        .status(500)
        .json({ error: "There was an unexpected error updating employee" });
    }
  }
}
