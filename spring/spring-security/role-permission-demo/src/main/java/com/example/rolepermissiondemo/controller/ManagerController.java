package com.example.rolepermissiondemo.controller;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/manager")
public class ManagerController {

    @GetMapping
    public String get() {
        return "GET::ManagerController";
    }
    @PostMapping
    public String post() {
        return "POST::ManagerController";
    }
    @PutMapping
    public String put() {
        return "PUT::ManagerController";
    }
    @DeleteMapping
    public String delete() {
        return "DELETE::ManagerController";
    }
}
