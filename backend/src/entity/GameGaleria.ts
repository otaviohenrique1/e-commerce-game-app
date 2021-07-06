import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from "typeorm";
import Game from "./Game";

@Entity('game_galeria')
export default class GameGaleria {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  path: string;

  @ManyToOne(() => Game, game => game.game_galeria)
  @JoinColumn({ name: 'id_game' })
  game: Game;
}