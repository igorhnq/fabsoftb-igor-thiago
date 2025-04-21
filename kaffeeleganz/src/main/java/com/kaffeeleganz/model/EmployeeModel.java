package com.kaffeeleganz.model;

import jakarta.persistence.Entity;
import lombok.Data;
import lombok.EqualsAndHashCode;

@Data
@Entity
@EqualsAndHashCode(callSuper = true)
public class EmployeeModel extends AppUserModel {
    private String phone;
    private String cpf;

    // métodos:
    // gerenciar estoque
}
