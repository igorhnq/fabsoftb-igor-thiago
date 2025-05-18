package com.kaffeeleganz.services;

import com.kaffeeleganz.models.OrderModel;
import com.kaffeeleganz.models.AppUserModel;
import com.kaffeeleganz.repositories.OrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class OrderService {

    @Autowired
    private OrderRepository orderRepository;

    public OrderModel saveOrder(OrderModel order) {
        return orderRepository.save(order);
    }

    public List<OrderModel> getOrdersByUser(AppUserModel user) {
        return orderRepository.findByUser(user);
    }
}
