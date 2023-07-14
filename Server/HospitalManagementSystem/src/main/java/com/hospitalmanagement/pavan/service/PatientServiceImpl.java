package com.hospitalmanagement.pavan.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.hospitalmanagement.pavan.domain.Patient;
import com.hospitalmanagement.pavan.repository.PatientRepository;

@Component
public class PatientServiceImpl implements PatientService{

	@Autowired
	PatientRepository patientRepository;
	
	@Override
	public String create(Patient patient) {
		// TODO Auto-generated method stub
		patientRepository.save(patient);
		return "Patient data saved sussfully";
	}

	@Override
	public Patient update(Patient patient) {
		// TODO Auto-generated method stub
		Patient update = patientRepository.save(patient);
		return update;
	}

	@Override
	public String delete(Patient patient) {
		// TODO Auto-generated method stub
		patientRepository.delete(patient);
		return "Deleted record sussfully";
	}

	@Override
	public List<Patient> getAllPatients() {
		// TODO Auto-generated method stub
		return (List<Patient>) patientRepository.findAll();
	}

}
