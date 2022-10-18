package com.day7_07102022.spring.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.client.RestTemplate;

@RequestMapping("service1")
public class SampleController {

    @Autowired
    RestTemplate restTemplate;

    @GetMapping("sampleget")
    public String callAPI(){
        String response = restTemplate.getForObject("http://localhost:8081/sampleapi", String.class);
        System.out.println("Another Service Response is: "+response);
        return "ok";
    }
}
