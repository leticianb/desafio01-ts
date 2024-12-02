import { DioAccount } from "./DioAccount"

export class CompanyAccount extends DioAccount {

  constructor(name: string, accountNumber: number, saldo:number, deposito:number, saque:number){
    super(name, accountNumber, saldo, deposito, saque)
  }

  getLoan = (): void => {
    console.log('Voce pegou um empréstimo')
  }
}
