package com.laioffer.mdoline.model;

public record AppointmentRequestBody(
        Long doctorId,
        String appointmentDate,
        String appointmentTime,
        String description,
        Boolean isOngoing) {
}
