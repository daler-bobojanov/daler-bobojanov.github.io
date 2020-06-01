package com.daler.mySBootProjectForApp.ItsADeal.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.daler.mySBootProjectForApp.ItsADeal.exception.ResourceNotFoundException;
import com.daler.mySBootProjectForApp.ItsADeal.model.Goods;
import com.daler.mySBootProjectForApp.ItsADeal.repository.GoodsRepository;

@RestController
@RequestMapping("/goods_api/v1")
public class GoodsController {
	
	@Autowired
	private GoodsRepository goodsRepository;

	// get all goods
	@GetMapping("/all_goods")
	public List<Goods> getAllGoods(Model model){
		return goodsRepository.findAll();
	}
	
	
	// get goods by Id
	@GetMapping("/all_goods/post_id={post_id}")
	public ResponseEntity<Goods> getGoodsById(@PathVariable(value = "post_id") Long goodsId)
	throws ResourceNotFoundException {
		Goods goods = goodsRepository.findById(goodsId)
				.orElseThrow(() -> new ResourceNotFoundException("No product found with this ID :: " + goodsId));
		return ResponseEntity.ok().body(goods);
	}
	
	
//	 get goods by Email (working block, however Exception message doesn't display when response == null)
	@GetMapping("/all_goods/userId={email}")
	public List<Goods> findGoodsByEmail(@PathVariable(value = "email") String email) throws Exception {
		try {
			List<Goods> response = goodsRepository.findGoodsByEmail(email);
			if (response == null) {
				throw new Exception("No product found with this ID :: " + email);

			}
			return response;
		} catch (Exception ex) {				
			throw new Exception("Internal Server Exception while getting exception :: " + ex);
		}
	}				
	
//	 get goods by Email (working block)
//		@GetMapping("/all_goods/userId={email}")
//		public List<Goods> findGoodsByEmail(@PathVariable(value = "email") String email){
//			List<Goods> goods = goodsRepository.findGoodsByEmail(email);
//			return goods;			
//			
//	}
	
	// get goods by Condition (working block, however Exception message doesn't display when response == null)
	@GetMapping("/all_goods/condition={condition}")
	public List<Goods> findGoodsByCondition(@PathVariable(value = "condition") String condition) throws Exception {
		try {
			List<Goods> response = goodsRepository.findGoodsByCondition(condition);
			if (response == null) {
				throw new Exception("No product found with this ID :: " + condition);
			}
			return response;
		} catch (Exception ex) {
			throw new Exception("Internal Server Exception while getting exception :: " + ex);
		}

	}
		
		
	// get goods by Condition (working block)
//		@GetMapping("/all_goods/condition={condition}")
//		public List<Goods> findGoodsByCondition(@PathVariable(value = "condition") String condition){
//			List<Goods> goods = goodsRepository.findGoodsByCondition(condition);
//			return goods;
//		}
//	

	// get goods by Category (working block, however Exception message doesn't display when response == null)
	@GetMapping("/all_goods/category={category}")
	public List<Goods> findGoodsByCategory(@PathVariable(value = "category") String category) throws Exception {
		try {
			List<Goods> response = goodsRepository.findGoodsByCategory(category);
			if (response == null) {
				throw new Exception("No product found with this ID :: " + category);
			}
			return response;
		} catch (Exception ex) {
			throw new Exception("Internal Server Exception while getting exception :: " + ex);
		}
	}
	
	
	// save goods
	@PostMapping("/all_goods")
	public Goods createGoods(@RequestBody Goods goods) {
		return this.goodsRepository.save(goods);
	}
	
	
	// update goods by Id
	@PutMapping("/all_goods/{id}")
	public ResponseEntity<Goods> updateGoods(@PathVariable(value = "id") Long goodsId, @Valid @RequestBody Goods goodsDetails)
	throws ResourceNotFoundException {
		Goods goods = goodsRepository.findById(goodsId)
				.orElseThrow(() -> new ResourceNotFoundException("Goods not found for this ID :: " + goodsId));
		
		goods.setFirstName(goodsDetails.getFirstName());
		goods.setLastName(goodsDetails.getLastName());
		goods.setEmail(goodsDetails.getEmail());
		goods.setPostTitle(goodsDetails.getPostTitle());
		goods.setCondition(goodsDetails.getCondition());
		goods.setCategory(goodsDetails.getCategory());
		goods.setDescription(goodsDetails.getDescription());
		goods.setPrice(goodsDetails.getPrice());
		goods.setLocation(goodsDetails.getLocation());
//		goods.setGoodsImages(goodsDetails.getGoodsImages());
		
		
		return ResponseEntity.ok(this.goodsRepository.save(goods));
	}
	
	
	// delete goods by Id
	@DeleteMapping("/all_goods/{id}")
	public Map<String, Boolean> deleteGoods(@PathVariable(value = "id") Long goodsId) throws ResourceNotFoundException{
		Goods goods = goodsRepository.findById(goodsId)
				.orElseThrow(() -> new ResourceNotFoundException("Goods not found for this ID :: " + goodsId));
		
		goodsRepository.delete(goods);
		
		Map<String, Boolean> response = new HashMap<>();
		response.put("Deleted successfully", Boolean.TRUE);
		return response;

	}
	
}
