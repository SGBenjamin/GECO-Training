package com.springday8.spring.controller;

import com.springday8.spring.model.UserModel;
import com.springday8.spring.repo.UserRepo;
import com.springday8.spring.request.UserRequest;
import com.springday8.spring.response.UserResponse;
import com.springday8.spring.services.UserService;
import org.apache.commons.io.IOUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.http.HttpServletRequest;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.InputStream;
import java.util.ArrayList;
import java.util.Optional;

@RestController
@RequestMapping("user")
public class UserController {
    String fileUploadPath = "./src/main/resources/fileUpload/";

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
//        System.out.println(userRequest);
        try{
            UserModel user = userService.loginValid(userRequest.getEmail(), userRequest.getPassword());
            return ResponseEntity.ok(user);
        } catch (Exception e) {
            userResponse.setMessage(e.getMessage());
            return ResponseEntity.badRequest().body(userResponse);
        }
    }

    @PostMapping("/token")
    public ResponseEntity<?> checkToken(@RequestHeader String token){
        try{
            return ResponseEntity.ok(token);
        }catch (Exception e){
            UserResponse userResponse = new UserResponse();
            userResponse.setMessage(e.getMessage());
            return ResponseEntity.badRequest().body(userResponse);
        }
    }

    @PostMapping("/logout/{userid}")
    public ResponseEntity<?> logout(@PathVariable Integer userid){
        UserResponse userResponse = new UserResponse();
        try{
            userService.logout(userid);
            userResponse.setMessage("Logout Successful");
            return ResponseEntity.ok(userResponse);
        } catch (Exception e) {
            userResponse.setMessage(e.getMessage());
            return ResponseEntity.badRequest().body(userResponse);
        }
    }

    @PostMapping(value = "imageupload")
    public ResponseEntity<?> imageUpload(HttpServletRequest request, @RequestParam MultipartFile file) throws Exception{
        UserResponse userResponse = new UserResponse();
        String fileName = file.getOriginalFilename();
        userResponse.setMessage("Image Uploaded Successfully to :"+fileUploadPath+fileName);
        userResponse.setImage(fileName);
        FileOutputStream fileOut = new FileOutputStream(fileUploadPath+fileName);
        StringBuilder sb = new StringBuilder(fileUploadPath + fileName);
        Integer id = Integer.valueOf(request.getHeader("id"));
        userRepo.updateProfilePic(sb.toString(), id);
        return ResponseEntity.ok(userResponse);
    }

    @GetMapping(
            value = "viewimage/{filename}",
            produces = MediaType.APPLICATION_OCTET_STREAM_VALUE
    )
    public byte[] viewImage(@PathVariable String filename)throws Exception{
//        FileInputStream inputStream = new FileInputStream(fileUploadPath+filename);
        InputStream in = getClass().getResourceAsStream(fileUploadPath+filename);
        assert in != null;
        return IOUtils.toByteArray(in);
    }


}
