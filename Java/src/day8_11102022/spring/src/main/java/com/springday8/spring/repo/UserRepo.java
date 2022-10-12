package com.springday8.spring.repo;

import com.springday8.spring.model.UserModel;
import org.apache.catalina.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepo extends JpaRepository<UserModel, Integer> {
    @Query("Select user from UserModel user where email = ?1")
    Optional<UserModel> findUserByEmail(String email);

    @Query("Select user from UserModel user where email = ?1 and password = ?2")
    Optional<UserModel> findUserByEmailAndPassword(String email, String password);



}
