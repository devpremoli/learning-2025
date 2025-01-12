package com.example.rolepermissiondemo.myenum;

public enum Permission {

    ADMIN_READ("admin_read"),
    ADMIN_CREATE("admin_create"),
    ADMIN_UPDATE("admin_update"),
    ADMIN_DELETE("admin_delete"),

    MANAGER_READ("manager_read"),
    MANAGER_CREATE("manager_create"),
    MANAGER_UPDATE("manager_update"),
    MANAGER_DELETE("manager_delete");


    private final String permission;
    Permission(String permission) {
        this.permission = permission;
    }
    public String getPermission() {
        return permission;
    }

}
