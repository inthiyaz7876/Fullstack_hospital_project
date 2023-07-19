package com.hospitalmanagement.pavan.domain;

import org.springframework.data.annotation.Id;

public class Employee {
	@Id
	private int empId;
	private String empName;
	private String empAddress;
	private int empAge;
	private String empGender;
	private String empPassword;
	private String empJoinedDate;
	private String empEdit;
	public String getEmpEdit() {
		return empEdit;
	}
	public void setEmpEdit(String empEdit) {
		this.empEdit = empEdit;
	}
	public String getEmpJoinedDate() {
		return empJoinedDate;
	}
	public void setEmpJoinedDate(String empJoinedDate) {
		this.empJoinedDate = empJoinedDate;
	}
	public int getEmpId() {
		return empId;
	}
	public void setEmpId(int empId) {
		this.empId = empId;
	}
	public String getEmpName() {
		return empName;
	}
	public void setEmpName(String empName) {
		this.empName = empName;
	}
	public String getEmpAddress() {
		return empAddress;
	}
	public void setEmpAddress(String empAddress) {
		this.empAddress = empAddress;
	}
	public int getEmpAge() {
		return empAge;
	}
	public void setEmpAge(int empAge) {
		this.empAge = empAge;
	}
	public String getEmpGender() {
		return empGender;
	}
	public void setEmpGender(String empGender) {
		this.empGender = empGender;
	}
	public String getEmpPassword() {
		return empPassword;
	}
	public void setEmpPassword(String empPassword) {
		this.empPassword = empPassword;
	}
	
}
