//import {Repository} from "typeorm"
import { getCustomRepository } from "typeorm"
import { Account } from "../entities/Account"
import { AccountRepositories } from "../repositories/AccountRepositories"
import { TypesAccountRepositories } from "../repositories/TypesAccountRepositories"

// Interface Account Request
interface IAccountRequest {
    
    type_account_id: string;
    accountbalance : string;
    financialInstitution: string;
  }
  
  class AccountService {
     
        async execute({  type_account_id,  accountbalance, financialInstitution  }: IAccountRequest) {
          const accountRepositories = getCustomRepository(AccountRepositories)
          if (!(type_account_id ) || !(financialInstitution ) || !(accountbalance)) {
            throw new Error("dados invalidos para criacao de conta!")
        }
        const accountNameAlreadyExists = await accountRepositories.findOne(type_account_id)

        if (!accountNameAlreadyExists) {
            throw new Error("tipo de conta ja existe no banco de dados da aplicacao!")
        }

        const account = accountRepositories.create({
            
            type_account_id,
            accountbalance,
            financialInstitution
        })

        await accountRepositories.save(account)

        return account

    }
}

export { AccountService }