import { Entity, Column, PrimaryGeneratedColumn, JoinColumn, OneToOne } from "typeorm";
import Funcionario from "./Funcionario";

@Entity()
export default class Promocao {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;

  @Column()
  tema: string;

  @Column()
  produtos: string;

  @Column()
  descricao: string;

  @Column()
  inicio: Date;

  @Column()
  termino: Date;

  @OneToOne(() => Funcionario)
  @JoinColumn()
  id_funcionario: number;

  @Column()
  data_cadastro: Date;
}