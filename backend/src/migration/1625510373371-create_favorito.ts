import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createFavorito1625510373371 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: 'favoritos',
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
          name: 'id_game',
          type: 'integer'
        },
        {
          name: 'id_usuario',
          type: 'integer'
        },
        {
          name: 'favoritado',
          type: 'boolean'
        },
        {
          name: 'data_cadastro',
          type: 'datetime'
        },
      ],
      foreignKeys: [
        {
          name: 'FavoritoProduto',
          columnNames: ['id_produto'],
          referencedTableName: 'produtos',
          referencedColumnNames: ['id'],
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE'
        },
        {
          name: 'FavoritoUsuario',
          columnNames: ['id_usuario'],
          referencedTableName: 'usuarios',
          referencedColumnNames: ['id'],
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE'
        }
      ]
    }));
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('favoritos');
  }
}
