import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createCompra1625510368922 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
			name: 'compras',
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
          name: 'games',
          type: 'varchar'
        },
				{
          name: 'total_itens',
          type: 'integer'
        },
				{
          name: 'total_preco',
          type: 'decimal',
					precision: 10,
          scale: 2
        },
				{
          name: 'id_usuario',
          type: 'integer'
        },
				{
          name: 'data_cadastro',
          type: 'date'
        },
			],
      foreignKeys: [
        {
          name: 'CompraGames',
          columnNames: ['id_usuario'],
          referencedTableName: 'games',
          referencedColumnNames: ['id'],
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE'
        }
      ]
		}));
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.dropTable('compras');
  }
}
