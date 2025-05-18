package com.kaffeeleganz.controllers;

import com.kaffeeleganz.models.OrderModel;
import com.kaffeeleganz.models.AppUserModel;
import com.kaffeeleganz.services.OrderService;
import com.kaffeeleganz.repositories.AppUserRepository;
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
    public ResponseEntity<?> createOrder(@RequestBody OrderModel order, Authentication authentication) {
        System.out.println("Principal: " + authentication.getPrincipal());
        String email = authentication.getName();
        AppUserModel user = appUserRepository.findByEmail(email).orElseThrow();
        order.setUser(user);
        order.setOrderDate(new java.util.Date());
        OrderModel savedOrder = orderService.saveOrder(order);
        return ResponseEntity.ok(savedOrder);
    }

    @GetMapping("/my")
    public ResponseEntity<List<OrderModel>> getMyOrders(Authentication authentication) {
        String email = (String) authentication.getPrincipal();
        System.out.println("Buscando usuário: " + email);
        Optional<AppUserModel> userOpt = appUserRepository.findByEmail(email);
        if (userOpt.isEmpty()) {
            return ResponseEntity.status(404).build();
        }
        AppUserModel user = userOpt.get();
        List<OrderModel> orders = orderService.getOrdersByUser(user);
        return ResponseEntity.ok(orders);
    }
}
