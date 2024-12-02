export abstract class DioAccount {
  private name: string
  private readonly accountNumber: number
  balance: number = 0
  private status: boolean = true
  private saldo:number = 0
  private deposito:number = 0
  private saque:number = 0

  constructor(name: string, accountNumber: number, saldo:number, deposito:number, saque:number){
    this.name = name
    this.accountNumber = accountNumber
    this.saldo = saldo
    this.deposito = deposito
    this.saque = saque
  }

  setName = (name: string): void => {
    this.name = name
    console.log('Nome alterado com sucesso!')
  }

  getName = (): string => {
    return this.name
  }

  deposit = (): void => {
    if(this.validateStatus()){
      this.saldo+=this.deposito
      console.log("Saldo após deposito:",this.saldo)
    }
  }

  withdraw = (): void => {
    if(this.status){
      if(this.saque<this.saldo){
        this.saldo -= this.saque
        console.log("Sacou", this.saque)
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
