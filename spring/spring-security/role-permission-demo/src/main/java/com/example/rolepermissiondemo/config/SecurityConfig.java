package com.example.rolepermissiondemo.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;


import static com.example.rolepermissiondemo.myenum.Role.ADMIN;
import static com.example.rolepermissiondemo.myenum.Role.MANAGER;
import static com.example.rolepermissiondemo.myenum.Permission.ADMIN_READ;
import static com.example.rolepermissiondemo.myenum.Permission.ADMIN_UPDATE;
import static com.example.rolepermissiondemo.myenum.Permission.ADMIN_CREATE;
import static com.example.rolepermissiondemo.myenum.Permission.ADMIN_DELETE;
import static com.example.rolepermissiondemo.myenum.Permission.MANAGER_READ;
import static com.example.rolepermissiondemo.myenum.Permission.MANAGER_UPDATE;
import static com.example.rolepermissiondemo.myenum.Permission.MANAGER_CREATE;
import static com.example.rolepermissiondemo.myenum.Permission.MANAGER_DELETE;
import static org.springframework.http.HttpMethod.*;


@Configuration
@EnableWebSecurity
public class SecurityConfig {

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
                .csrf(AbstractHttpConfigurer::disable)
                .authorizeHttpRequests(auth -> auth
                        .requestMatchers("/login/**", "/register/**").permitAll()
                        .requestMatchers("/manager/**").hasAnyRole(ADMIN.name(), MANAGER.name())
                        .requestMatchers(GET, "/manager/**").hasAnyAuthority(ADMIN_READ.name(), MANAGER_READ.name())
                        .requestMatchers(POST, "/manager/**").hasAnyAuthority(ADMIN_CREATE.name(), MANAGER_CREATE.name())
                        .requestMatchers(PUT, "/manager/**").hasAnyAuthority(ADMIN_UPDATE.name(), MANAGER_UPDATE.name())
                        .requestMatchers(DELETE, "/manager/**").hasAnyAuthority(ADMIN_DELETE.name(), MANAGER_DELETE.name())
                        .requestMatchers("/admin/**").hasRole(ADMIN.name())
                        .requestMatchers(GET, "/admin/**").hasAuthority(ADMIN_READ.name())
                        .requestMatchers(POST, "/admin/**").hasAuthority(ADMIN_CREATE.name())
                        .requestMatchers(PUT, "/admin/**").hasAuthority(ADMIN_UPDATE.name())
                        .requestMatchers(DELETE, "/admin/**").hasAuthority(ADMIN_DELETE.name())
                        .anyRequest().authenticated()
                )
                .httpBasic(Customizer.withDefaults())
                .formLogin(Customizer.withDefaults());

        return http.build();
    }

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }
}

//    private final MyUserDetailsService myUserDetailsService;
//    public SecurityConfig(MyUserDetailsService myUserDetailsService) {
//        this.myUserDetailsService = myUserDetailsService;
//    }
//
//    @Bean
//    public AuthenticationManager authManager() throws Exception {
//        DaoAuthenticationProvider authProvider = new DaoAuthenticationProvider();
//        authProvider.setUserDetailsService(myUserDetailsService);
//        authProvider.setPasswordEncoder(passwordEncoder());
//        return new ProviderManager(authProvider);
//    }
