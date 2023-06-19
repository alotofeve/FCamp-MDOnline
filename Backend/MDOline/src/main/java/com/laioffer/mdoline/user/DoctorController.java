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
     * @param credentialBody  a RegisterUserCredentialBody object contains the username and password of a doctor
     *
     */
    @PostMapping("/registerDoctor")
    @ResponseStatus(value = HttpStatus.OK)
    public void registerDoctor(@RequestBody RegisterUserCredentialBody credentialBody) {
        doctorService.register(credentialBody.username(), credentialBody.password(), UserRole.DOCTOR);
    }

    /**
     * Set doctor profile
     * @param user a user object contains the information of a doctor in order to locate the doctor in the database
     * @param body a RegisterDoctorBody object contains all the information of a doctor
     */
    @PostMapping("setDoctorProfile")
    @ResponseStatus(value = HttpStatus.OK)
    public void setDoctorProfile(@AuthenticationPrincipal User user, @RequestBody RegisterDoctorBody body){
        doctorService.createUserProfile(user.getUsername(), body);
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
        doctorService.deleteProfile(user.getUsername());
    }
}
