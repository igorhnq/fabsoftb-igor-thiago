package com.kaffeeleganz.repositories;

import com.kaffeeleganz.models.OrderItemModel;
import com.kaffeeleganz.models.OrderModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface OrderItemRepository extends JpaRepository<OrderItemModel, Integer> {
    List<OrderItemModel> findByOrder(OrderModel order);
} 