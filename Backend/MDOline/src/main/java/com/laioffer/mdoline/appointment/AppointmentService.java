package com.laioffer.mdoline.appointment;

import com.laioffer.mdoline.availableTime.AvailableTimeService;
import com.laioffer.mdoline.db.AppointmentRepository;
import com.laioffer.mdoline.db.UserRepository;
import com.laioffer.mdoline.db.entity.AppointmentEntity;
import com.laioffer.mdoline.db.entity.AvailableTimeEntity;
import com.laioffer.mdoline.db.entity.UserEntity;
import com.laioffer.mdoline.model.AppointmentRequestBody;
import com.laioffer.mdoline.model.UserRole;
import com.laioffer.mdoline.user.DoctorService;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

import org.springframework.security.core.userdetails.User;
@Service
public class AppointmentService {
    AppointmentRepository appointmentRepository;

    UserRepository userRepository;

    AvailableTimeService availableTimeService;

    public AppointmentService(AppointmentRepository appointmentRepository,
                              AvailableTimeService availableTimeService,
                              UserRepository userRepository) {
        this.appointmentRepository = appointmentRepository;
        this.availableTimeService = availableTimeService;
        this.userRepository = userRepository;
    }
    public void createAppointment(AppointmentRequestBody body) {

        //call doctorService to update isOccupied field of the availabletime record with
        // the specific availabletimeId to true
        //availableTimeService.setCurrentCertainAvailableTime(body.appointmentDate(), body.doctorId(), true);
        AppointmentEntity appointment =
                new AppointmentEntity(null, body.patientId(), body.doctorId(),
                        body.appointmentDate(), body.description(), body.isOngoing());
        appointmentRepository.save(appointment);
    }

    public void cancelAppointment(String appointmentDate, Long doctorId) {
        //call doctorService to update isOccupied field of the availabletime record with
        // the specific availabletimeId to false
        //availableTimeService.setCurrentCertainAvailableTime(appointmentDate, doctorId, false);
        appointmentRepository.delete(appointmentDate, doctorId);
    }
    @Transactional
    public void updateIsOngoing(String appointmentDate, Long doctorId) {
        Boolean isOnGoing = false;
        appointmentRepository.updateIsOngoingByAppointmentDateAndDoctorId(appointmentDate, doctorId, isOnGoing);

        //call doctor service to delete the availabletime record with the specific availabletimeId
        //availableTimeService.deleteCertainAvailableTime(appointmentDate, doctorId);
    }

    public List<AppointmentEntity> getAppointments(User user) {
        String username = user.getUsername();
        //System.out.println("USERNAME:---" + user.getUsername());
        UserEntity entity = userRepository.findUserEntityByUsername(user.getUsername());
        //System.out.println("ENTITY USERNAME:---" + entity.username());
        UserRole role = entity.role();
        Long userId = userRepository.findUserIdByUsername(username);
        //role = UserRole.PATIENT;
        if (role == UserRole.DOCTOR) {
          //  System.out.println("AARIVE-----");
          //  System.out.println(userId);
            return appointmentRepository.findAllByDoctorId(userId);
        }
        if (role == UserRole.PATIENT) {
            return appointmentRepository.findAllByPatientId(userId);
        }
        return null;
    }

}
