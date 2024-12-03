import { CompanyAccount } from './class/CompanyAccount'
import { PeopleAccount } from './class/PeopleAccount'

const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Nath', 10,20)
console.log(peopleAccount)
peopleAccount.deposit(3)
peopleAccount.withdraw(3)
const companyAccount: CompanyAccount = new CompanyAccount('DIO', 20,100)
console.log(companyAccount)
companyAccount.deposit(57)
companyAccount.withdraw(5)
companyAccount.getLoan(330000)
