package com.springday8.spring.services;

import com.springday8.spring.model.UserModel;
import com.springday8.spring.repo.UserRepo;
import com.springday8.spring.request.UserRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.Resource;
import org.springframework.core.io.UrlResource;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.net.MalformedURLException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.time.LocalDateTime;
import java.util.Base64;
import java.util.Optional;
import java.util.Random;

@Service
public class UserService {

    Path root = Paths.get("./src/main/resources/fileUpload/");

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

    public UserModel loginValid(String email, String password) throws Exception {
        UserModel user = userRepo.findUserByEmailAndPassword(email, password).orElseThrow(()->new Exception(("User not found")));
        String token = createToken(user.getEmail());
        updateToken(token, user.getId());
        user.setToken(token);
        return user;
    }

    public boolean logout(int id)throws Exception{
        updateToken("", id);
        return true;
    }

    private void updateToken(String token, Integer id){
        userRepo.updateTokenByUserId(token, id);
    }

    public String createToken(String email){
        String encodedEmail = Base64.getEncoder().encode(email.getBytes()).toString();
        LocalDateTime time = LocalDateTime.now();
        Random rand = new Random(System.currentTimeMillis());
        return rand.nextInt(50000)+encodedEmail+ rand.nextInt(35000);
    }

    public UserModel getUser(Integer id)throws Exception{
        Optional<UserModel> user = userRepo.findById(id);
        if(user.isPresent()){
            return user.get();
        }else{
            throw new Exception("User not found");
        }
    }

    public boolean tokenValid(String token, Integer id)throws Exception{
        UserModel user = getUser(id);
        if(user.getToken().equals(token)){
            return true;
        }else{
            throw new Exception("Token Invalid");
        }
    }

    public void saveImage(MultipartFile file) throws IOException {
        try{
            Files.copy(file.getInputStream(),this.root.resolve(file.getOriginalFilename()));
        }catch (Exception e){
            throw new RuntimeException("Could not store file. Error: "+e.getMessage());
        }
    }
    public Resource load(Integer userid) throws Exception {
        UserModel user = extractUser(userid);
        try {
            Path file = root.resolve(user.getProfilePic());
            Resource resource = new UrlResource(file.toUri());

            if (resource.exists() || resource.isReadable()) {
                return resource;
            } else {
                throw new RuntimeException("Could not read the file!");
            }
        } catch (MalformedURLException e) {
            throw new RuntimeException("Error: " + e.getMessage());
        }
    }


}
