package com.kaffeeleganz.models;

import jakarta.persistence.Entity;
import lombok.Data;
import lombok.EqualsAndHashCode;

@Data
@Entity
@EqualsAndHashCode(callSuper = true)
public class AdministratorModel extends AppUserModel {
    // métodos:
    // receber avisos dos franqueadores?
}
