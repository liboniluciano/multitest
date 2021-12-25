import { Request, Response } from "express";
import { EmployeeFromFileUseCase } from "./EmployeeFromFileUseCase";

export class EmployeeFromFileController {
  constructor(private employeeFromFileuseCase: EmployeeFromFileUseCase) {}
  async handle(req: Request, res: Response): Promise<Response> {
    try {
      await this.employeeFromFileuseCase.execute();

      return res.status(201).json({ message: "Deu bom" });
    } catch (err) {
      return res.status(500).json({
        message:
          "There was an error entering employees from file. Check if it was uploaded",
      });
    }
  }
}
