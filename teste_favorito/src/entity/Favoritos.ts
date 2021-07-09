import { Entity, Column, PrimaryGeneratedColumn, JoinColumn, OneToOne, ManyToOne } from "typeorm";
import Games from "./Games";
import Usuarios from "./Usuarios";

@Entity()
export default class Favoritos {
  @PrimaryGeneratedColumn()
  id: number;

  // @OneToOne(() => Games)
  // @JoinColumn({ name: 'id_game' })
  // game: Games;

  // @OneToOne(() => Usuarios)
  // @JoinColumn({ name: 'id_usuario' })
  // usuario: Usuarios;

  // @OneToOne(() => Games)
  // @JoinColumn({ name: 'id_game' })
  // id_game: number;

  // @OneToOne(() => Usuarios,)
  // @JoinColumn({ name: 'id_usuario' })
  // id_usuario: number;

  @ManyToOne(() => Games, games => games.id)
  @JoinColumn({ name: 'id_game' })
  game: Games;

  @ManyToOne(() => Usuarios, usuarios => usuarios.id)
  @JoinColumn({ name: 'id_usuario' })
  usuario: Usuarios;

  @Column()
  favoritado: boolean;
}