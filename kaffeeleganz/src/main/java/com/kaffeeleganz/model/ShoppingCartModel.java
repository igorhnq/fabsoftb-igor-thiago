package com.kaffeeleganz.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;
import java.util.Date;

@Data
@Entity
public class ShoppingCartModel {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private Integer quantity;
    private Float totalPrice;
    private Date addedDate; // será que precisa?
    // lista de itens do carrinho?

    // métodos:
    // atualizar quantidade;
    // remover item;
    // ver detalhes;
    // prosseguir para pagamento;
    // calcular total;
}