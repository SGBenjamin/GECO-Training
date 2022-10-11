package com.springday8.spring.response;

import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class GeneralResponse {

    String message;
    int sum;
    int subtract;
    int multiply;
    double divide;

}
