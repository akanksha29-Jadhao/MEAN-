var express = require('express');
var router = express.Router();
const EmployeeController = require('./employee.controller')

router.get('/', EmployeeController.getEmployees);

router.get('/:id',EmployeeController.getEmployeeById)

router.post('/', EmployeeController.createEmployee);

router.put('/:id', EmployeeController.updateEmployee);

router.delete('/:id',EmployeeController.deleteEmployeeById);


module.exports = router;
