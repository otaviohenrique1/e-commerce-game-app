import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from "typeorm";
import Game from "./Game";

@Entity('game_capa')
export default class GameCapa {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  path: string;

  @ManyToOne(() => Game, game => game.game_capa)
  @JoinColumn({ name: 'id_game' })
  game: Game;
}