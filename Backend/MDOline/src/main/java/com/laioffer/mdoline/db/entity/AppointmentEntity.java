package com.laioffer.mdoline.db.entity;

import org.springframework.data.annotation.Id;
import org.springframework.data.relational.core.mapping.Table;

@Table("appointments")
public record AppointmentEntity(
        @Id Long appointmentId,
        Long patientId,
        Long doctorId,
        String appointmentDate,
        String description,
        Boolean isOngoing
) {
) {
}
