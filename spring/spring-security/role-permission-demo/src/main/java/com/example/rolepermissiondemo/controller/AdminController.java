package com.example.rolepermissiondemo.controller;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/admin")
public class AdminController {

    @GetMapping
    public String get() {
        return "GET::AdminController";
    }
    @PostMapping
    public String post() {
        return "POST::AdminController";
    }
    @PutMapping
    public String put() {
        return "PUT::AdminController";
    }
    @DeleteMapping
    public String delete() {
        return "DELETE::AdminController";
    }
}
