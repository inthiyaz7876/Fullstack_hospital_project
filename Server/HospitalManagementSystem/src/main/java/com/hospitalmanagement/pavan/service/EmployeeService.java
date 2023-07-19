package com.hospitalmanagement.pavan.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.hospitalmanagement.pavan.domain.Employee;

@Service
public interface EmployeeService {
	public String create(Employee employee);
	public Employee update(Employee employee);
	public String delete(Employee employee);
	public List<Employee> getAllMedicens();
}
