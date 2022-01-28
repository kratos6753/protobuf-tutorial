const fs = require('fs')
const Schema = require('./employees_pb')

const employees = Schema.Employees.deserializeBinary(fs.readFileSync("binaryData.out"))

employees.getEmployeesList().forEach(employee => {
    console.log(employee)
})