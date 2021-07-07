import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export default class Usuario {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;

  @Column()
  data_cadastro: Date;
}
