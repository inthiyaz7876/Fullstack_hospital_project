package com.hospitalmanagement.pavan.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.hospitalmanagement.pavan.domain.Employee;
import com.hospitalmanagement.pavan.repository.EmplyeeRepository;
@Component
public class EmployeeServiceImpl implements EmployeeService {

	@Autowired
	EmplyeeRepository employeeRepository;
	@Override
	public String create(Employee employee) {
		// TODO Auto-generated method stub
		employeeRepository.save(employee);
		return "Medicen saved sussfully";
	}

	@Override
	public Employee update(Employee employee) {
		// TODO Auto-generated method stub
		Employee update = employeeRepository.save(employee);
		return update;
	}

	@Override
	public String delete(Employee employee) {
		// TODO Auto-generated method stub
		employeeRepository.delete(employee);
		return "Medicen record deleted successfully";
	}

	@Override
	public List<Employee> getAllMedicens() {
		// TODO Auto-generated method stub
		return (List<Employee>) employeeRepository.findAll();
	}

}
