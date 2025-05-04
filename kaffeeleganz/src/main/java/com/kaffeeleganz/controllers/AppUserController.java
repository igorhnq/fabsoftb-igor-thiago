package com.kaffeeleganz.controllers;

import com.kaffeeleganz.models.AppUserModel;
import com.kaffeeleganz.services.AppUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.Optional;

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
            AppUserModel loggedUser = userOpt.get();
            loggedUser.setPassword(null); 
            return ResponseEntity.ok(loggedUser);
        } else {
            return ResponseEntity.status(401).body("Email ou senha inválidos");
        }
    }
}