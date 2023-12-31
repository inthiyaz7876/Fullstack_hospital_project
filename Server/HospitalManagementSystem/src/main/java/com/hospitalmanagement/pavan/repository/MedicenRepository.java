package com.hospitalmanagement.pavan.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.hospitalmanagement.pavan.domain.Medicen;

@Repository
public interface MedicenRepository extends MongoRepository<Medicen, Integer> {

}
