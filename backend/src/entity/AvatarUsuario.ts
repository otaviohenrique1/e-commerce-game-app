import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from "typeorm";
import Usuario from "./Usuario";

@Entity('avatar_imagens')
export default class AvatarUsuario {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    path: string;

    @ManyToOne(() => Usuario, usuario => usuario.avatar_usuario)
    @JoinColumn({ name: 'id_usuario' })
    usuario: Usuario;
}