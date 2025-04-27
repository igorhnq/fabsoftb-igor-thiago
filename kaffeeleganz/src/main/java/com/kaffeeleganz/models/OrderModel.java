package com.kaffeeleganz.models;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;
import java.util.Date;

@Data
@Entity
public class OrderModel {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private Date orderDate;
    private Float totalAmount;
    private Status status;
    public enum Status {
        PENDING, COMPLETED, CANCELLED
    }
    // cliente?
    // lista de cafeterias?
    // lista de produtos?
    // tipo de pagamento?

    // métodos:
    // calcular total;
    // atualizar status;
}
