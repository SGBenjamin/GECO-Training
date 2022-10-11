package com.springday8.spring.model;

import lombok.*;

import javax.persistence.*;


@Entity
@Table(name="users")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class UserModel {
    @Id
    @GeneratedValue
    int id;

    @Column(name="name")
    @NonNull
    String username;

    @Column(name="address")
    String address;

    @Column(name="email")
    @NonNull
    String email;

    @Column(name="password")
    @NonNull
    String password;

    public UserModel(int id, @NonNull String username, String address, @NonNull String email) {
        this.id = id;
        this.username = username;
        this.address = address;
        this.email = email;
    }

    public UserModel(@NonNull String email, @NonNull String password) {
        this.email = email;
        this.password = password;
    }
}
