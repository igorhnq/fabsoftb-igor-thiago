package com.kaffeeleganz.dto;

import lombok.Data;
import java.util.Date;
import java.util.List;

@Data
public class OrderResponseDTO {
    private Integer id;
    private Date orderDate;
    private Float totalAmount;
    private List<OrderItemResponseDTO> orderItems;
    
    @Data
    public static class OrderItemResponseDTO {
        private Integer id;
        private ProductResponseDTO product;
        private Integer quantity;
        private Float unitPrice;
    }
    
    @Data
    public static class ProductResponseDTO {
        private Integer id;
        private String name;
        private Float price;
        private String imageUrl;
    }
} 