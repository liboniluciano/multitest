import { Request, Response } from "express";
import { FindAllEmployeeUseCase } from "./FindAllEmployeeUseCase";

export class FindAllEmployeeController {
  constructor(private findAllEmployeeUseCase = new FindAllEmployeeUseCase()) {}

  async handle(req: Request, res: Response): Promise<Response> {
    try {
      const employees = await this.findAllEmployeeUseCase.execute(
        Number(req.query.page),
        Number(req.query.quantity)
      );

      return res.send(employees);
    } catch (error) {
      console.log(error);
      return res
        .status(500)
        .json({ error: "There was an error fetching the employees." });
    }
  }
}
