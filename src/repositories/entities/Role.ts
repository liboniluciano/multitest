import { MinLength } from "class-validator";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import Employee from "./Employee";

@Entity()
export default class Role {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @MinLength(2, { message: "Role must be at least 2 characters" })
  name?: string;

  @OneToMany((type) => Employee, (role) => Role)
  role?: Role;
}
