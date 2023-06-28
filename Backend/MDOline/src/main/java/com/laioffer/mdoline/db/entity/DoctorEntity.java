package com.laioffer.mdoline.db.entity;

import org.springframework.data.annotation.Id;
import org.springframework.data.relational.core.mapping.Table;

@Table("doctors")
public record DoctorEntity(
        @Id Long id,
        Long doctorId,
        String firstName,
        String lastName,
        String gender,
        String dateOfBirth,
        String email,
        String phone,
        String spec,
        String mailAddress,
        String license
) {
}
