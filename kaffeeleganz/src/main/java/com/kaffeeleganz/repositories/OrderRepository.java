package com.kaffeeleganz.repositories;

import com.kaffeeleganz.models.OrderModel;
import com.kaffeeleganz.models.AppUserModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface OrderRepository extends JpaRepository<OrderModel, Integer> {
    List<OrderModel> findByUser(AppUserModel user);

    Optional<OrderModel> findByIdAndUser(Integer orderId, AppUserModel user);
}
