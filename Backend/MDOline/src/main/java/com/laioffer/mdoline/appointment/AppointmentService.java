//package com.laioffer.mdoline.appointment;
//
//import com.laioffer.mdoline.db.AppointmentRepository;
//import com.laioffer.mdoline.db.entity.AppointmentEntity;
//import org.springframework.security.core.GrantedAuthority;
//import org.springframework.security.core.userdetails.User;
//import org.springframework.stereotype.Service;
//import org.springframework.transaction.annotation.Transactional;
//
//import java.util.List;
//import java.util.Set;
//
//@Service
//public class AppointmentService {
//    AppointmentRepository appointmentRepository;
//
//    public AppointmentService(AppointmentRepository appointmentRepository) {
//        this.appointmentRepository = appointmentRepository;
//    }
//    public void createAppointment(AppointmentEntity appointment) {
//        Long availableTimeId = appointment.availableTimeId();
//        //call doctorService to update isOccupied field of the availabletime record with
//        // the specific availabletimeId to true
//        appointmentRepository.save(appointment);
//    }
//
//    public void cancelAppointmentById(Long id) {
//        AppointmentEntity appointment = appointmentRepository.findById(id).get();
//        Long availableTimeId = appointment.availableTimeId();
//        //call doctorService to update isOccupied field of the availabletime record with
//        // the specific availabletimeId to false
//        appointmentRepository.delete(id);
//    }
//    @Transactional
//    public void updateIsOngoingByAppointmentId(Long id) {
//        Boolean isOnGoing = false;
//        appointmentRepository.updateIsOngoingByAppointmentId(id, isOnGoing);
//        AppointmentEntity appointment = appointmentRepository.findById(id).get();
//        Long availableTimeId = appointment.availableTimeId();
//        //call doctor service to delete the availabletime record with the specific availabletimeId
//    }
//
////    public List<AppointmentEntity> getAppointments(User user) {
////        //String role = user.role();
////        //Long id = user.identityId();
////        String doctor = "doctor";
////        String patient = "patient";
////        /*  if (role.equals(doctor)) {
////            return appointmentRepository.findAllByDoctorId(id);
////        }
////        if (role.equals(patient)) {
////            return appointmentRepository.findAllByPatientId(id);
////        } */
////        return null;
////    }
//
//}
