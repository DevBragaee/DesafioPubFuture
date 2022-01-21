declare namespace Express {
    export interface Request {
        account: {
            id:string
             
            type_account_id: string;
            accountbalance: Number;
            financialInstitution:string
            
            

        };
    }
}