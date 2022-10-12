package com.springday8.spring.controller;

import com.springday8.spring.model.UserModel;
import com.springday8.spring.repo.UserRepo;
import com.springday8.spring.request.UserRequest;
import com.springday8.spring.response.GeneralResponse;
import com.springday8.spring.response.UserResponse;
import com.springday8.spring.services.UserService;
import org.apache.catalina.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.*;

@RestController
@RequestMapping("user")
public class UserController {

    @Autowired
    UserService userService;
    @Autowired
    UserRepo userRepo;

    @GetMapping("/{userId}")
    public ResponseEntity<?> getUser(@PathVariable Integer userId) throws Exception {
        try{
            UserModel user = userService.extractUser(userId);
            return ResponseEntity.ok(user);
        }catch (Exception e){
            UserResponse userResponse = new UserResponse();
            userResponse.setMessage(e.getMessage());
            return ResponseEntity.badRequest().body(userResponse);
        }
    }
    @GetMapping
    public ResponseEntity<?> getAllUsers(){
        ArrayList<UserModel> allUsers = (ArrayList<UserModel>) userRepo.findAll();
        return ResponseEntity.ok(allUsers.toArray());
    }

    @PostMapping("/newuser")
    public ResponseEntity<?> createUser(@RequestBody UserRequest userRequest){
        UserResponse userResponse = new UserResponse();
        try{
            userService.createUser(userRequest);
            userResponse.setMessage("Creation success");
            return ResponseEntity.ok(userResponse);
        } catch (Exception e) {
            userResponse.setMessage(e.getMessage());
            return ResponseEntity.badRequest().body(userResponse);
        }
    }

    @PostMapping("/delete/{userid}")
    public ResponseEntity<?> deleteUser(@PathVariable Integer userid){
        UserResponse userResponse = new UserResponse();
        try{
            userService.deleteUser(userid);
            userResponse.setMessage("Deletion Successful");
            return ResponseEntity.ok(userResponse);
        }catch (Exception e){
            userResponse.setMessage(e.getMessage());
            return ResponseEntity.badRequest().body(userResponse);
        }
    }
//    Update user still unable to be solved. Need help for this.
//    Error given:  The given id must not be null!
    @PutMapping("/update/{userid}")
    public ResponseEntity<?> updateUser(@RequestBody UserRequest userRequest, @PathVariable Integer userid ){
        UserResponse userResponse = new UserResponse();
        Optional<Object> updatedUser = userRepo.findById(userid)
                .map(user->{
                    user.setId(userid);
                    user.setUsername(userRequest.getUsername());
                    user.setAddress(userRequest.getAddress());
                    user.setMobileNum(userRequest.getMobileNum());
                    user.setEmail(userRequest.getEmail());
                    user.setPassword(userRequest.getPassword());
                    return userRepo.save(user);
                });

        userResponse.setMessage("User Update Successful");
        return ResponseEntity.ok(userResponse);

    }

    @PostMapping("/login")
    public ResponseEntity<?> loginValid(@RequestBody UserRequest userRequest){
        UserResponse userResponse = new UserResponse();
        try{
            Optional<UserModel> user = userService.loginValid(userRequest);

            return ResponseEntity.ok(user);
        } catch (Exception e) {
            userResponse.setMessage(e.getMessage());
            return ResponseEntity.badRequest().body(userResponse);
        }
    }

}
