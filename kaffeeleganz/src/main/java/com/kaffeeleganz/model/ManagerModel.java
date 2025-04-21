package com.kaffeeleganz.model;

import jakarta.persistence.Entity;
import lombok.Data;
import lombok.EqualsAndHashCode;

@Data
@Entity
@EqualsAndHashCode(callSuper = true)
public class ManagerModel extends AppUserModel {
    // métodos:
    // adicionar item?
    // excluir item?
    // acessar estatisticas de vendas
}
