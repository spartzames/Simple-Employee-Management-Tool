package com.koreanair.kthong.employeemanagement.repository;

import com.koreanair.kthong.employeemanagement.domain.Employee;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IEmployeeRepository extends JpaRepository<Employee, Long> {
}
