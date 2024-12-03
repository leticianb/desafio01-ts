import { DioAccount } from "./DioAccount"

export class CompanyAccount extends DioAccount {

  constructor(name: string, accountNumber: number, saldo:number){
    super(name, accountNumber, saldo)
  }

  getLoan = (emprestimo: number): void => {
    this.emprestimo = emprestimo
    console.log("Saldo antes do empréstimo:", this.saldo)
    if(this.status){
      this.saldo += emprestimo
      console.log("Saldo após empréstimo:", this.saldo)
    }
    
  }
}
