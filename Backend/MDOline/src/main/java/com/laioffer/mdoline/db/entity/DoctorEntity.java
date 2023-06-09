package com.laioffer.mdoline.db.entity;

import org.springframework.data.annotation.Id;
import org.springframework.data.relational.core.mapping.Table;

@Table("doctors")
public record DoctorEntity(
        @Id Long doctorId,
        String username,
        String password,
        String name,
        String gender,
        String dateOfBirth,
        String email,
        String phone,
        String spec,
        String mailAddress,
        String license,
        String availableTimes
) {
}
