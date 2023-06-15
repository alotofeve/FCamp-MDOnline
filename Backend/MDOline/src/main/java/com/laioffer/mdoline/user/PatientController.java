package com.laioffer.mdoline.user;

import com.laioffer.mdoline.db.entity.PatientEntity;
import com.laioffer.mdoline.model.RegisterPatientBody;
import org.apache.catalina.User;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.security.core.annotation.AuthenticationPrincipal;

@RestController
public class PatientController {

    /**
     * Register a patient
     * @param body  a RegisterBody object contains all the information of a patient
     */
    @PostMapping("/registerPatient")
    @ResponseStatus(value = HttpStatus.OK)
    public void registerPatient(@RequestBody RegisterPatientBody body) {

    }

    /**
     * Get patient profile
     * @param user  a user object contains the information of a patient in order to locate the patient in the database
     * @return PatientEntity a PatientEntity object contains all the information of a patient
     */
    @GetMapping("/getPatientProfile")
    PatientEntity getPatientProfile(@AuthenticationPrincipal User user){
        return null;
    }

    /**
     * Update patient profile
     * @param user a user object contains the information of a patient in order to locate the patient in the database
     * @param body a RegisterPatientBody object contains all the information of a patient
     */
    @PutMapping("/updatePatientProfile")
    @ResponseStatus(value = HttpStatus.OK)
    void updatePatientProfile(@AuthenticationPrincipal User user, @RequestBody RegisterPatientBody body){
    }

    /**
     * Delete patient profile
     * @param user a user object contains the information of a patient in order to locate the patient in the database
     */
    @DeleteMapping("/deletePatientProfile")
    @ResponseStatus(value = HttpStatus.OK)
    void deletePatientProfile(@AuthenticationPrincipal User user){
    }
}
