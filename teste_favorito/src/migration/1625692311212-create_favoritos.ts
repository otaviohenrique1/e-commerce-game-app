import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createFavorito1625692311212 implements MigrationInterface {
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
          type: 'integer',
          unsigned: true,
        },
        {
          name: 'id_usuario',
          type: 'integer',
          unsigned: true,
        },
        {
          name: 'favoritado',
          type: 'boolean'
        }
      ],
      foreignKeys: [
        {
          name: 'FavoritoGame',
          columnNames: ['id_game'],
          referencedTableName: 'games',
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
