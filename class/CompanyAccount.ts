import { DioAccount } from "./DioAccount"

export class CompanyAccount extends DioAccount {

  constructor(name: string, accountNumber: number, saldo:number, deposito:number){
    super(name, accountNumber, saldo, deposito)
  }

  getLoan = (): void => {
    console.log('Voce pegou um empréstimo')
  }
}
