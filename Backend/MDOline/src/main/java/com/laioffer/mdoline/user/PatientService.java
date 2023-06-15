package com.laioffer.mdoline.user;

import com.laioffer.mdoline.db.PatientRepository;
import com.laioffer.mdoline.db.entity.PatientEntity;
import com.laioffer.mdoline.model.RegisterPatientBody;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.provisioning.UserDetailsManager;
import org.springframework.stereotype.Service;

//@Service
//public class PatientService extends UserService<PatientEntity, RegisterPatientBody> {
//    private final PatientRepository patientRepository;
//
//    public PatientService(UserDetailsManager userDetailsManager, PasswordEncoder passwordEncoder, PatientRepository patientRepository) {
//        super(userDetailsManager, passwordEncoder);
//        this.patientRepository = patientRepository;
//    }
//
//    @Override
//    public void register(RegisterPatientBody body) {
//        UserDetails user = User.builder()
//                .username(body.username())
//                .password(passwordEncoder.encode(body.password()))
//                .roles("PATIENT")
//                .build();
//        userDetailsManager.createUser(user);
//        PatientRepository.
//    }
//
//
//
//}
