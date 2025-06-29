package com.kaffeeleganz.controllers;

import com.kaffeeleganz.models.AppUserModel;
import com.kaffeeleganz.services.OrderService;
import com.kaffeeleganz.repositories.AppUserRepository;
import com.kaffeeleganz.dto.OrderRequestDTO;
import com.kaffeeleganz.dto.OrderResponseDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/v1/orders")
public class OrderController {

    @Autowired
    private OrderService orderService;

    @Autowired
    private AppUserRepository appUserRepository;

    @PostMapping
    public ResponseEntity<OrderResponseDTO> createOrder(@RequestBody OrderRequestDTO orderRequest, Authentication authentication) {
        System.out.println("Principal: " + authentication.getPrincipal());
        String email = authentication.getName();
        AppUserModel user = appUserRepository.findByEmail(email).orElseThrow();
        
        OrderResponseDTO savedOrder = orderService.createOrderFromRequest(orderRequest, user);
        return ResponseEntity.ok(savedOrder);
    }

    @GetMapping("/my")
    public ResponseEntity<List<OrderResponseDTO>> getMyOrders(Authentication authentication) {
        String email = (String) authentication.getPrincipal();
        System.out.println("Buscando usuário: " + email);
        Optional<AppUserModel> userOpt = appUserRepository.findByEmail(email);
        if (userOpt.isEmpty()) {
            return ResponseEntity.status(404).build();
        }
        AppUserModel user = userOpt.get();
        List<OrderResponseDTO> orders = orderService.getOrdersByUser(user);
        return ResponseEntity.ok(orders);
    }

    @GetMapping("/{orderId}")
    public ResponseEntity<OrderResponseDTO> getOrderById(@PathVariable Integer orderId, Authentication authentication) {
        String email = (String) authentication.getPrincipal();
        Optional<AppUserModel> userOpt = appUserRepository.findByEmail(email);
        if (userOpt.isEmpty()) {
            return ResponseEntity.status(404).build();
        }
        
        AppUserModel user = userOpt.get();
        Optional<OrderResponseDTO> orderOpt = orderService.getOrderByIdAndUser(orderId, user);
        
        if (orderOpt.isEmpty()) {
            return ResponseEntity.status(404).build();
        }
        
        return ResponseEntity.ok(orderOpt.get());
    }
}
