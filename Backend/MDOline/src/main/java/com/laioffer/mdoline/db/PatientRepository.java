package com.laioffer.mdoline.db;

import com.laioffer.mdoline.db.entity.PatientEntity;
import org.springframework.data.jdbc.repository.query.Modifying;
import org.springframework.data.jdbc.repository.query.Query;
import org.springframework.data.repository.ListCrudRepository;

public interface PatientRepository extends ListCrudRepository<PatientEntity, Long> {
    PatientEntity findByUsername(String username);

//    @Modifying
//    @Query
//    void updateNameByUsername(){}

}

