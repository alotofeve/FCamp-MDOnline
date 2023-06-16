package com.laioffer.mdoline.appointment;

import com.laioffer.mdoline.db.entity.AppointmentEntity;
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
    public void createAppointment(@RequestBody AppointmentEntity appointment) {
        appointmentService.createAppointment(appointment);
    }

    @DeleteMapping("/appointment")
    public void cancelAppointment(@RequestParam("appointment_id") Long id) {
        appointmentService.cancelAppointmentById(id);
    }

    @PutMapping("/appointment")
    public void updateAppointment(@RequestParam("appointment_id") Long id) {
        appointmentService.updateIsOngoingByAppointmentId(id);
    }

    @GetMapping("/appointments")
    public List<AppointmentEntity> getAppointments(@AuthenticationPrincipal User user) {
        return appointmentService.getAppointments(user);
    }



}
