package com.daler.mySBootProjectForApp.ItsADeal.model;

import java.time.LocalDateTime;

//import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
//import javax.persistence.JoinColumn;
//import javax.persistence.Lob;
//import javax.persistence.OneToOne;
//import javax.persistence.SecondaryTable;
import javax.persistence.Table;

import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

@Entity
@Table(name = "goods")
//@SecondaryTable(name = "goods_images")
public class Goods {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(updatable = false, nullable = false)
	 private long post_id;
	
	@Column(name = "first_name")
	 private String firstName;
	
	@Column(name = "last_name")
	 private String lastName;
	
	@Column(name = "email")
	 private String email;
	
	@Column(name = "post_title")
	 private String postTitle;
	
	@Column(name = "condition")
	 private String condition;
	
	@Column(name = "category")
	 private String category;
	
	@Column(name = "description")
	 private String description;
	
	@Column(name = "price")
	 private double price;
	
	@Column(name = "location")
	 private String location;
	
	@Column(name = "create_date", nullable = false)
	@CreationTimestamp
	 private LocalDateTime createDate;
	
	@Column(name = "update_date", nullable = false)
	@UpdateTimestamp
	 private LocalDateTime updateDate;

	
//	@OneToOne(cascade=CascadeType.ALL)
//	@JoinColumn(name = "goods_images_id")
//	private GoodsImages goodsImages;

	
	

	public Goods() {
		super();
	}


	public Goods(String firstName, String lastName, String email, String postTitle, String condition, String category,
			String description, double price, String location, LocalDateTime createDate, LocalDateTime updateDate,
			GoodsImages goodsImages) {
		super();
		this.firstName = firstName;
		this.lastName = lastName;
		this.email = email;
		this.postTitle = postTitle;
		this.condition = condition;
		this.category = category;
		this.description = description;
		this.price = price;
		this.location = location;
		this.createDate = createDate;
		this.updateDate = updateDate;
//		this.goodsImages = goodsImages;
	}


	public long getPost_id() {
		return post_id;
	}


	public void setPost_id(long post_id) {
		this.post_id = post_id;
	}


	public String getFirstName() {
		return firstName;
	}


	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}


	public String getLastName() {
		return lastName;
	}


	public void setLastName(String lastName) {
		this.lastName = lastName;
	}


	public String getEmail() {
		return email;
	}


	public void setEmail(String email) {
		this.email = email;
	}


	public String getPostTitle() {
		return postTitle;
	}


	public void setPostTitle(String postTitle) {
		this.postTitle = postTitle;
	}


	public String getCondition() {
		return condition;
	}


	public void setCondition(String condition) {
		this.condition = condition;
	}


	public String getCategory() {
		return category;
	}


	public void setCategory(String category) {
		this.category = category;
	}


	public String getDescription() {
		return description;
	}


	public void setDescription(String description) {
		this.description = description;
	}


	public double getPrice() {
		return price;
	}


	public void setPrice(double price) {
		this.price = price;
	}


	public String getLocation() {
		return location;
	}


	public void setLocation(String location) {
		this.location = location;
	}


	public LocalDateTime getCreateDate() {
		return createDate;
	}


	public void setCreateDate(LocalDateTime createDate) {
		this.createDate = createDate;
	}


	public LocalDateTime getUpdateDate() {
		return updateDate;
	}


	public void setUpdateDate(LocalDateTime updateDate) {
		this.updateDate = updateDate;
	}


//	public GoodsImages getGoodsImages() {
//		return goodsImages;
//	}


//	public void setGoodsImages(GoodsImages goodsImages) {
//		this.goodsImages = goodsImages;
//	}
	
//	 @Column(name = "goods_images")
//	 @Lob
//	 private byte[] images;
//	 
	 // id column for secondary table = "goods_images
//	 public long getId() {
//		 return this.post_id;
//	 } 
	 
	
}
