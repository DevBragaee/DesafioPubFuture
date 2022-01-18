
import { EntityRepository, Repository } from "typeorm"
import { Account } from "../entities/Account"
import { AccountService } from "../services/CreateAccountService";

//  Camada intermediaria fará a comunicacao como typeorm
@EntityRepository(Account)
class AccountRepositories extends Repository<Account>{
  static findOne(type_account_id) {
    if (!(type_account_id)) {
      throw new Error("tipo de conta invalido !")
  }
  
}
  static create(arg0: { type_account_id: string; accountbalance: string; financialInstitution: string }) {
    let type_account_id :null
    let financialInstitution : null
     let accountbalance :null

     if (type_account_id == undefined || financialInstitution == undefined || accountbalance ==undefined ) {
      throw new Error("dados invalidos para criacao de conta!")
  }
    const  financial = AccountRepositories.findOne(financialInstitution)
  if (financial == financialInstitution ) {
    throw new Error("conta ja existe")
  }
  
}
}
  export {AccountRepositories}