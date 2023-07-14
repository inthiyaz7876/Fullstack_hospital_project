package com.hospitalmanagement.pavan.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.hospitalmanagement.pavan.domain.Patient;

@Repository
public interface PatientRepository extends MongoRepository<Patient, Integer> {

}
