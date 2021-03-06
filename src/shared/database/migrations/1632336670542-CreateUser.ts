import { MigrationInterface, QueryRunner, Table } from "typeorm";

export default class CreateUser implements MigrationInterface {

    public async up(QueryRunner: QueryRunner): Promise<void> {
        await QueryRunner.createTable(
            new Table({
                name: 'users',
                columns: [
                    {name: 'id', type: 'integer', isPrimary: true, isGenerated: true, generationStrategy: 'increment'},
                    {name: 'name', type: 'varchar', isNullable: false},
                    {name: 'email', type: 'varchar', isUnique: true, isNullable: false},
                    {name: 'password', type: 'varchar', isNullable: false},
                    {name: 'created_at', type: 'timestamp', default: 'now()'},
                    {name: 'updated_at', type: 'timestamp', default: 'now()'}

                ]
            })
        )
        
        await QueryRunner.query("INSERT INTO users (email, name, password) VALUES ('admin@admin.com', 'admin', '$2a$08$cEAgfRVsbsawv/bC1t8Eb.r2ArFq3iNe2.mymFtQuGdb23cEOOeuG')")

    }
    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('users')
    }

}