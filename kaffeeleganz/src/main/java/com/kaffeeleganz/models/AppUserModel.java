package com.kaffeeleganz.models;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;

@Data
@Entity
public class AppUserModel {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String name;
    private String birthDate;
    private String joinedDate;
    private String email;
    private String address;
    private String password;
    // private String profilePicture;
    // private String description;
    // private String orderHistory;

    // métodos:
    // login;
    // acessar perfil?;
    // atualizar foto
    // editar informações
    // ver histórico de pedidos
}
