package com.day7_07102022.spring.controller;

import com.day7_07102022.spring.Request.MathRequest;
import com.day7_07102022.spring.Request.UserRequest;
import com.day7_07102022.spring.model.UserModel;
import com.day7_07102022.spring.response.GeneralResponse;
import com.day7_07102022.spring.response.UserResponse;
import com.day7_07102022.spring.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.text.DecimalFormat;
import java.util.ArrayList;

@RestController
public class UserController {
    @Autowired
    UserService userService;

    @PostMapping("userLogin")
    public ResponseEntity<?> login(@RequestBody UserRequest userRequest){
        ArrayList<UserModel> userModelArrayList = new ArrayList<UserModel>();
        UserModel userModel1 = new UserModel("user1@gmail.com", "user1pw");
        UserModel userModel2 = new UserModel("user2@hotmail.com", "user2pw");
        UserModel userModel3 = new UserModel("user3@yahoo.com", "user3pw");
        UserModel userModel4 = new UserModel("user4@outlook.com", "user4pw");

        userModelArrayList.add(userModel1);
        userModelArrayList.add(userModel2);
        userModelArrayList.add(userModel3);
        userModelArrayList.add(userModel4);

        UserResponse response = new UserResponse();
        boolean responseBool = false;
        for(UserModel user : userModelArrayList){
            if(userRequest.getEmail().equalsIgnoreCase(user.getEmail()) &&
                    userRequest.getPassword().equals(user.getPassword())){
                responseBool = true;
                break;
            }
        }
        if(responseBool){
            response.setMessage("Login Successful");
            return ResponseEntity.ok(response);
        } else{
            response.setMessage("Login Credentials not Valid. Please Try again.");
            return ResponseEntity.badRequest().body(response);
        }
//        if(userRequest.getPassword().equals(userModelArrayList.get(0).getPassword()) &&
//        userRequest.getEmail().equals(userModelArrayList.get(0).getEmail())){
//            response.setMessage("Login Successful");
//            return ResponseEntity.ok(response);
//        }else if(userRequest.getPassword().equals(userModelArrayList.get(1).getPassword()) &&
//                userRequest.getEmail().equals(userModelArrayList.get(1).getEmail())){
//            response.setMessage("Login Successful");
//            return ResponseEntity.ok(response);
//        }else if(userRequest.getPassword().equals(userModelArrayList.get(2).getPassword()) &&
//                userRequest.getEmail().equals(userModelArrayList.get(2).getEmail())){
//            response.setMessage("Login Successful");
//            return ResponseEntity.ok(response);
//        }else if(userRequest.getPassword().equals(userModelArrayList.get(3).getPassword()) &&
//                userRequest.getEmail().equals(userModelArrayList.get(3).getEmail())){
//            response.setMessage("Login Successful");
//            return ResponseEntity.ok(response);
//        } else{
//            response.setMessage("Login Credentials not Valid. Please Try again.");
//            return ResponseEntity.badRequest().body(response);
//        }
    }

    @GetMapping("user")
    public ArrayList<UserModel> getUsers(){
        UserResponse response = new UserResponse();
        ArrayList<UserModel> userModelArrayList = new ArrayList<UserModel>();
        UserModel userModel1 = new UserModel("user1@gmail.com", "user1","CCK");
        UserModel userModel2 = new UserModel("user2@hotmail.com", "user2", "JE");
        UserModel userModel3 = new UserModel("user3@yahoo.com", "user3", "AMK");
        UserModel userModel4 = new UserModel("user4@outlook.com", "user4", "Clementi");

        userModelArrayList.add(userModel1);
        userModelArrayList.add(userModel2);
        userModelArrayList.add(userModel3);
        userModelArrayList.add(userModel4);

        if(userModelArrayList.size()!=0){
            return userModelArrayList;
        }else{
            return null;
        }

    }

    @PostMapping("add")
    public ResponseEntity<?> addition(@RequestBody MathRequest mathRequest){
        GeneralResponse response = new GeneralResponse();
        int result = userService.addition(mathRequest.getNum1(), mathRequest.getNum2());
        response.setMessage("Result is "+result);
        response.setSum(result);
        return ResponseEntity.ok(response);
    }

    @PostMapping("math")
    public ResponseEntity<?> mathematics(@RequestBody MathRequest mathRequest){
        GeneralResponse response = new GeneralResponse();
        if(mathRequest.getMathType().equalsIgnoreCase("add")){
            int result = mathRequest.getNum1()+ mathRequest.getNum2();
            response.setSum(result);
            return ResponseEntity.ok(response);
        } else if (mathRequest.getMathType().equalsIgnoreCase("subtract")) {
            int result = mathRequest.getNum1()- mathRequest.getNum2();
            response.setSubtract(result);
            return ResponseEntity.ok(response);
        } else if (mathRequest.getMathType().equalsIgnoreCase("multiply")) {
            if(mathRequest.getNum1()!=0 && mathRequest.getNum2()!=0){
                int result = mathRequest.getNum1()*mathRequest.getNum2();
                response.setMultiply(result);
                return ResponseEntity.ok(response);
            }else{
                response.setMessage("Invalid Multiplication");
                return ResponseEntity.badRequest().body(response);
            }
        } else if (mathRequest.getMathType().equalsIgnoreCase("divide")) {
            if(mathRequest.getNum1()!=0 && mathRequest.getNum2()!=0){
                double divide =  (double) mathRequest.getNum1()/mathRequest.getNum2();
                DecimalFormat df = new DecimalFormat("###.###");
                double result = Double.parseDouble(df.format(divide));
                response.setDivide(result);
                return ResponseEntity.ok(response);
            }else{
                response.setMessage("Invalid Division");
                return ResponseEntity.badRequest().body(response);
            }
        } else {
            response.setMessage("Invalid Entry");
            return ResponseEntity.badRequest().body(response);
        }
    }


}
