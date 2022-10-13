package com.springday8.spring.request;


import lombok.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class UserRequest {
    String username;
    String address;
    String email;
    String password;
    String mobileNum;

    public UserRequest(String email, String password) {
        this.email = email;
        this.password = password;
    }
}
