package com.day7_07102022.spring.model;


import lombok.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class UserModel {
    String email;
    String password;
    String username;
    String address;

    public UserModel(String email, String username, String address) {
        this.email = email;
        this.username = username;
        this.address = address;
    }

    public UserModel(String email, String password) {
        this.email = email;
        this.password = password;
    }


}
