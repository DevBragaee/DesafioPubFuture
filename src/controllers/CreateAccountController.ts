import { Request, Response } from "express"
import {AccountService } from "../services/CreateAccountService"


class CreateAccountController {

    async handle(request: Request, response: Response){
        const {  type_account_id, accountbalance,financialInstitution } = request.body
        
        const accountService =  new AccountService()

        const account = await accountService.execute(
            {
              type_account_id,accountbalance,financialInstitution })

        return response.json(account)
       
        
    }
}
export { CreateAccountController }