import { Max, MinLength } from "class-validator";
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import Level from "./Level";
import Role from "./Role";

@Entity()
export default class Employee {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  registration_date: Date;

  @ManyToOne((type) => Level, (employee) => Employee, {
    eager: true,
    cascade: true,
  })
  @JoinColumn({ name: "id_level" })
  level: Level;

  @ManyToOne((type) => Role, (employee) => Employee, {
    eager: true,
    cascade: true,
  })
  @JoinColumn({ name: "id_role" })
  role: Role;

  @MinLength(3, { message: "CPF must be at least 11 characters" })
  @Column("bigint")
  cpf: number;

  @Column({
    length: 100,
  })
  @MinLength(3, { message: "Name must be at least 3 characters!" })
  @Max(100, { message: "Name must have a maximum of 100 characters" })
  name: string;

  @MinLength(3, { message: "Uf Born must be at least 2 characters" })
  @Max(100, { message: "Uf Born must have a maximum of 2 characters" })
  @Column({
    length: 2,
  })
  uf_born: string;

  @Column("decimal", { precision: 6, scale: 2 })
  salary: number;

  @Column("bit")
  status: boolean;
}
