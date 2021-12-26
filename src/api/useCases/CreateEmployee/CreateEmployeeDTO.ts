interface ILevel {
  id: number;
}

interface IRole {
  id: number;
}

export interface ICreateEmployeeDTO {
  registration_date: Date;
  cpf: number;
  name: string;
  uf_born: string;
  salary: number;
  status: boolean;
  level: ILevel;
  role: IRole;
}
