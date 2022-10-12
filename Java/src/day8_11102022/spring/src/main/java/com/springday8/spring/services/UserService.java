package com.springday8.spring.services;

import com.springday8.spring.model.UserModel;
import com.springday8.spring.repo.UserRepo;
import com.springday8.spring.request.UserRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserService {

    @Autowired
    UserRepo userRepo;

    public UserModel extractUser(Integer a) throws Exception {
        Optional<UserModel> user = userRepo.findById(a);
        if(user.isPresent()){
            return user.get();
        }else{
            throw  new Exception("User not found");
        }
    }

    public void createUser(UserRequest userRequest) throws Exception{
        Optional<UserModel> existUser = userRepo.findUserByEmail(userRequest.getEmail());
        if(existUser.isPresent()){
            throw new Exception("Email is already in use");
        }else{
            UserModel newUser = new UserModel();
            newUser.setUsername(userRequest.getUsername());
            newUser.setPassword(userRequest.getPassword());
            newUser.setAddress(userRequest.getAddress());
            newUser.setEmail(userRequest.getEmail());
            newUser.setMobileNum(userRequest.getMobileNum());
            userRepo.save(newUser);
        }
    }

    public boolean deleteUser(Integer userid) throws Exception {
        Optional<UserModel> user = userRepo.findById(userid);
        if(user.isPresent()){
            userRepo.deleteById(userid);
            return true;
        }else {
            throw new Exception("User not Found");
        }
    }



    public Optional<UserModel> loginValid(UserRequest userRequest) throws Exception {
        Optional<UserModel> user = userRepo.findUserByEmailAndPassword(userRequest.getEmail(), userRequest.getPassword());
        if(user.isPresent()){
            return user;
        }else {
            throw new Exception("Login Invalid");
        }
    }
}
