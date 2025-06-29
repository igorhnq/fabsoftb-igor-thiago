package com.kaffeeleganz.models;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name = "order_items")
public class OrderItemModel {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    
    @ManyToOne
    @JoinColumn(name = "order_id")
    private OrderModel order;
    
    @ManyToOne
    @JoinColumn(name = "product_id")
    private ProductModel product;
    
    private Integer quantity;
    private Float unitPrice;
} 