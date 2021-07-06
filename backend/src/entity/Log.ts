import { Entity, Column, PrimaryGeneratedColumn, JoinColumn, OneToOne } from "typeorm";
import Funcionario from "./Funcionario";

@Entity()
export default class Log {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(() => Funcionario)
  @JoinColumn()
  id_funcionario: number;

  @Column()
  tempo_acesso: Date;

  @Column()
  data_acesso: Date;
}