import { CompanyAccount } from './class/CompanyAccount'
import { PeopleAccount } from './class/PeopleAccount'

const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Nath', 10,20,8)
console.log(peopleAccount)
peopleAccount.deposit()
const companyAccount: CompanyAccount = new CompanyAccount('DIO', 20,100,10)
companyAccount.deposit()
console.log(companyAccount)