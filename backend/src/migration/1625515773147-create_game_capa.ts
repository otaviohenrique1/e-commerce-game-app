import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createGameCapa1625515773147 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: 'game_capa',
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
          name: 'path',
          type: 'varchar'
        },
        {
          name: 'id_game',
          type: 'integer'
        },
      ],
      foreignKeys: [
        {
          name: 'GameCapa',
          columnNames: ['id_game'],
          referencedTableName: 'games',
          referencedColumnNames: ['id'],
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE'
        }
      ]
    }));
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('game_capa');
  }
}
