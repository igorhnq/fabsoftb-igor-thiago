package com.kaffeeleganz.repositories;

import com.kaffeeleganz.models.OrderModel;
import com.kaffeeleganz.models.AppUserModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface OrderRepository extends JpaRepository<OrderModel, Integer> {
    List<OrderModel> findByUser(AppUserModel user);
}
