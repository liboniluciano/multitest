import {
  BeforeInsert,
  BeforeUpdate,
  Column,
  Entity,
  PrimaryGeneratedColumn,
} from "typeorm";
import bcrypt from "bcryptjs";

@Entity()
export default class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  mail: string;

  @Column()
  password: string;

  @BeforeInsert()
  @BeforeUpdate()
  async createHashPassword() {
    this.password = bcrypt.hashSync(this.password, 8);
  }

  checkPassword(password: string) {
    return bcrypt.compareSync(password, this.password);
  }
}
