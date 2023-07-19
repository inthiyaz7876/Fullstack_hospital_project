package com.hospitalmanagement.pavan.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.hospitalmanagement.pavan.domain.Employee;
import com.hospitalmanagement.pavan.service.EmployeeService;

@Controller
@CrossOrigin
public class EmployeeController {


	@Autowired
	EmployeeService employeeService;
	
	@RequestMapping(method=RequestMethod.GET , value="/getallEmployees")
	public ResponseEntity<List<Employee>> getAllPlaces()
	{
		List<Employee> medicen=employeeService.getAllMedicens();
		return ResponseEntity.ok(medicen);
	}
	
	@RequestMapping(method=RequestMethod.POST, value="/createEmplyee")
	public ResponseEntity<String> create(@RequestBody Employee employee)
	{
		employeeService.create(employee);
		String create= "Emplyee saved Successfully";
		return ResponseEntity.ok(create);
	}

	@RequestMapping(method=RequestMethod.DELETE , value="/deleteEmployee")
	public ResponseEntity<String> delete(@RequestBody Employee employee)
	{
		String delete=employeeService.delete(employee);
		return ResponseEntity.ok(delete);
	}
	@CrossOrigin
	@RequestMapping(method=RequestMethod.PUT, value="/updateEmployee")
	public ResponseEntity<Employee> update(@RequestBody Employee employee)
	{
		Employee update=employeeService.update(employee);
		return ResponseEntity.ok(update);
	}


}
