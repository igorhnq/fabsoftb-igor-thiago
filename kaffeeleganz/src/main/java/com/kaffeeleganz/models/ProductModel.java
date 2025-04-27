package com.kaffeeleganz.models;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;

@Data
@Entity
public class ProductModel {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String name;
    private Float price;
    private String category;
    private String description; // talvez tenha que mudar o tipo para ter mais caber mais caracteres
    // private String image; ainda não sei como fazer

    // obter detalhes do produto;
    // adicionar ao carrinho;
}
