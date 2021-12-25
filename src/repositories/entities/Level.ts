import { MinLength } from "class-validator";
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import Employee from "./Employee";

@Entity()
export default class Level {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @MinLength(2, { message: "Level must be at least 2 characters" })
  name: string;

  @OneToMany((type) => Employee, (level) => Level)
  employee: Employee;
}
