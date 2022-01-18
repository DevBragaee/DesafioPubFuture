import {Repository} from "typeorm"
import { getCustomRepository } from "typeorm"
import { Account } from "../entities/Account"
import { AccountRepositories } from "../repositories/AccountRepositories"
import { TypesAccountRepositories } from "../repositories/TypesAccountRepositories"

// Interface Account Request
interface IAccount {
    type_account_id: string;
    accountbalance : string;
    financialInstitution: string;
  }
  
  class AccountService {
     
        async execute({  type_account_id,  accountbalance, financialInstitution  }: IAccount) {
          const accountRepositories = getCustomRepository(AccountRepositories)
          if (type_account_id == undefined || financialInstitution == undefined || accountbalance ==undefined ) {
            throw new Error("dados invalidos para criacao de conta!")
        }
        const accountExists = await AccountRepositories.findOne(financialInstitution)

        if (!financialInstitution) {
            throw new Error("U Does Not Exists!")
        }

        const accountNameExists = await AccountRepositories.findOne(type_account_id)

       
        const account = AccountRepositories.create({
            type_account_id,
            accountbalance,
            financialInstitution
            
        })

       

        return account

    }
}
    
      export  {AccountService}