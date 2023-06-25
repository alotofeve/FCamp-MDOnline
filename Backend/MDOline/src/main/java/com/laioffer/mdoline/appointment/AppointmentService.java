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
    private final AppointmentRepository appointmentRepository;
    private final UserRepository userRepository;
    private final AvailableTimeService availableTimeService;

    public AppointmentService(
            AppointmentRepository appointmentRepository,
            AvailableTimeService availableTimeService,
            UserRepository userRepository) {
        this.appointmentRepository = appointmentRepository;
        this.availableTimeService = availableTimeService;
        this.userRepository = userRepository;
    }
    public void createAppointment(Long userId, AppointmentRequestBody body) {
        availableTimeService.setCurrentCertainAvailableTime(
                body.appointmentDate(),
                body.appointmentTime(),
                body.doctorId(),
                true);
        AppointmentEntity appointment =
                new AppointmentEntity(
                        null,
                        userId,
                        body.doctorId(),
                        body.appointmentDate(),
                        body.appointmentTime(),
                        body.description(),
                        body.isOngoing());
        appointmentRepository.save(appointment);
    }

    public void cancelAppointment(Long doctorId, String appointmentDate, String appointmentTime) {
        availableTimeService.
                setCurrentCertainAvailableTime(
                        appointmentDate, appointmentTime, doctorId, false);
        appointmentRepository.delete(appointmentDate, appointmentTime, doctorId);
    }
    @Transactional
    public void updateIsOngoing(Long doctorId, String appointmentDate, String appointmentTime) {
        Boolean isOnGoing = false;
        appointmentRepository.
                updateIsOngoingByAppointmentDateAndDoctorId(
                        appointmentDate, appointmentTime, doctorId, isOnGoing);
        availableTimeService.
                deleteCertainAvailableTime(doctorId, appointmentDate, appointmentTime);
    }

    public List<AppointmentEntity> getAppointments(User user) {
        String username = user.getUsername();
        //System.out.println("USERNAME:---" + user.getUsername());
        UserRole role = userRepository.findRoleByUsername(username);
        Long userId = userRepository.findUserIdByUsername(username);

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
