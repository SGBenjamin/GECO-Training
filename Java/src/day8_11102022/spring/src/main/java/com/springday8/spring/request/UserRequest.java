package com.day7_07102022.spring.Request;


import lombok.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class UserRequest {
    String email;
    String password;
}
