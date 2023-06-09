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
//    @Query("SELECT * FROM doctors WHERE first_name = :firstName")
    List<DoctorEntity> findDoctorEntitiesByFirstName(String firstName);
//    @Query("SELECT * FROM doctors WHERE last_name = :lastName")
    List<DoctorEntity> findDoctorEntitiesByLastName(String lastName);
    List<DoctorEntity> findDoctorEntitiesByFirstNameAndLastName(String firstName, String lastName);
    @Query("SELECT * FROM doctors WHERE spec = :spec")
    List<DoctorEntity> findBySpec(String spec);

    @Query("SELECT DISTINCT spec FROM doctors")
    List<String> findAllSpecs();

    DoctorEntity searchDoctorEntityByDoctorId(Long id);
    @Query("SELECT * FROM doctors WHERE (CASE WHEN :firstname is not null THEN first_name = :firstname ELSE 1 END)AND(CASE WHEN :lastname is not null THEN last_name = :lastname ELSE 1 END)AND(CASE WHEN :spec is not null THEN spec = :spec ELSE 1 END)")
//    @Query("SELECT * FROM doctors WHERE IF(:firstname)")
    List<DoctorEntity> searchDoctor(String firstname, String lastname, String spec);
}


