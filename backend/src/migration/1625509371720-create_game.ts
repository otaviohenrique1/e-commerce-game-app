import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createGame1625509371720 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: 'games',
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
          name: 'titulo',
          type: 'varchar'
        },
        {
          name: 'genero',
          type: 'varchar'
        },
        {
          name: 'desenvolvedor',
          type: 'varchar'
        },
        {
          name: 'distribuidora',
          type: 'varchar'
        },
        {
          name: 'data_de_lancamento',
          type: 'datetime'
        },
        {
          name: 'classificacao',
          type: 'varchar'
        },
        {
          name: 'serie',
          type: 'varchar'
        },
        {
          name: 'sinopse',
          type: 'varchar'
        },
        {
          name: 'descricao',
          type: 'varchar'
        },
        {
          name: 'preco',
          type: 'varchar'
        },
        {
          name: 'plataforma',
          type: 'varchar'
        },
        {
          name: 'idiomas_dublagem',
          type: 'varchar'
        },
        {
          name: 'idiomas_legendas',
          type: 'varchar'
        },
        {
          name: 'idiomas_interface',
          type: 'varchar'
        },
        {
          name: 'modo_de_jogo',
          type: 'varchar'
        },
        {
          name: 'data_cadastro',
          type: 'datetime'
        },
      ]
    }));
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('games');
  }
}
