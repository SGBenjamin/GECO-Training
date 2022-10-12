package com.springday8.spring.request;


import lombok.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class UserRequest {
    int id;
    String username;
    String address;
    String email;
    String password;
    String mobileNum;

}
