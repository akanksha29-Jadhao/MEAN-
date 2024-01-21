var express = require('express');
var router = express.Router();
const EmployeeController = require('./employee.controller')

router.get('/', EmployeeController.getEmployee);

router.get('/:id',EmployeeController.getEmployeeById)

router.post('/', EmployeeController.createEmployee);

router.put('/:id', EmployeeController.updateEmployee);

router.delete('/:id',EmployeeController.deleteEmployeebyId);

router.patch('/:id',EmployeeController.patchemp)

module.exports = router;
