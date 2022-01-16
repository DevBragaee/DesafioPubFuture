import {MigrationInterface, QueryRunner,Table} from "typeorm";

export class CreateAccount1642277290503 implements MigrationInterface {

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
                        type: "number"
                    },
                    {
                       name:"financialInstitution",
                       type:  "varchar"
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
                ],
                foreignKeys: [
                    {
                      name: "FKtypeaccount",
                      referencedTableName: "typeaccount",
                      referencedColumnNames: ["id"],
                      columnNames: ["type_account_id"],
                      onDelete: "SET NULL",
                      onUpdate: "SET NULL",
                    },
                  ],
            })
        )
    }
    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("account")
    }
}
