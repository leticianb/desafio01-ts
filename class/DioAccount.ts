export abstract class DioAccount {
  private name: string
  private readonly accountNumber: number
  balance: number = 0
  private status: boolean = true
  private saldo:number = 0
  private deposito:number = 0

  constructor(name: string, accountNumber: number, saldo:number, deposito:number){
    this.name = name
    this.accountNumber = accountNumber
    this.saldo = saldo
    this.deposito = deposito
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
      console.log(this.saldo)
    }
  }

  withdraw = (): void => {
    console.log('Voce sacou')
  }

  getBalance = (): void => {
    console.log(this.balance)
  }

  private validateStatus = (): boolean => {
    if (this.status) {
      return this.status
    }

    throw new Error('Conta inválida')
  }
}
