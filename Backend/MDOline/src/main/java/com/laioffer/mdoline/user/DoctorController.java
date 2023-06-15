package com.laioffer.mdoline.user;

import com.laioffer.mdoline.db.entity.DoctorEntity;
import com.laioffer.mdoline.db.entity.PatientEntity;
import com.laioffer.mdoline.model.RegisterDoctorBody;
import com.laioffer.mdoline.model.RegisterPatientBody;
import org.apache.catalina.User;
import org.springframework.http.HttpStatus;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

@RestController
public class DoctorController {

    /**
     * Register a doctor
     * @param body  a RegisterBody object contains all the information of a doctor
     */
    @PostMapping("/registerDoctor")
    @ResponseStatus(value = HttpStatus.OK)
    public void registerPatient(@RequestBody RegisterDoctorBody body) {
    }

    /**
     *  Update doctor profile
     * @param user a user object contains the information of a doctor in order to locate the doctor in the database
     * @return
     */
    @GetMapping("/getDoctorProfile")
    DoctorEntity getDoctorProfile(@AuthenticationPrincipal User user){
        return null;
    }

    /**
     * Update doctor profile
     * @param user a user object contains the information of a doctor in order to locate the doctor in the database
     * @param body a RegisterDoctorBody object contains all the information of a doctor
     */
    @PutMapping("/updateDoctorProfile")
    @ResponseStatus(value = HttpStatus.OK)
    void updateDoctorProfile(@AuthenticationPrincipal User user, @RequestBody RegisterDoctorBody body){
    }

    /**
     * Delete doctor profile
     * @param user a user object contains the information of a doctor in order to locate the doctor in the database
     */
    @DeleteMapping("/deleteDoctorProfile")
    @ResponseStatus(value = HttpStatus.OK)
    void deleteDoctorProfile(@AuthenticationPrincipal User user){
    }






}
