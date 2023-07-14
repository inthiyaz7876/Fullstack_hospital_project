package com.hospitalmanagement.pavan.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hospitalmanagement.pavan.domain.Patient;



@Service
public interface PatientService {

	public String create(Patient patient);
	public Patient update(Patient patient);
	public String delete(Patient patient);
	public List<Patient> getAllPatients();
}
