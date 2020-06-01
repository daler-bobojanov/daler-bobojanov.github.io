package com.daler.mySBootProjectForApp.ItsADeal.model;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.Lob;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name = "goods_images")
public class GoodsImages {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name = "id")
	private Long id;
	
	
	@Column(name = "images")
	@Lob
	private byte[] images;

	
	@OneToOne(cascade=CascadeType.ALL)
	@JoinColumn(name = "goods_post_id")
	private Goods goods;
	

	public GoodsImages() {
		super();
	}


	public GoodsImages(byte[] images) {
		super();
		this.images = images;
	}


	public Long getId() {
		return id;
	}


	public void setId(Long id) {
		this.id = id;
	}


	public byte[] getImages() {
		return images;
	}


	public void setImages(byte[] images) {
		this.images = images;
	}
	
	

}
