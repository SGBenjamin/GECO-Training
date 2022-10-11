package com.springday8.spring.controller;

import com.springday8.spring.model.UserModel;
import com.springday8.spring.request.UserRequest;
import com.springday8.spring.response.UserResponse;
import com.springday8.spring.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;

@RestController
@RequestMapping("user")
public class UserController {

    @Autowired
    UserService userService;


    @GetMapping("/{userId}")
    public ResponseEntity<?> getUser(@PathVariable Integer userId){
        return userService.extractUser(userId);
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody UserRequest userRequest){
        boolean userValid = userService.loginValidation(userRequest.getEmail(), userRequest.getPassword());
        UserResponse userResponse = new UserResponse();
        if(userValid){
            userResponse.setMessage("Login Successful");
            return ResponseEntity.ok(userResponse);
        } else {
            userResponse.setMessage("Login Not Valid");
            return ResponseEntity.badRequest().body(userResponse);
        }
    }

}
