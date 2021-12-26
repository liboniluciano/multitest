import Employee from "../../../repositories/entities/Employee";

export interface IFindAllEmployeeDTO {
  data: Employee[];
  count: number;
}
