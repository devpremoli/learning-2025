package com.example.jwtdemoteluskostrategy;

import com.example.jwtdemoteluskostrategy.model.Role;
import com.example.jwtdemoteluskostrategy.repository.RoleRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import java.util.List;

@SpringBootApplication
public class JwtDemoTeluskoStrategyApplication {

	public static void main(String[] args) {
		SpringApplication.run(JwtDemoTeluskoStrategyApplication.class, args);
	}

	@Bean
	CommandLineRunner initRoles(RoleRepository roleRepository) {
		return args -> {
			List<String> roles = List.of("USER", "ADMIN");

			roles.forEach(roleName -> {
				if (roleRepository.findByName(roleName).isEmpty()) {
					Role role = new Role();
					role.setName(roleName);
					roleRepository.save(role);
					System.out.println("Created Role: " + roleName);
				}
			});
		};
	}

}
