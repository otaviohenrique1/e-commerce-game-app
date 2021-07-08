import { Entity, Column, PrimaryGeneratedColumn, JoinColumn, OneToOne } from "typeorm";
import Games from "./Games";
import Usuarios from "./Usuarios";

@Entity()
export default class Favoritos {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(() => Games)
  @JoinColumn({ name: 'id_game' })
  game: Games;

  @OneToOne(() => Usuarios)
  @JoinColumn({ name: 'id_usuario' })
  usuario: Usuarios;

  @Column()
  favoritado: boolean;

  @Column()
  data_cadastro: Date;
}