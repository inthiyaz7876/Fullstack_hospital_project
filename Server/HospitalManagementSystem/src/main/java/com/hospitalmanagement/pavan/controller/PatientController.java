package com.hospitalmanagement.pavan.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.hospitalmanagement.pavan.domain.Patient;
import com.hospitalmanagement.pavan.service.PatientService;

@Controller
@CrossOrigin
public class PatientController {

	@Autowired
	PatientService patientservice;
	@RequestMapping(method=RequestMethod.GET , value="/getallPatients")
	public ResponseEntity<List<Patient>> getAllPlaces()
	{
		List<Patient> patients=patientservice.getAllPatients();
		return ResponseEntity.ok(patients);
	}
	
	@RequestMapping(method=RequestMethod.POST, value="/createPatients")
	public ResponseEntity<String> create(@RequestBody Patient patients)
	{
		patientservice.create(patients);
		String create= "Patient saved Successfully";
		return ResponseEntity.ok(create);
	}

	@RequestMapping(method=RequestMethod.DELETE , value="/deletePatient")
	public ResponseEntity<String> delete(@RequestBody Patient patients)
	{
		String delete=patientservice.delete(patients);
		return ResponseEntity.ok(delete);
	}
	@RequestMapping(method=RequestMethod.PUT, value="/updatePatient")
	public ResponseEntity<Patient> update(@RequestBody Patient patients)
	{
		Patient update=patientservice.update(patients);
		return ResponseEntity.ok(update);
	}

}
