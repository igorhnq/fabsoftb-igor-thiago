package com.kaffeeleganz.dto;

import lombok.Data;
import java.util.List;

@Data
public class OrderRequestDTO {
    private Float totalAmount;
    private List<OrderProductDTO> products;
    
    @Data
    public static class OrderProductDTO {
        private Integer id;
        private Integer quantity;
    }
} 