package com.laioffer.mdoline.db;

import com.laioffer.mdoline.db.entity.DoctorEntity;
import org.springframework.data.jdbc.repository.query.Modifying;
import org.springframework.data.jdbc.repository.query.Query;
import org.springframework.data.repository.ListCrudRepository;

import javax.print.Doc;
import java.util.List;

public interface DoctorRepository extends ListCrudRepository<DoctorEntity, Long> {

    DoctorEntity findByDoctorId(Long Id);

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
    void updateDoctorProfile(
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

    @Modifying
    @Query("DELETE FROM doctors WHERE doctor_id = :doctorId")
    void deleteByDoctorId(Long doctorId);
    DoctorEntity findByLastNameAndFirstName(String lastName, String firstName);

    @Query("SELECT * FROM doctors WHERE spec = :spec")
    List<DoctorEntity> findBySpec(String spec);
}


