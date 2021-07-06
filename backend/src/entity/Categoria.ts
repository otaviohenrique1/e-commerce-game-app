import { Entity, Column, PrimaryGeneratedColumn, JoinColumn, OneToOne } from "typeorm";
import Funcionario from "./Funcionario";

@Entity()
export default class Categoria {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;
  
  @OneToOne(() => Funcionario)
  @JoinColumn()
  id_funcionario: number;

  @Column()
  data_cadastro: Date;
}