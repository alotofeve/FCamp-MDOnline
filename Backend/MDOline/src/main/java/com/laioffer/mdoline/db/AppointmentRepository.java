package com.laioffer.mdoline.db;

import com.laioffer.mdoline.db.entity.AppointmentEntity;
import org.springframework.data.jdbc.repository.query.Modifying;
import org.springframework.data.jdbc.repository.query.Query;
import org.springframework.data.repository.ListCrudRepository;

public interface
AppointmentRepository extends ListCrudRepository<AppointmentEntity, Long> {
    AppointmentEntity findAllByPatientId(Long patientId);

    AppointmentEntity findByPatientIdAndAppointmentId(Long patientId, Long appointmentId);

    @Modifying
    @Query("DELETE FROM appointments WHERE appointment_id= :appointmentId")
    void delete(Long appointmentId);

    @Modifying
    @Query("UPDATE appointments SET is_ongoing = :isOngoing WHERE appointment_ID =:appointmentId")
    void updateIsOngoingByAppointmentId(Long appointmentId, Boolean isOngoing);

}
