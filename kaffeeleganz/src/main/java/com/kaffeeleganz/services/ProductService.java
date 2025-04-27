package com.kaffeeleganz.services;

import com.kaffeeleganz.models.ProductModel;
import com.kaffeeleganz.repositories.ProductRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductService {

    private final ProductRepository productRepository;

    public ProductService(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }

    public List<ProductModel> findAllProducts() {
        return productRepository.findAll();
    }

    public ProductModel saveProduct(ProductModel product) {
        return productRepository.save(product);
    }
}
