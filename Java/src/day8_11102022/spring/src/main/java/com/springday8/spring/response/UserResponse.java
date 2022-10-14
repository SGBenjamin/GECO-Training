package com.springday8.spring.response;

import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString

public class UserResponse {
    int id;
    String  username, address, email, mobileNum, password,image, message;

}
