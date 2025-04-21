package com.kaffeeleganz.model;

import jakarta.persistence.Entity;
import lombok.Data;
import lombok.EqualsAndHashCode;

@Data
@Entity
@EqualsAndHashCode(callSuper = true)
public class CostumerModel extends AppUserModel {
    // métodos:
    // adicionar no carrinho
    // enviar currículo
    // solicitar franquiador
    // avaliar cafeterias
}
