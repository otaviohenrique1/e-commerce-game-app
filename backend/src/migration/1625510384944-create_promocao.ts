import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createPromocao1625510384944 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: 'promocoes',
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
          name: 'tema',
          type: 'varchar'
        },
        {
          name: 'produtos',
          type: 'varchar'
        },
        {
          name: 'descricao',
          type: 'varchar'
        },
        {
          name: 'inicio',
          type: 'date'
        },
        {
          name: 'termino',
          type: 'date'
        },
        {
          name: 'id_funcionario',
          type: 'integer'
        },
        {
          name: 'data_cadastro',
          type: 'datetime'
        },
      ],
      foreignKeys: [
        {
          name: 'PromocaoFuncionario',
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
    await queryRunner.dropTable('promocoes');
  }
}
