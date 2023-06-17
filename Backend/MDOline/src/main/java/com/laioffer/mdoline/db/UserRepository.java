package com.laioffer.mdoline.db;

import com.laioffer.mdoline.db.entity.UserEntity;
import org.springframework.data.repository.ListCrudRepository;

public interface UserRepository extends ListCrudRepository<UserEntity, Long> {
}
