package com.hospitalmanagement.pavan.service;

import java.util.List;

import com.hospitalmanagement.pavan.domain.Medicen;

public interface MedicenService {
	public String create(Medicen medicen);
	public Medicen update(Medicen medicen);
	public String delete(Medicen medicen);
	public List<Medicen> getAllMedicens();
}
