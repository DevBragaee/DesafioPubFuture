
import { EntityRepository, Repository } from "typeorm"
import { Account } from "../entities/Account"


//  Camada intermediaria fará a comunicacao como typeorm
@EntityRepository(Account)
class AccountRepositories extends Repository<Account>{
}
  export {AccountRepositories}