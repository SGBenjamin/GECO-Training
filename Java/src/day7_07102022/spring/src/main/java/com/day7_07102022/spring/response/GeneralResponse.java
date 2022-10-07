package com.day7_07102022.spring.response;

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
