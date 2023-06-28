package com.laioffer.mdoline.db;

import com.laioffer.mdoline.db.entity.AppointmentEntity;
import org.springframework.data.jdbc.repository.query.Modifying;
import org.springframework.data.jdbc.repository.query.Query;
import org.springframework.data.repository.ListCrudRepository;

import java.util.List;

public interface
AppointmentRepository extends ListCrudRepository<AppointmentEntity, Long> {
    List<AppointmentEntity> findAllByPatientId(Long patientId);

    List<AppointmentEntity> findAllByDoctorId(Long doctorId);

    AppointmentEntity findByPatientIdAndAppointmentId(Long patientId, Long appointmentId);

    @Modifying
    @Query("DELETE FROM " +
            "appointments WHERE " +
            "appointment_date = :appointmentDate AND " +
            "appointment_time = :appointmentTime AND " +
            " doctor_ID = :doctorId")
    void delete(String appointmentDate, String availableTime, Long doctorId);

    @Modifying
    @Query("UPDATE appointments SET " +
            "is_ongoing = :isOngoing WHERE " +
            "appointment_date = :appointmentDate AND " +
            "appointment_time = :appointmentTime AND " +
            "doctor_ID = :doctorId")
    void updateIsOngoingByAppointmentDateAndDoctorId(
            String appointmentDate,
            String appointmentTime,
            Long doctorId,
            Boolean isOngoing);

}
