package com.hospitalmanagement.pavan.domain;

import org.springframework.data.annotation.Id;

public class Medicen {
	@Id
	private int mId;
	private String mName;
	private String mExpiryDate;
	private String mInStock;
	public int getmId() {
		return mId;
	}
	public void setmId(int mId) {
		this.mId = mId;
	}
	public String getmName() {
		return mName;
	}
	public void setmName(String mName) {
		this.mName = mName;
	}
	public String getmExpiryDate() {
		return mExpiryDate;
	}
	public void setmExpiryDate(String mExpiryDate) {
		this.mExpiryDate = mExpiryDate;
	}
	public String getmInStock() {
		return mInStock;
	}
	public void setmInStock(String mInStock) {
		this.mInStock = mInStock;
	}
}
