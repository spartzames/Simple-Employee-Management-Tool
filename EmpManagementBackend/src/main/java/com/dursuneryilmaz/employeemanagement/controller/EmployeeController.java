package com.dursuneryilmaz.employeemanagement.controller;

import com.dursuneryilmaz.employeemanagement.domain.Employee;
import com.dursuneryilmaz.employeemanagement.service.IEmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

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
}
