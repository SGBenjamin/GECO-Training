package com.day7_07102022.spring.service;

import com.day7_07102022.spring.model.UserModel;
import com.day7_07102022.spring.repo.userRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {
    @Autowired
    userRepo userRepo;
    public int addition (int a,int b){
        return (a+b);
    }

//    public boolean createUser(){
//        try{
//            UserModel userModel = new UserModel();
//            userModel.setUsername("User 5");
//            userModel.setEmail("user5@gmail.com");
//            userModel.setPassword("user5pw");
//            userModel.setAddress("TPY");
//        }catch ()
//    }


}
