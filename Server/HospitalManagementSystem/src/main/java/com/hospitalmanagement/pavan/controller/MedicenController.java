package com.hospitalmanagement.pavan.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.hospitalmanagement.pavan.domain.Medicen;
import com.hospitalmanagement.pavan.domain.Patient;
import com.hospitalmanagement.pavan.service.MedicenService;
import com.hospitalmanagement.pavan.service.PatientService;

@Controller
@CrossOrigin
public class MedicenController {

	@Autowired
	MedicenService medicenService;
	
	@RequestMapping(method=RequestMethod.GET , value="/getallMedicens")
	public ResponseEntity<List<Medicen>> getAllPlaces()
	{
		List<Medicen> medicen=medicenService.getAllMedicens();
		return ResponseEntity.ok(medicen);
	}
	
	@RequestMapping(method=RequestMethod.POST, value="/createMedicen")
	public ResponseEntity<String> create(@RequestBody Medicen medicen)
	{
		medicenService.create(medicen);
		String create= "Medicen saved Successfully";
		return ResponseEntity.ok(create);
	}

	@RequestMapping(method=RequestMethod.DELETE , value="/deleteMedicen")
	public ResponseEntity<String> delete(@RequestBody Medicen medicen)
	{
		String delete=medicenService.delete(medicen);
		return ResponseEntity.ok(delete);
	}
	@RequestMapping(method=RequestMethod.PUT, value="/updateMedicen")
	public ResponseEntity<Medicen> update(@RequestBody Medicen medicen)
	{
		Medicen update=medicenService.update(medicen);
		return ResponseEntity.ok(update);
	}


}
