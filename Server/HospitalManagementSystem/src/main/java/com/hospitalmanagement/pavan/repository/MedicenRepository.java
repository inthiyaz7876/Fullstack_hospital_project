package com.hospitalmanagement.pavan.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.hospitalmanagement.pavan.domain.Medicen;
import com.hospitalmanagement.pavan.domain.Patient;

public interface MedicenRepository extends MongoRepository<Medicen, Integer> {

}
