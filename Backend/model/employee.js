const mongoose = require('mongoose');
var schema = mongoose.Schema({
    Name: String,
    Age: Number,
    Dept: String,
    Salary: Number
    
})
var employeemodel = mongoose.model('employee', schema);
module.exports = employeemodel;