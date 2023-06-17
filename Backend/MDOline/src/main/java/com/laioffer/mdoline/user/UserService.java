package com.laioffer.mdoline.user;

import com.laioffer.mdoline.model.UserRole;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.provisioning.UserDetailsManager;
import org.springframework.stereotype.Service;

@Service
public abstract class UserService<T, V> {
    final UserDetailsManager userDetailsManager;
    final PasswordEncoder passwordEncoder;

    public UserService(UserDetailsManager userDetailsManager, PasswordEncoder passwordEncoder) {
        this.userDetailsManager = userDetailsManager;
        this.passwordEncoder = passwordEncoder;
    }

    public abstract void register(V v);

    public abstract T getProfileByUsername(String username);

    public abstract void updateProfile(T t, V v);

    public abstract void deleteProfile(String username);

//    public void register(String username, String password, UserRole role) {
//        UserDetails user = User.builder()
//                .username(username)
//                .password(passwordEncoder.encode(password))
//                .roles("USER")
//                .build();
//        userDetailsManager.createUser(user);
//        userRepository.updateNameByUsername(username, firstName, lastName);
//    }
}