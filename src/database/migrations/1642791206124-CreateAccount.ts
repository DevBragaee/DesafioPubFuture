import {MigrationInterface, QueryRunner,Table} from "typeorm";

export class CreateAccount1642791206124 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "account",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true
                    },
                    
                    {
                        name: "type_account_id",
                        type: "varchar"
                    },
                    {
                        name: "accountbalance",
                        type: "float",
                        
                    },
                    {
                        name: "financialInstitution",
                        type: "varchar",
                        
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()"
                    },
                    {
                        name: "updated_at",
                        type: "timestamp",
                        default: "now()"
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("account")
    }

}
