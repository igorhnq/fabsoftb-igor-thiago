package com.kaffeeleganz.services;

import org.springframework.stereotype.Service;
import com.kaffeeleganz.models.AppUserModel;
import com.kaffeeleganz.repositories.AppUserRepository;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

@Service
public class AppUserService {

    @Autowired
    private AppUserRepository appUserRepository;

    private final PasswordEncoder passwordEncoder = new BCryptPasswordEncoder();

    public AppUserModel registerUser(AppUserModel user) {
        if (appUserRepository.findByEmail(user.getEmail()).isPresent()) {
            throw new RuntimeException("Email já cadastrado!");
        }

        user.setPassword(passwordEncoder.encode(user.getPassword()));
        return appUserRepository.save(user);
    }

    public Optional<AppUserModel> loginUser(String email, String password) {
        Optional<AppUserModel> userOpt = appUserRepository.findByEmail(email);
        if (userOpt.isPresent() && passwordEncoder.matches(password, userOpt.get().getPassword())) {
            return userOpt;
        }
        return Optional.empty();
    }

    public Optional<AppUserModel> findByEmail(String email) {
        return appUserRepository.findByEmail(email);
    }
}