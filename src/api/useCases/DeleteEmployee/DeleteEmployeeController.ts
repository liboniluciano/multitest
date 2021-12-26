import { Request, Response } from "express";
import { FindOneEmployeeUseCase } from "../FindOneEmployee/FindOneEmployeeUseCase";
import { DeleteEmployeeUseCase } from "./DeleteEmployeeUseCase";

export class DeleteEmployeeController {
  constructor(
    private deleteEmployeeUseCase = new DeleteEmployeeUseCase(),
    private findOneEmployeeUseCase = new FindOneEmployeeUseCase()
  ) {}

  async handle(req: Request, res: Response): Promise<Response> {
    const { cpf } = req.params;

    const hasEmployee = await this.findOneEmployeeUseCase.execute(Number(cpf));

    if (!hasEmployee) {
      return res.status(404).json({ error: "This employee was not found!" });
    }

    await this.deleteEmployeeUseCase.execute(hasEmployee);

    return res.send();
  }
}
