package com.kaffeeleganz.controllers;

import com.kaffeeleganz.models.ProductModel;
import com.kaffeeleganz.services.ProductService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/products")
public class ProductController {

    private final ProductService productService;

    public ProductController(ProductService productService) {
        this.productService = productService;
    }

    @GetMapping
    public List<ProductModel> getAllProducts() {
        return productService.findAllProducts();
    }

    @GetMapping("/{id}")
    public ProductModel getProductById(@PathVariable Integer id) {
        return productService.findProductById(id);
    }


    @PostMapping
    public ProductModel createProduct(@RequestBody ProductModel product) {
        return productService.saveProduct(product);
    }
}
