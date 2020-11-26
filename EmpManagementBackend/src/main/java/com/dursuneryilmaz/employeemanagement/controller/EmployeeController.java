package com.dursuneryilmaz.employeemanagement.controller;

import com.dursuneryilmaz.employeemanagement.domain.Employee;
import com.dursuneryilmaz.employeemanagement.exception.EmployeeNotFoundException;
import com.dursuneryilmaz.employeemanagement.service.IEmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/")
@CrossOrigin(origins = "http://localhost:3000")
public class EmployeeController {

    @Autowired
    private IEmployeeService employeeService;

    //get all employees
    @GetMapping("/employees")
    public List<Employee> getAll(){
        return employeeService.getAll();
    }

    //add employee
    @PostMapping("/employees")
    public Employee createEmployee(@RequestBody Employee employee){
        return employeeService.add(employee);
    }

    //get employee by id
    @GetMapping("/employees/{id}")
    public ResponseEntity<Employee> getById(@PathVariable Long id){
        Employee employee = employeeService.findById(id);
        return ResponseEntity.ok(employee);
    }

    //update employee
    @PutMapping("/employees")
    public ResponseEntity<Employee> update(@RequestBody Employee employee){
       Employee employeeUpdated =  employeeService.update(employee);
       return ResponseEntity.ok(employeeUpdated);
    }
}
