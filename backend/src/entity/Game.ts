import { Entity, Column, PrimaryGeneratedColumn, JoinColumn, OneToMany } from "typeorm";
import GameCapa from "./GameCapa";
import GameExtras from "./GameExtras";
import GameGaleria from "./GameGaleria";

@Entity()
export default class Game {
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
  game_capa: GameCapa[];

  @OneToMany(() => GameGaleria, galeria => galeria.game, {
    cascade: ['insert', 'update', 'remove']
  })
  @JoinColumn({ name: 'id_game' })
  game_galeria: GameGaleria[];

  @OneToMany(() => GameExtras, galeria => galeria.game_base, {
    cascade: ['insert', 'update', 'remove']
  })
  @JoinColumn({ name: 'id_game' })
  game_extras: GameExtras[];

  @Column()
  data_cadastro: Date;
}
