import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createGameGaleria1625515776768 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: 'game_galeria',
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
          name: 'GameGaleria',
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
    await queryRunner.dropTable('game_galeria');
  }
}
