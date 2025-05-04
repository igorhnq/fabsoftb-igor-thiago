package com.kaffeeleganz.repositories;

import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import com.kaffeeleganz.models.AppUserModel;

public interface AppUserRepository extends JpaRepository <AppUserModel, Integer> {
    Optional<AppUserModel> findByEmail(String email);
}
