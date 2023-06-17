package com.laioffer.mdoline.db;

import com.laioffer.mdoline.db.entity.DoctorEntity;
import org.springframework.data.repository.ListCrudRepository;

public interface DoctorRepository extends ListCrudRepository<DoctorEntity, Long> {

    public DoctorEntity findByUsername(String username);
}
