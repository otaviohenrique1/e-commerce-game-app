import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createLog1625510377131 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: 'logs',
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
          name: 'id_funcionario',
          type: 'integer'
        },
        {
          name: 'tempo_acesso',
          type: 'time'
        },
        {
          name: 'data_cadastro',
          type: 'date'
        },
      ],
      foreignKeys: [
        {
          name: 'LogFuncionario',
          columnNames: ['id_funcionario'],
          referencedTableName: 'funcionarios',
          referencedColumnNames: ['id'],
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE'
        }
      ]
    }));
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('logs');
  }
}
