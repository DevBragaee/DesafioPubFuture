import { Exclude } from "class-transformer";
import {Column, CreateDateColumn, Entity,ManyToOne,PrimaryColumn, UpdateDateColumn} from "typeorm";
import { v4 as uuid } from "uuid"

// Criacao das entidades :a representacao dos dados das tabelas na aplicacao
@Entity("account")
class Account {
    create: any;
    save() {
      throw new Error("Method not implemented.");
    }
    // If the names are the same, we don't need to pass any parameters to de ()
    @PrimaryColumn()
    readonly id: string

    @Column()
    type_account_id : string
    @ManyToOne( () => Account)
    Account: Account
   

    @Column()
    accountbalance: number

    @Column()
    financialInstitution: string

    @Exclude()
   

    @CreateDateColumn()
    created_at: Date

    @UpdateDateColumn()
    updated_at: Date

    constructor() {
        if (!this.id) {
            this.id = uuid()
        }
    }

}

export { Account }
