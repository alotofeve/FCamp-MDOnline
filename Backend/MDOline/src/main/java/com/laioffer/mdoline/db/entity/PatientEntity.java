package com.laioffer.mdoline.db.entity;

import org.springframework.data.annotation.Id;
import org.springframework.data.relational.core.mapping.Table;

@Table("patients")
public record PatientEntity(
        @Id Long id,
        Long patientID,
        String firstName,
        String lastName,
        String gender,
        String dateOfBirth,
        Boolean insurance,
        String email,
        String phone,
        String mailAddress,
        String payment
) {
}
