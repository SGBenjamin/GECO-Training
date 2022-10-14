package com.springday8.spring.repo;

import com.springday8.spring.model.UserModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;
import java.util.Optional;

@Repository
public interface UserRepo extends JpaRepository<UserModel, Integer> {
    @Query("Select user from UserModel user where email = ?1")
    Optional<UserModel> findUserByEmail(String email);

    @Query("Select user from UserModel user where email = ?1 and password = ?2")
    Optional<UserModel> findUserByEmailAndPassword(String email, String password);

    @Transactional
    @Modifying
    @Query("Update UserModel set token = ?1 where id = ?2")
    Integer updateTokenByUserId(String token, Integer id);

    @Transactional
    @Modifying
    @Query("Update UserModel set profilepic = ?1 where id = ?2")
    Integer updateProfilePic(String profilepic, Integer id);



}
