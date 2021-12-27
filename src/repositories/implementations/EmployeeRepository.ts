import { EntityRepository, Repository } from "typeorm";
import { IFindAllEmployeeDTO } from "../../api/useCases/FindAllEmployee/FindAllEmployeeDTO";
import { IEmployeeRepository } from "../IEmployeeRepository";
import Employee from "../entities/Employee";

@EntityRepository(Employee)
export class EmployeeRepository
  extends Repository<Employee>
  implements IEmployeeRepository
{
  public async findAll(
    page: number,
    quantity: number
  ): Promise<IFindAllEmployeeDTO> {
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

  public async findWithParameters(querySearch: any): Promise<Employee[]> {
    let query = this.createQueryBuilder("employee");

    if (querySearch.cpf)
      query = query.andWhere(`employee.cpf = :q`, { q: querySearch.cpf });

    if (querySearch.role)
      query = query.andWhere(`employee.id_role = :q`, { q: querySearch.role });

    if (querySearch.name)
      query = query.andWhere(`employee.name LIKE :q`, {
        q: `${querySearch.name}%`,
      });

    if (querySearch.salary)
      query = query.andWhere(`employee.salary = :q`, { q: querySearch.salary });

    if (querySearch.status) {
      query = query.andWhere(`employee.status = :q`, {
        q: querySearch.status === "ATIVO" ? 1 : 0,
      });
    }

    query = query.innerJoinAndSelect("employee.role", "r");
    query = query.innerJoinAndSelect("employee.level", "l");

    const employee = query.getMany();

    return employee;
  }
}
