package com.hospitalmanagement.pavan.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.hospitalmanagement.pavan.domain.Employee;
@Repository
public interface EmplyeeRepository extends MongoRepository<Employee, Integer> {

}
