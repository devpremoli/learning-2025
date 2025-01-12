package com.example.rolepermissiondemo.controller;

import com.example.rolepermissiondemo.dto.RegisterRequest;
import com.example.rolepermissiondemo.entity.MyUser;
import com.example.rolepermissiondemo.service.AuthService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AuthController {

    private final AuthService authService;
    @Autowired
    public AuthController(AuthService authService) {
        this.authService = authService;
    }

    @PostMapping("/register")
    public MyUser register(@RequestBody RegisterRequest req) {
        return authService.register(req);
    }
}
