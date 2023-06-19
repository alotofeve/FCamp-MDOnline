package com.laioffer.mdoline.user;

import com.laioffer.mdoline.db.entity.DoctorEntity;
import com.laioffer.mdoline.db.entity.PatientEntity;
import com.laioffer.mdoline.model.RegisterDoctorBody;
import com.laioffer.mdoline.model.RegisterPatientBody;
import com.laioffer.mdoline.model.RegisterUserCredentialBody;
import com.laioffer.mdoline.model.UserRole;
import org.apache.catalina.User;
import org.springframework.http.HttpStatus;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * This class is a controller class for doctor
 * It provide methods to CRUD doctor's profile
 */
@RestController
public class DoctorController {

    private final UserService<DoctorEntity, RegisterDoctorBody> doctorService;

    public DoctorController(DoctorService doctorService) {
        this.doctorService = doctorService;
    }

    /**
     * Register a doctor
     * @param body  a RegisterBody object contains all the information of a doctor
     *
     */
    @PostMapping("/registerDoctor")
    @ResponseStatus(value = HttpStatus.OK)
    public void registerDoctor(@RequestBody RegisterUserCredentialBody credentialBody, @RequestBody RegisterDoctorBody doctorBody) {
        doctorService.register(credentialBody.username(), credentialBody.password(), UserRole.DOCTOR);
        doctorService.createUserProfile(credentialBody.username(), doctorBody);
    }

    /**
     *  Update doctor profile
     * @param user a user object contains the information of a doctor in order to locate the doctor in the database
     *
     */
    @GetMapping("/getDoctorProfile")
    public DoctorEntity getDoctorProfile(@AuthenticationPrincipal User user){
        return doctorService.getProfileByUsername(user.getUsername());
    }

    /**
     * Update doctor profile
     * @param user a user object contains the information of a doctor in order to locate the doctor in the database
     * @param body a RegisterDoctorBody object contains all the information of a doctor
     */
    @PutMapping("/updateDoctorProfile")
    @ResponseStatus(value = HttpStatus.OK)
    public void updateDoctorProfile(@AuthenticationPrincipal User user, @RequestBody RegisterDoctorBody body){
        doctorService.updateProfile(user.getUsername(), body);
    }

    /**
     * Delete doctor profile
     * @param user a user object contains the information of a doctor in order to locate the doctor in the database
     */
    @DeleteMapping("/deleteDoctorProfile")
    @ResponseStatus(value = HttpStatus.OK)
    public void deleteDoctorProfile(@AuthenticationPrincipal User user){
    }

    /**
     * add doctor's available times into database
     * @param user a user object contains the information of a doctor in order to locate the doctor in the database
     * @param availableTimes a list of string, each string represents a time slot
     */
    @PostMapping("/setAvailableTimes")
    @ResponseStatus(value = HttpStatus.OK)
    public void setAvailableTimes(@AuthenticationPrincipal User user, @RequestBody List<String> availableTimes){
    }

    /**
     * get all available times of a doctor
     * @param user a user object contains the information of a doctor in order to locate the doctor in the database
     * @return a list of string, each string represents a time slot
     */
    @GetMapping("/getAllAvailableTimes")
    public List<String> getAllAvailableTimes(@AuthenticationPrincipal User user){
        return null;
    }

    /**
     * set a certain available time of a doctor to occupied after the appointment is created
     * @param user a user object contains the information of a doctor in order to locate the doctor in the database
     * @param availableTimeID the id of the available time
     * @param isAvailable a boolean value indicates whether the time slot is occupied or not
     */
    @PutMapping("/updateCertainAvailableTime")
    @ResponseStatus(value = HttpStatus.OK)
    public void updateCertainAvailableTime(@AuthenticationPrincipal User user, @RequestParam("available_time_id") String availableTimeID, @RequestParam("is_available") boolean isAvailable){
    }




}
