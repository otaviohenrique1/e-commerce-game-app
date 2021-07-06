import { Entity, Column, PrimaryGeneratedColumn, JoinColumn, OneToOne } from "typeorm";
import Usuario from "./Usuario";

@Entity()
export default class Compra {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  games: string;

  @Column()
  total_itens: number;

  @Column()
  total_preco: number;  

  @OneToOne(() => Usuario)
  @JoinColumn()
  id_usuario: number;

  @Column()
  data_cadastro: Date;
}