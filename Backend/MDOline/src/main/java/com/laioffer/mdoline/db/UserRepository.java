package com.laioffer.mdoline.db;

import com.laioffer.mdoline.db.entity.UserEntity;
import com.laioffer.mdoline.model.UserRole;
import org.springframework.data.jdbc.repository.query.Modifying;
import org.springframework.data.jdbc.repository.query.Query;
import org.springframework.data.repository.ListCrudRepository;

import java.util.List;

public interface UserRepository extends ListCrudRepository<UserEntity, Long> {
    @Modifying
    @Query("UPDATE users SET role := role WHERE username = :username")
    void updateRoleByUsername(String username, UserRole role);
    @Query("SELECT id FROM users WHERE username = :username")
    Long findUserIdByUsername(String username);
    @Query("SELECT * FROM users WHERE username = :username")
    UserEntity findUserEntityByUsername(String username);
}