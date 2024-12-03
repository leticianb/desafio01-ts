import { DioAccount } from "./DioAccount"

export class NovaConta extends DioAccount{
    constructor(name: string, accountNumber: number, saldo:number){
        super(name, accountNumber, saldo)
    }
    depositoAcrescentado = (deposito:number):void =>{
        this.deposito = deposito
        deposito += deposito*0.1
        console.log("Valor do depóstito após 10%:",deposito)
    }
}