package com.example.jwtdemoteluskostrategy.service;

import com.example.jwtdemoteluskostrategy.dto.AuthResponseDto;
import com.example.jwtdemoteluskostrategy.dto.LoginDto;
import com.example.jwtdemoteluskostrategy.dto.RegisterDto;
import com.example.jwtdemoteluskostrategy.model.Role;
import com.example.jwtdemoteluskostrategy.model.UserEntity;
import com.example.jwtdemoteluskostrategy.repository.RoleRepository;
import com.example.jwtdemoteluskostrategy.repository.UserRepository;
import com.example.jwtdemoteluskostrategy.security.JwtService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class AuthService {

    private final UserRepository userRepository;
    private final RoleRepository roleRepository;
    private final PasswordEncoder passwordEncoder;
    private final AuthenticationManager authenticationManager;
    private final JwtService jwtService;

    public UserEntity register(RegisterDto registerDto) {

        if (userRepository.existsByUsername(registerDto.getUsername())) {
            throw new UsernameNotFoundException(registerDto.getUsername() + " already exists");
        }

        UserEntity user = new UserEntity();
        user.setPassword(passwordEncoder.encode(registerDto.getPassword()));
        user.setUsername(registerDto.getUsername());

        List<Role> roles = (registerDto.getRoles() == null || registerDto.getRoles().isEmpty())
                ? List.of(roleRepository.findByName("USER")
                .orElseThrow(() -> new RuntimeException("Default role USER not found!")))
                : registerDto.getRoles().stream()
                .map(roleName -> roleRepository.findByName(roleName)
                        .orElseThrow(() -> new RuntimeException("Role not found: " + roleName)))
                .collect(Collectors.toList());

        user.setRoles(roles);

        return userRepository.save(user);
    }

    public AuthResponseDto verify(LoginDto user) {
        Authentication authentication;
        try {
            authentication = authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(user.getUsername(), user.getPassword())
            );
        } catch (Exception e) {
            throw new UsernameNotFoundException("Invalid username or password");
        }

        if (!authentication.isAuthenticated()) {
            throw new UsernameNotFoundException("Authentication failed");
        }

        String generatedToken = jwtService.generateToken(user.getUsername());
        return new AuthResponseDto(generatedToken);
    }
}