import { Entity, Column, PrimaryGeneratedColumn, JoinColumn, OneToMany } from "typeorm";
import AvatarUsuario from "./AvatarUsuario";

@Entity()
export default class Usuario {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;

  @Column()
  perfil: string;

  @Column()
  email: string;

  @Column()
  senha: string;

  @Column()
  sexo: string;

  @Column()
  data_nascimento: Date;
  
  @Column()
  pais: string;
  
  @Column()
  cidade: string;
  
  @Column()
  estado: string;

  @Column()
  resumo: string;

  @Column()
  celular: string;

  @Column()
  url_personalizado: string;

  @OneToMany(() => AvatarUsuario, avatar => avatar.usuario, {
    cascade: ['insert', 'update']
  })
  @JoinColumn({ name: 'id_usuario' })
  avatar_usuario: AvatarUsuario;

  @Column()
  data_cadastro: Date;
}
