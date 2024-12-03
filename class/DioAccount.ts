export abstract class DioAccount {
  private name: string
  private readonly accountNumber: number
  balance: number = 0
  status: boolean = true
  saldo:number = 0
  deposito:number = 0
  private saque:number = 0
  emprestimo: number = 0

  constructor(name: string, accountNumber: number, saldo:number){
    this.name = name
    this.accountNumber = accountNumber
    this.saldo = saldo
    
  }

  setName = (name: string): void => {
    this.name = name
    console.log('Nome alterado com sucesso!')
  }

  getName = (): string => {
    return this.name
  }

  deposit = (deposito:number): void => {
    this.deposito = deposito
    if(this.validateStatus()){
      console.log("Saldo antes do depósito:", this.saldo)
      this.saldo+=this.deposito
      console.log("Saldo após deposito:",this.saldo)
    }
  }

  withdraw = (saque:number): void => {
    this.saque = saque
    if(this.status){
      if(this.saque<this.saldo){
        this.saldo -= this.saque
        console.log("Valor do saque:", this.saque)
        console.log("Novo saldo:", this.saldo)
      }
      else{
        console.log("Saque negado, saldo insuficiente")
      }
    }
  }

  getBalance = (): void => {
    
  }

  private validateStatus = (): boolean => {
    if (this.status) {
      return this.status
    }

    throw new Error('Conta inválida')
  }
}
