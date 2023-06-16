package com.laioffer.mdoline.user;

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
}