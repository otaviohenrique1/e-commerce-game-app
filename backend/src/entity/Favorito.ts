import { Entity, Column, PrimaryGeneratedColumn, JoinColumn, OneToOne } from "typeorm";
import Game from "./Game";
import Usuario from "./Usuario";

@Entity()
export default class Favorito {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(() => Game)
  @JoinColumn()
  id_game: number;

  @OneToOne(() => Usuario)
  @JoinColumn()
  id_usuario: number;

  @Column()
  favoritado: boolean;
  
  @Column()
  categoria: string;

  @Column()
  data_cadastro: Date;
}