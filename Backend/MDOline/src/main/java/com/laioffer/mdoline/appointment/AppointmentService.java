package com.laioffer.mdoline.appointment;

import com.laioffer.mdoline.db.AppointmentRepository;
import com.laioffer.mdoline.db.entity.AppointmentEntity;
import com.laioffer.mdoline.db.entity.UserEntity;
import com.laioffer.mdoline.model.AppointmentRequestBody;
import com.laioffer.mdoline.model.UserRole;
import com.laioffer.mdoline.user.DoctorService;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;


@Service
public class AppointmentService {
    AppointmentRepository appointmentRepository;
    DoctorService doctorService;

    public AppointmentService(AppointmentRepository appointmentRepository, DoctorService doctorService) {
        this.appointmentRepository = appointmentRepository;
        this.doctorService = doctorService;
    }
    public void createAppointment(AppointmentRequestBody body) {

        //call doctorService to update isOccupied field of the availabletime record with
        // the specific availabletimeId to true
        doctorService.setCurrentCertainAvailableTime(body.appointmentDate(), body.doctorId(), true);
        AppointmentEntity appointment =
                new AppointmentEntity(null, body.patientId(), body.doctorId(),
                        body.appointmentDate(), body.description(), body.isOngoing());
        appointmentRepository.save(appointment);
    }

    public void cancelAppointment(String appointmentDate, Long doctorId) {
        //call doctorService to update isOccupied field of the availabletime record with
        // the specific availabletimeId to false
        doctorService.setCurrentCertainAvailableTime(appointmentDate, doctorId, false);
        appointmentRepository.delete(appointmentDate, doctorId);
    }
    @Transactional
    public void updateIsOngoing(String appointmentDate, Long doctorId) {
        Boolean isOnGoing = false;
        appointmentRepository.updateIsOngoingByAppointmentDateAndDoctorId(appointmentDate, doctorId, isOnGoing);

        //call doctor service to delete the availabletime record with the specific availabletimeId
        doctorService.deleteCertainAvailableTime(appointmentDate, doctorId);
    }

    public List<AppointmentEntity> getAppointments(UserEntity user) {
        Enum role = user.role();
        Long userId = user.userId();
        if (role == UserRole.DOCTOR) {
            return appointmentRepository.findAllByDoctorId(userId);
        }
        if (role == UserRole.PATIENT) {
            return appointmentRepository.findAllByPatientId(userId);
        }
        return null;
    }

}
