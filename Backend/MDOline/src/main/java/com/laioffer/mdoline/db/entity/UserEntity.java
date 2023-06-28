package com.laioffer.mdoline.db.entity;

import com.laioffer.mdoline.model.UserRole;
import org.springframework.data.annotation.Id;
import org.springframework.data.relational.core.mapping.Table;

@Table("Users")
public record UserEntity(
        @Id Long userId,
        String username,
        String password,
        UserRole role
) {
}
