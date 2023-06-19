package com.laioffer.mdoline.db;

import com.laioffer.mdoline.db.entity.DoctorEntity;
import org.springframework.data.jdbc.repository.query.Modifying;
import org.springframework.data.jdbc.repository.query.Query;
import org.springframework.data.repository.ListCrudRepository;

public interface DoctorRepository extends ListCrudRepository<DoctorEntity, Long> {

    public DoctorEntity findByDoctorId(Long Id);

    @Modifying
    @Query("UPDATE doctors " +
            "SET first_name = :firstName, " +
            "last_name = :lastName, " +
            "gender = :gender, " +
            "date_of_birth = :dateOfBirth, " +
            "email = :email, " +
            "phone = :phone, " +
            "spec = :spec, " +
            "mail_address = :mailAddress, " +
            "license = :license " +
            "WHERE doctor_id = :doctorId")
    public void updateDoctorProfile(
            String firstName,
            String lastName,
            String gender,
            String dateOfBirth,
            String email,
            String phone,
            String spec,
            String mailAddress,
            String license,
            Long doctorId
    );
}


