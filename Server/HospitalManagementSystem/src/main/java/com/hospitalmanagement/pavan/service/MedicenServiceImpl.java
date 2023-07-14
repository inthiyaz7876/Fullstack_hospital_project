package com.hospitalmanagement.pavan.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.hospitalmanagement.pavan.domain.Medicen;
import com.hospitalmanagement.pavan.domain.Patient;
import com.hospitalmanagement.pavan.repository.MedicenRepository;
@Component
public class MedicenServiceImpl implements MedicenService {

	@Autowired
	MedicenRepository medicenRepository;
	@Override
	public String create(Medicen medicen) {
		// TODO Auto-generated method stub
		medicenRepository.save(medicen);
		return "Medicen saved sussfully";
	}

	@Override
	public Medicen update(Medicen medicen) {
		// TODO Auto-generated method stub
		Medicen update = medicenRepository.save(medicen);
		return update;
	}

	@Override
	public String delete(Medicen medicen) {
		// TODO Auto-generated method stub
		medicenRepository.delete(medicen);
		return "Medicen record deleted successfully";
	}

	@Override
	public List<Medicen> getAllMedicens() {
		// TODO Auto-generated method stub
		return (List<Medicen>) medicenRepository.findAll();
	}

}
