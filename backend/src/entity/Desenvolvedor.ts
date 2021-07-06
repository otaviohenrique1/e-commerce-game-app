import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export default class Desenvolvedor {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;
  
  @Column()
  email: string;

  @Column()
  senha: string;

  @Column()
  telefone: string;

  @Column()
  celular: string;

  @Column()
  pais: string;

  @Column()
  cidade: string;

  @Column()
  estado: string;

  @Column()
  data_cadastro: Date;
}
