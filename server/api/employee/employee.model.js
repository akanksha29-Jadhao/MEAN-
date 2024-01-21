const mongoose = require('mongoose');

const EmployeeSchema = new mongoose.Schema({
    lastName:String,
    firstName: String,
   
});
const model = mongoose.model('Employee', EmployeeSchema);

module.exports=model;
