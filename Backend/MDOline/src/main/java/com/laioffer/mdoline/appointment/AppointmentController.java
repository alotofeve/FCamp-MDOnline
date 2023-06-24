package com.laioffer.mdoline.appointment;

import com.laioffer.mdoline.db.entity.AppointmentEntity;

import com.laioffer.mdoline.model.AppointmentRequestBody;

import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.userdetails.User;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class AppointmentController {
    AppointmentService appointmentService;


    public AppointmentController(AppointmentService appointmentService) {
        this.appointmentService = appointmentService;

    }

    @PostMapping("/appointment")
    public void createAppointment(@RequestBody AppointmentRequestBody body) {
        appointmentService.createAppointment(body);
    }

    @DeleteMapping("/appointment")
    public void cancelAppointment(@RequestBody AppointmentRequestBody body) {
        appointmentService.cancelAppointment(body.appointmentDate(), body.doctorId());
    }

    @PutMapping("/appointment")
    public void updateAppointment(@RequestBody AppointmentRequestBody body) {
        appointmentService.updateIsOngoing(body.appointmentDate(), body.doctorId());
    }

    @GetMapping("/appointments")
    public List<AppointmentEntity> getAppointments(@AuthenticationPrincipal User user) {
            return appointmentService.getAppointments(user);

    }

}
