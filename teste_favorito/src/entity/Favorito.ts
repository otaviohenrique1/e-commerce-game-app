import { Entity, Column, PrimaryGeneratedColumn, JoinColumn, OneToOne } from "typeorm";
import Game from "./Game";
import Usuario from "./Usuario";

@Entity()
export default class Favorito {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(() => Game)
  @JoinColumn({ name: 'id_game' })
  game: Game;

  @OneToOne(() => Usuario)
  @JoinColumn({ name: 'id_usuario' })
  usuario: Usuario;

  @Column()
  favoritado: boolean;

  @Column()
  data_cadastro: Date;
}