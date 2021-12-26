import { EntityRepository, Repository } from "typeorm";
import { IFindAllEmployeeDTO } from "../../../api/useCases/FindAllEmployee/FindAllEmployeeDTO";
import { IEmployeeRepository } from "../../IEmployeeRepository";
import Employee from "../Employee";

@EntityRepository(Employee)
export class EmployeeRepository
  extends Repository<Employee>
  implements IEmployeeRepository
{
  public async findAll(
    page: number,
    quantity: number
  ): Promise<IFindAllEmployeeDTO> {
    console.log(page, quantity);
    const take = quantity ?? 10;
    const skip = page ?? 0;

    const [result, total] = await this.findAndCount({
      order: { id: "DESC" },
      take,
      skip,
    });

    return {
      data: result,
      count: total,
    };
  }
}
