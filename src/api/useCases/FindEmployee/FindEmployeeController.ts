import { Request, Response } from "express";
import { IFindAllEmployeeDTO } from "../FindAllEmployee/FindAllEmployeeDTO";
import { FindEmployeeUseCase } from "./FindEmployeeUseCase";

export class FindEmployeeController {
  constructor(private findEmployeeUseCase = new FindEmployeeUseCase()) {}
  async handle(req: Request, res: Response): Promise<Response> {
    try {
      const employee = await this.findEmployeeUseCase.execute(req.query);
      return res.send(employee);
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "Deu ruim" });
    }
  }
}
