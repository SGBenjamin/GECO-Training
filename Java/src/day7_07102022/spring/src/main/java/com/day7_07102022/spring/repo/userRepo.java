package com.day7_07102022.spring.repo;

import com.day7_07102022.spring.model.UserModel;
import org.springframework.data.jpa.repository.JpaRepository;

public interface userRepo extends JpaRepository<UserModel, Integer> {


}
