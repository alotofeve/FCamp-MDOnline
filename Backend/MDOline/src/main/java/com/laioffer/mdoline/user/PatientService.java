package com.laioffer.mdoline.user;

import com.laioffer.mdoline.db.PatientRepository;
import com.laioffer.mdoline.db.UserRepository;
import com.laioffer.mdoline.db.entity.PatientEntity;
import com.laioffer.mdoline.model.RegisterPatientBody;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.provisioning.UserDetailsManager;
import org.springframework.stereotype.Service;

@Service
public class PatientService extends UserService<PatientEntity, RegisterPatientBody> {
    private final PatientRepository patientRepository;

    public PatientService(
            UserDetailsManager userDetailsManager,
            PasswordEncoder passwordEncoder,
            PatientRepository patientRepository,
            UserRepository userRepository) {
        super(userDetailsManager, passwordEncoder, userRepository);
        this.patientRepository = patientRepository;
    }

    public void createUserProfile(String username, RegisterPatientBody body) {
        PatientEntity newPatient = new PatientEntity(
                super.getUserId(username),
                body.firstName(),
                body.lastName(),
                body.gender(),
                body.dateOfBirth(),
                body.insurance(),
                body.email(),
                body.phone(),
                body.mailAddress(),
                body.payment()
        );
        patientRepository.save(newPatient);
    }

    public PatientEntity getProfileByUsername(String username) {
        return patientRepository.findByPatientsID(super.getUserId(username));
    }

    public  void updateProfile(String username, RegisterPatientBody body) {
        patientRepository.updatePatientProfile(
                body.firstName(),
                body.lastName(),
                body.gender(),
                body.dateOfBirth(),
                body.insurance(),
                body.email(),
                body.phone(),
                body.mailAddress(),
                body.payment(),
                super.getUserId(username)
        );
    }

    public void deleteProfile(String username) {
        patientRepository.deleteByPatientsID(super.getUserId(username));
    }
}

