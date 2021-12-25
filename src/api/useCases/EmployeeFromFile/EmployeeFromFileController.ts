import { Request, Response } from "express";
import { EmployeeFromFileUseCase } from "./EmployeeFromFileUseCase";

export class EmployeeFromFileController {
  constructor(private employeeFromFileuseCase: EmployeeFromFileUseCase) {}
  async handle(req: Request, res: Response): Promise<Response> {
    await this.employeeFromFileuseCase.execute();
    try {
      return res.status(201).json({ message: "Deu bom" });
    } catch (err) {
      return res
        .status(500)
        .json({ error: "There was an error entering employees from file" });
    }
  }
}
