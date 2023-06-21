package com.laioffer.mdoline.user;

import com.laioffer.mdoline.db.entity.PatientEntity;
import com.laioffer.mdoline.model.RegisterDoctorBody;
import com.laioffer.mdoline.model.RegisterPatientBody;
import com.laioffer.mdoline.model.RegisterUserCredentialBody;
import com.laioffer.mdoline.model.UserRole;
import org.apache.catalina.User;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.security.core.annotation.AuthenticationPrincipal;

@RestController
public class PatientController {
    private final UserService<PatientEntity, RegisterPatientBody> patientService;
    public PatientController(PatientService patientService) {
        this.patientService = patientService;
    }

    /**
     * Register a patient
     * @param body  a RegisterBody object contains all the information of a patient
     */
    @PostMapping("/register-patient")
    @ResponseStatus(value = HttpStatus.OK)
    public void registerPatient(@RequestBody RegisterUserCredentialBody credentialBody) {
        patientService.register(credentialBody.username(), credentialBody.password(), UserRole.PATIENT);
    }

    /**
     * Set doctor profile
     * @param user a user object contains the information of a doctor in order to locate the doctor in the database
     * @param body a RegisterDoctorBody object contains all the information of a doctor
     */
    @PostMapping("set-patient-profile")
    @ResponseStatus(value = HttpStatus.OK)
    public void setDoctorProfile(@AuthenticationPrincipal User user, @RequestBody RegisterPatientBody body){
        patientService.createUserProfile(user.getUsername(), body);
    }

    /**
     * Get patient profile
     * @param user  a user object contains the information of a patient in order to locate the patient in the database
     * @return PatientEntity a PatientEntity object contains all the information of a patient
     */

    @GetMapping("/get-patient-profile")
    public PatientEntity getPatientProfile(@AuthenticationPrincipal User user){
        return patientService.getProfileByUsername(user.getUsername());
    }
    /**
     * Update patient profile
     * @param user a user object contains the information of a patient in order to locate the patient in the database
     * @param body a RegisterPatientBody object contains all the information of a patient
     */

    @PutMapping("/update-patient-profile")
    @ResponseStatus(value = HttpStatus.OK)
    public void updatePatientProfile(@AuthenticationPrincipal User user, @RequestBody RegisterPatientBody body){
        patientService.updateProfile(user.getUsername(), body);
    }

    /**
     * Delete patient profile
     * @param user a user object contains the information of a patient in order to locate the patient in the database
     */
    @DeleteMapping("/delete-patient-profile")
    @ResponseStatus(value = HttpStatus.OK)
    public void deletePatientProfile(@AuthenticationPrincipal User user){
    }
}
