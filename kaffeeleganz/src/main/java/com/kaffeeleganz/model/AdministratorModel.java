package com.kaffeeleganz.model;

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
