package com.kaffeeleganz.services;

import com.kaffeeleganz.models.OrderModel;
import com.kaffeeleganz.models.OrderItemModel;
import com.kaffeeleganz.models.AppUserModel;
import com.kaffeeleganz.models.ProductModel;
import com.kaffeeleganz.repositories.OrderRepository;
import com.kaffeeleganz.dto.OrderRequestDTO;
import com.kaffeeleganz.dto.OrderResponseDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.ArrayList;
import java.util.stream.Collectors;

@Service
public class OrderService {

    @Autowired
    private OrderRepository orderRepository;
    
    @Autowired
    private ProductService productService;

    public OrderModel saveOrder(OrderModel order) {
        return orderRepository.save(order);
    }

    public OrderResponseDTO createOrderFromRequest(OrderRequestDTO orderRequest, AppUserModel user) {
        OrderModel order = new OrderModel();
        order.setUser(user);
        order.setOrderDate(new java.util.Date());
        order.setTotalAmount(orderRequest.getTotalAmount());
        
        List<OrderItemModel> orderItems = new ArrayList<>();
        
        for (OrderRequestDTO.OrderProductDTO productDTO : orderRequest.getProducts()) {
            ProductModel product = productService.findProductById(productDTO.getId());
            
            OrderItemModel orderItem = new OrderItemModel();
            orderItem.setOrder(order);
            orderItem.setProduct(product);
            orderItem.setQuantity(productDTO.getQuantity());
            orderItem.setUnitPrice(product.getPrice());
            
            orderItems.add(orderItem);
        }
        
        order.setOrderItems(orderItems);
        
        OrderModel savedOrder = orderRepository.save(order);
        return convertToDTO(savedOrder);
    }

    public List<OrderResponseDTO> getOrdersByUser(AppUserModel user) {
        List<OrderModel> orders = orderRepository.findByUser(user);
        return orders.stream()
                .map(this::convertToDTO)
                .collect(Collectors.toList());
    }

    public Optional<OrderResponseDTO> getOrderByIdAndUser(Integer orderId, AppUserModel user) {
        Optional<OrderModel> orderOpt = orderRepository.findByIdAndUser(orderId, user);
        return orderOpt.map(this::convertToDTO);
    }
    
    private OrderResponseDTO convertToDTO(OrderModel order) {
        OrderResponseDTO dto = new OrderResponseDTO();
        dto.setId(order.getId());
        dto.setOrderDate(order.getOrderDate());
        dto.setTotalAmount(order.getTotalAmount());
        
        List<OrderResponseDTO.OrderItemResponseDTO> itemDTOs = order.getOrderItems().stream()
                .map(this::convertItemToDTO)
                .collect(Collectors.toList());
        dto.setOrderItems(itemDTOs);
        
        return dto;
    }
    
    private OrderResponseDTO.OrderItemResponseDTO convertItemToDTO(OrderItemModel item) {
        OrderResponseDTO.OrderItemResponseDTO itemDTO = new OrderResponseDTO.OrderItemResponseDTO();
        itemDTO.setId(item.getId());
        itemDTO.setQuantity(item.getQuantity());
        itemDTO.setUnitPrice(item.getUnitPrice());
        
        OrderResponseDTO.ProductResponseDTO productDTO = new OrderResponseDTO.ProductResponseDTO();
        productDTO.setId(item.getProduct().getId());
        productDTO.setName(item.getProduct().getName());
        productDTO.setPrice(item.getProduct().getPrice());
        productDTO.setImageUrl(item.getProduct().getImageUrl());
        
        itemDTO.setProduct(productDTO);
        return itemDTO;
    }
}
