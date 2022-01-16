import { EntityRepository, Repository } from "typeorm"
   // importando a entidade "contas" de entities 
import { Account } from "../entities/Account"
import { TypesAccounts } from "../entities/TypesAccounts"

@EntityRepository(TypesAccounts)
class TypesAccountRepositories extends Repository<TypesAccounts> {

}

export { TypesAccountRepositories }