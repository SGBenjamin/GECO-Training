package com.springday8.spring.services;

import com.springday8.spring.model.UserModel;
import com.springday8.spring.response.UserResponse;
import org.apache.catalina.User;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;

@Service
public class UserService {

    public HashMap<Integer, UserModel> populateHash(){
        HashMap<Integer, UserModel> userHash = new HashMap<>();

        UserModel userModel1 = new UserModel(1,"user1","CCK","user1@gmail.com","pw1");
        UserModel userModel2 = new UserModel(2, "user2", "JE","user2@hotmail.com", "pw2");
        UserModel userModel3 = new UserModel(3, "user3", "AMK","user3@yahoo.com","pw3");
        UserModel userModel4 = new UserModel(4, "user4", "Clementi","user4@outlook.com","pw4");

        userHash.put(1, userModel1);
        userHash.put(2, userModel2);
        userHash.put(3, userModel3);
        userHash.put(4, userModel4);

        return userHash;
    }

    public ResponseEntity<?> extractUser(int a){
        HashMap<Integer, UserModel> userHash = populateHash();
        UserResponse userResponse = new UserResponse();
        if(a>userHash.size()){
            userResponse.setMessage("User not Found");
            return ResponseEntity.badRequest().body(userResponse);
        }else{
            UserModel user = userHash.get(a);
            userResponse.setId(user.getId());
            userResponse.setUsername(user.getUsername());
            userResponse.setAddress(user.getAddress());
            userResponse.setEmail(user.getEmail());
            return ResponseEntity.ok(userResponse);
        }
    }

    public boolean loginValidation(String email, String password){
        HashMap<Integer, UserModel> userHash = populateHash();
        ArrayList<UserModel> userList = new ArrayList<>();
        for(Integer id : userHash.keySet()){
            userList.add(userHash.get(id));
        }
        boolean userValid = false;
        for(UserModel user : userList){
            if(email.equals(user.getEmail()) && password.equals(user.getPassword())){
                userValid = true;
                break;
            }
        }
        return userValid;
    }


}
