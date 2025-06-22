package com.kaffeeleganz.controllers;

import com.kaffeeleganz.models.AppUserModel;
import com.kaffeeleganz.services.AppUserService;
import com.kaffeeleganz.utils.JwtUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.Optional;
import java.util.Collections;
import org.springframework.security.core.Authentication;

@RestController
@RequestMapping("/api/v1/auth")
public class AppUserController {

    @Autowired
    private AppUserService appUserService;

    @PostMapping("register")
    public ResponseEntity<?> register(@RequestBody AppUserModel user) {
        try {
            AppUserModel newUser = appUserService.registerUser(user);

            newUser.setPassword(null);
            return ResponseEntity.ok(newUser);
        } catch (RuntimeException e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

    @PostMapping("login")
    public ResponseEntity<?> login(@RequestBody AppUserModel user) {
        Optional<AppUserModel> userOpt = appUserService.loginUser(user.getEmail(), user.getPassword());
        if (userOpt.isPresent()) {
            String token = JwtUtil.generateToken(user.getEmail());
            return ResponseEntity.ok(Collections.singletonMap("token", token));
        } else {
            return ResponseEntity.status(401).body("Email ou senha inválidos");
        }
    }

    @GetMapping("/me")
    public ResponseEntity<?> getCurrentUser(Authentication authentication) {
        String email = authentication.getName();
        Optional<AppUserModel> userOpt = appUserService.findByEmail(email);
        if (userOpt.isPresent()) {
            AppUserModel user = userOpt.get();
            user.setPassword(null); 
            return ResponseEntity.ok(user);
        }
        return ResponseEntity.status(404).build();
    }

    @PutMapping("/description")
    public ResponseEntity<?> updateDescription(@RequestBody String description, Authentication authentication) {
        String email = authentication.getName();
        Optional<AppUserModel> userOpt = appUserService.findByEmail(email);
        if (userOpt.isPresent()) {
            AppUserModel user = userOpt.get();
            user.setDescription(description);
            AppUserModel updatedUser = appUserService.updateUser(user);
            updatedUser.setPassword(null); 
            return ResponseEntity.ok(updatedUser);
        }
        return ResponseEntity.status(404).body("Usuário não encontrado");
    }

    @PutMapping("/profile")
    public ResponseEntity<?> updateProfile(@RequestBody AppUserModel updatedUser, Authentication authentication) {
        String email = authentication.getName();
        Optional<AppUserModel> userOpt = appUserService.findByEmail(email);
        if (userOpt.isPresent()) {
            AppUserModel user = userOpt.get();
            user.setDescription(updatedUser.getDescription());
            user.setProfileImageUrl(updatedUser.getProfileImageUrl());
            AppUserModel savedUser = appUserService.updateUser(user);
            savedUser.setPassword(null); 
            return ResponseEntity.ok(savedUser);
        }
        return ResponseEntity.status(404).body("Usuário não encontrado");
    }
}