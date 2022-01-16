import { EntityRepository, Repository } from "typeorm"
import { Account } from "../entities/Account"

@EntityRepository(Account)
class AccountRepositories extends Repository<Account>{
    static findOne(type_account_id: string)
    
    {
        throw new Error("Method not implemented.")
    }

}



export { AccountRepositories }