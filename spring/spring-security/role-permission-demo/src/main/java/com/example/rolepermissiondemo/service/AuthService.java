package com.example.rolepermissiondemo.service;

import com.example.rolepermissiondemo.dto.RegisterRequest;
import com.example.rolepermissiondemo.entity.MyUser;
import com.example.rolepermissiondemo.myenum.Role;
import com.example.rolepermissiondemo.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Set;
import java.util.stream.Collectors;

@Service
public class AuthService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    @Autowired
    public AuthService(UserRepository userRepository, PasswordEncoder passwordEncoder) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
    }

    public MyUser register(RegisterRequest req) {
        MyUser user = new MyUser();
        user.setUsername(req.getUsername());
        user.setPassword(passwordEncoder.encode(req.getPassword()));
        Set<Role> roleSet = req.getRoles().stream()
                .map(String::toUpperCase)  // Ensure case-insensitive matching
                .map(Role::valueOf)        // Convert String to Enum
                .collect(Collectors.toSet());

        user.setRoles(roleSet);
        System.out.println("roles: " + user.getRoles());
        return userRepository.save(user);
    }
}
