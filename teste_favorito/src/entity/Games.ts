import { Entity, Column, PrimaryGeneratedColumn, JoinColumn, OneToMany } from "typeorm";

@Entity()
export default class Games {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  titulo: string;

  @Column()
  data_cadastro: Date;
}
