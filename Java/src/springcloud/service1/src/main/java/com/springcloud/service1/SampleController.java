package com.springcloud.service1;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cloud.client.circuitbreaker.CircuitBreaker;
import org.springframework.cloud.client.circuitbreaker.CircuitBreakerFactory;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

@RequestMapping("service1")
@RestController
public class SampleController {

    @Autowired
    RestTemplate restTemplate;
    @Autowired
    CircuitBreakerFactory circuitBreakerFactory;

    @GetMapping("sampleget")
    public String callAPI(){
        String response = restTemplate.getForObject("http://localhost:8082/sampleapi", String.class);

        System.out.println("Service1 Response is: "+response);
        return ("Service1 Response is: "+response);
    }

    private String callForError(){
        return "Error getting List. Respond is Successful";
    }

    @GetMapping("sampleerrortest")
    public String getDefaultList(){
        CircuitBreaker circuitBreaker = circuitBreakerFactory.create("circuitbreaker");
        String url = "https://localhost:2321/errortest";
        return circuitBreaker.run(()->restTemplate.getForObject(url, String.class),
                throwable -> callForError());
    }
}
