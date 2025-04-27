package com.kaffeeleganz.models;

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
