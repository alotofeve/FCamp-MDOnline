package com.laioffer.mdoline.model;

public record AppointmentRequestBody( Long patientId,
                                      Long doctorId,
                                      String appointmentDate,
                                      String description,
                                      Boolean isOngoing) {
}
