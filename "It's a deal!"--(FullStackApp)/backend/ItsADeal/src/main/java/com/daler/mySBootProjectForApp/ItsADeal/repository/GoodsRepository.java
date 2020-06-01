package com.daler.mySBootProjectForApp.ItsADeal.repository;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.daler.mySBootProjectForApp.ItsADeal.model.Goods;


@Repository
public interface GoodsRepository extends JpaRepository<Goods, Long> {

	@Query(value = "SELECT * FROM goods WHERE email = :email", nativeQuery = true)
	List<Goods> findGoodsByEmail(@Param("email") String email);
	
	@Query(value = "SELECT * FROM goods WHERE condition = :condition", nativeQuery = true)
	List<Goods> findGoodsByCondition(@Param("condition") String condition);
	
	@Query(value = "SELECT * FROM goods WHERE category = :category", nativeQuery = true)
	List<Goods> findGoodsByCategory(@Param("category") String category);

	

//	select * from goods where email='daler.b@gmail.com';
	

	

}
