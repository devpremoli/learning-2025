package com.example.jwtdemoteluskostrategy.controller;

import com.example.jwtdemoteluskostrategy.dto.AuthResponseDto;
import com.example.jwtdemoteluskostrategy.dto.LoginDto;
import com.example.jwtdemoteluskostrategy.dto.RegisterDto;
import com.example.jwtdemoteluskostrategy.model.UserEntity;
import com.example.jwtdemoteluskostrategy.service.AuthService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
public class AuthController {

    private final AuthService authService;

    @PostMapping("/register")
    public ResponseEntity<UserEntity> registerUser(@RequestBody RegisterDto registerDto) {
        UserEntity response = authService.register(registerDto);
        return ResponseEntity.ok().body(response);
    }

    @PostMapping("/login")
    public AuthResponseDto login(@RequestBody LoginDto loginDto) {
        return authService.verify(loginDto);
    }

}
