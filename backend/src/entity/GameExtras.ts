import { Entity, Column, PrimaryGeneratedColumn, JoinColumn, OneToMany, ManyToOne } from "typeorm";
import Game from "./Game";
import GameCapa from "./GameCapa";
import GameGaleria from "./GameGaleria";

@Entity()
export default class GameExtras {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;

  @Column()
  genero: string;

  @Column()
  desenvolvedor: string;

  @Column()
  distribuidora: string;

  @Column()
  data_de_lancamento: Date;

  @Column()
  classificacao: string;

  @Column()
  serie: string;

  @Column()
  sinopse: string;

  @Column()
  descricao: string;

  @Column()
  preco: number;

  @Column()
  plataforma: string;

  @Column()
  idiomas_dublagem: string;

  @Column()
  idiomas_legendas: string;

  @Column()
  idiomas_interface: string;

  @Column()
  modo_de_jogo: string;

  @OneToMany(() => GameCapa, game_capa => game_capa.game, {
    cascade: ['insert', 'update', 'remove']
  })
  @JoinColumn({ name: 'id_game' })
  game_capa: GameCapa;

  @OneToMany(() => GameGaleria, galeria => galeria.game, {
    cascade: ['insert', 'update', 'remove']
  })
  @JoinColumn({ name: 'id_game' })
  game_galeria: GameGaleria[];
  
  @ManyToOne(() => Game, game => game.game_extras)
  @JoinColumn({ name: 'id_game' })
  game_base: Game;
  
  @Column()
  data_cadastro: Date;
}