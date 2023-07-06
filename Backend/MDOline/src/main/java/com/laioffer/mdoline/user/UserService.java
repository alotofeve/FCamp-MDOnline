package com.laioffer.mdoline.user;

import com.laioffer.mdoline.db.UserRepository;
import com.laioffer.mdoline.db.entity.UserEntity;
import com.laioffer.mdoline.model.UserRole;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.provisioning.UserDetailsManager;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public abstract class UserService<T, V> {
    final UserDetailsManager userDetailsManager;
    final PasswordEncoder passwordEncoder;
    private final UserRepository userRepository;

    public UserService(UserDetailsManager userDetailsManager, PasswordEncoder passwordEncoder, UserRepository userRepository) {
        this.userDetailsManager = userDetailsManager;
        this.passwordEncoder = passwordEncoder;
        this.userRepository = userRepository;
    }

    public void register(String username, String password, UserRole role) {
        UserDetails user = User.builder()
                .username(username)
                .password(passwordEncoder.encode(password))
                .roles("USER")
                .build();
        userDetailsManager.createUser(user);
        userRepository.updateRoleByUsername(username, role);
    }

    public Long getUserId(String username) {
        return userRepository.findUserIdByUsername(username);
    }

    public abstract void createUserProfile(String username, V v);

    public abstract T getProfileByUsername(String username);

    public abstract void updateProfile(String username, V v);

    public abstract void deleteProfile(String username);

}