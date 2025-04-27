package com.kaffeeleganz.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.kaffeeleganz.models.ProductModel;

@Repository
public interface ProductRepository extends JpaRepository<ProductModel, Integer> {
    
}
