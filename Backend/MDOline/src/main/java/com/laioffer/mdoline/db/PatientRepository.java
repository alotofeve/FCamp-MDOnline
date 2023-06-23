package com.laioffer.mdoline.db;

import com.laioffer.mdoline.db.entity.PatientEntity;
import org.springframework.data.jdbc.repository.query.Modifying;
import org.springframework.data.jdbc.repository.query.Query;
import org.springframework.data.repository.ListCrudRepository;

public interface PatientRepository extends ListCrudRepository<PatientEntity, Long> {
    PatientEntity findByPatientId(Long Id);

    @Modifying
    @Query("UPDATE patients " +
            "SET first_name = :firstName, " +
            "last_name = :lastName, " +
            "insurance = :insurance, " +
            "gender = :gender, " +
            "date_of_birth = :dateOfBirth, " +
            "email = :email, " +
            "phone = :phone, " +
            "mail_address = :mailAddress, " +
            "payment = :payment " +
            "WHERE patient_ID = :patientId")
    void updatePatientProfile(
            String firstName,
            String lastName,
            String gender,
            String dateOfBirth,
            boolean insurance,
            String email,
            String phone,
            String mailAddress,
            String payment,
            Long patientId
    );

    @Modifying
    @Query("DELETE FROM patients WHERE patient_ID = :patientId")
    void deleteByPatientsID(Long patientId);
}
