const fs = require('fs')

const Schema = require('./employees_pb')

const chiru = new Schema.Employee()
chiru.setId(1)
chiru.setName("Chiranjeevi")
chiru.setSalary(1000)

const jaffa = new Schema.Employee()
jaffa.setId(2)
jaffa.setName("Jaffa")
jaffa.setSalary(2000)

const employees = new Schema.Employees()
employees.addEmployees(chiru)
employees.addEmployees(jaffa)

console.log(employees)

fs.writeFileSync("binaryData.out", employees.serializeBinary())