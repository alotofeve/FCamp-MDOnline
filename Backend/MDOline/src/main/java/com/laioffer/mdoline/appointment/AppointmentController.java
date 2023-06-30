package com.laioffer.mdoline.appointment;

import com.laioffer.mdoline.db.entity.AppointmentEntity;
import com.laioffer.mdoline.db.entity.DoctorEntity;
import com.laioffer.mdoline.db.entity.PatientEntity;
import com.laioffer.mdoline.model.AppointmentRequestBody;
import com.laioffer.mdoline.model.RegisterDoctorBody;
import com.laioffer.mdoline.model.RegisterPatientBody;
import com.laioffer.mdoline.user.DoctorService;
import com.laioffer.mdoline.user.PatientService;
import com.laioffer.mdoline.user.UserService;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.userdetails.User;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/appointment")
public class AppointmentController {
    private final AppointmentService appointmentService;
    private final UserService<PatientEntity, RegisterPatientBody> patientService;

    public AppointmentController(
            AppointmentService appointmentService,
            PatientService patientService) {
        this.appointmentService = appointmentService;
        this.patientService = patientService;
    }

    @PostMapping
    public void createAppointment(
            @AuthenticationPrincipal User user,
            @RequestBody AppointmentRequestBody body) {
        appointmentService.createAppointment(patientService.getUserId(user.getUsername()), body);
    }

    @DeleteMapping
    public void cancelAppointment(
         //   @AuthenticationPrincipal User user,
            @RequestBody AppointmentRequestBody body) {
        appointmentService.
                cancelAppointment(
                        //patientService.getUserId(user.getUsername()),
                        body.doctorId(),
                        body.appointmentDate(),
                        body.appointmentTime());
    }

    @PutMapping
    public void updateAppointment(
        //    @AuthenticationPrincipal User user,
            @RequestBody AppointmentRequestBody body) {
        appointmentService.
                updateIsOngoing(
                 //       patientService.getUserId(user.getUsername()),
                        body.doctorId(),
                        body.appointmentDate(),
                        body.appointmentTime());
    }

    @GetMapping
    public List<AppointmentEntity> getAppointments(@AuthenticationPrincipal User user) {
            return appointmentService.getAppointments(user);
    }
}
