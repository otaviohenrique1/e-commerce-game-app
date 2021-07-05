import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createDesenvolvedor1625510391613 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: 'desenvolvedores',
        columns: [
          {
            name: 'id',
            type: 'integer',
            unsigned: true,
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment'
          },
          {
            name: 'nome',
            type: 'varchar'
          },
          {
            name: 'email',
            type: 'varchar'
          },
          {
            name: 'senha',
            type: 'varchar'
          },
          {
            name: 'telefone',
            type: 'varchar'
          },
          {
            name: 'celular',
            type: 'varchar'
          },
          {
            name: 'pais',
            type: 'varchar'
          },
          {
            name: 'cidade',
            type: 'varchar'
          },
          {
            name: 'estado',
            type: 'varchar'
          },
          {
            name: 'data_cadastro',
            type: 'datetime'
          },
        ],
      }))
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('desenvolvedores');
  }
}
