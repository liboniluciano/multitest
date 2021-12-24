import { MinLength } from "class-validator";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export default class Level {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @MinLength(2, { message: "Level must be at least 2 characters" })
  name: string;
}
