import { CompanyAccount } from './class/CompanyAccount'
import { PeopleAccount } from './class/PeopleAccount'

const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Nath', 10,20,8,3)
console.log(peopleAccount)
peopleAccount.deposit()
peopleAccount.withdraw()
const companyAccount: CompanyAccount = new CompanyAccount('DIO', 20,100,10,1000)
console.log(companyAccount)
companyAccount.deposit()
companyAccount.withdraw()
