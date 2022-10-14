package com.springday8.spring.model;

import lombok.*;
import net.minidev.json.annotate.JsonIgnore;

import javax.persistence.*;


@Entity
@Table(name="usertest")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class UserModel {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    int id;
    @Column(name="name")
    String username;

    @Column(name="address")
    String address;

    @Column(name="email")
    String email;

    @JsonIgnore
    @Column(name="password")
    String password;

    @Column(name="mobile")
    String mobileNum;

    @Column(name="token")
    String token;

    @Column(name="profilepic")
    String profilePic;

    public UserModel(int id, String username, String address, String email) {
        this.id = id;
        this.username = username;
        this.address = address;
        this.email = email;
    }

    public UserModel(String email, String password) {
        this.email = email;
        this.password = password;
    }
}
