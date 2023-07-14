package com.hospitalmanagement.pavan.domain;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection="PatientData")
public class Patient {
	@Id
	private int pId;
	private String pName;
	private String pAddress;
	private String pJoindeDate;
	private String pProblem;
	private String pdescription;
	private int pAmountpaid;
	private String pedit;
	public String getPedit() {
		return pedit;
	}
	public void setPedit(String pedit) {
		this.pedit = pedit;
	}
	public String getPdescription() {
		return pdescription;
	}
	public void setPdescription(String pdescription) {
		this.pdescription = pdescription;
	}
	public int getpAmountpaid() {
		return pAmountpaid;
	}
	public void setpAmountpaid(int pAmountpaid) {
		this.pAmountpaid = pAmountpaid;
	}
	public int getpId() {
		return pId;
	}
	public void setpId(int pId) {
		this.pId = pId;
	}
	public String getpName() {
		return pName;
	}
	public void setpName(String pName) {
		this.pName = pName;
	}
	public String getpAddress() {
		return pAddress;
	}
	public void setpAddress(String pAddress) {
		this.pAddress = pAddress;
	}
	public String getpJoindeDate() {
		return pJoindeDate;
	}
	public void setpJoindeDate(String pJoindeDate) {
		this.pJoindeDate = pJoindeDate;
	}
	public String getpProblem() {
		return pProblem;
	}
	public void setpProblem(String pProblem) {
		this.pProblem = pProblem;
	}
	public int getpAge() {
		return pAge;
	}
	public void setpAge(int pAge) {
		this.pAge = pAge;
	}
	public String getpGender() {
		return pGender;
	}
	public void setpGender(String pGender) {
		this.pGender = pGender;
	}
	public String getpAssignedDoctor() {
		return pAssignedDoctor;
	}
	public void setpAssignedDoctor(String pAssignedDoctor) {
		this.pAssignedDoctor = pAssignedDoctor;
	}
	private int pAge;
	private String pGender;
	private String pAssignedDoctor;

}
