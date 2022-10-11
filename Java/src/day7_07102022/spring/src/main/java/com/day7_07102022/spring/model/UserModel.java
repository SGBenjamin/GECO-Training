package com.day7_07102022.spring.model;


import lombok.*;

import javax.persistence.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
@Entity
public class UserModel {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    int id;
    @Column(name="email")
    String email;
    @Column(name="password")
    String password;
    @Column(name="username")
    String username;
    @Column(name="address")
    String address;

    public UserModel(String email, String username, String address) {
        this.email = email;
        this.username = username;
        this.address = address;
    }

    public UserModel(String email, String password) {
        this.email = email;
        this.password = password;
    }


}
