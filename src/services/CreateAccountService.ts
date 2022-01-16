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
      execute(arg0: { type_account_id: string; accountbalance: number; financialInstitution: string }) {
         
        throw new Error("Method not implemented.")
      }
     AccountRepository: Repository<Account>;
      AccountRepositories: Account
  
    constructor() {
      this.AccountRepositories = getCustomRepository(Account);
    }
        async create({  type_account_id,  accountbalance, financialInstitution  }: IAccount) {
      const account = this.AccountRepositories.create({
        type_account_id,

        accountbalance,
        financialInstitution,
      });
     
    
    
    await this.AccountRepository.save(account);
        
    return account;
        }
   
}
export  { AccountService }