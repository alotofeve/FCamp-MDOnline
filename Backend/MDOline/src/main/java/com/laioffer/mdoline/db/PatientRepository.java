package com.laioffer.mdoline.db;

import com.laioffer.mdoline.db.entity.PatientEntity;
import org.springframework.data.repository.ListCrudRepository;

public interface PatientRepository extends ListCrudRepository<PatientEntity, Long> {
    PatientEntity findByUsername(String username);
}

