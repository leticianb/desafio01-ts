import { DioAccount } from "./DioAccount"

export class PeopleAccount extends DioAccount {
  doc_id: number

  constructor(doc_id: number, name: string, accountNumber: number, saldo:number, deposito:number){
    super(name, accountNumber, saldo, deposito)
    this.doc_id = doc_id
  }
}