import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createAvatarImagem1625509414214 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: 'avatar_imagens',
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
          name: 'id_usuario',
          type: 'integer'
        },
      ],
      foreignKeys: [
        {
          name: 'AvatarUsuario',
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
    await queryRunner.dropTable('avatar_imagens');
  }
}
