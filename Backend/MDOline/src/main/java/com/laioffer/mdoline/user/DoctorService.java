package com.laioffer.mdoline.user;

import com.laioffer.mdoline.db.AvailableTimeRepository;
import com.laioffer.mdoline.db.DoctorRepository;
import com.laioffer.mdoline.db.UserRepository;
import com.laioffer.mdoline.db.entity.AvailableTimeEntity;
import com.laioffer.mdoline.db.entity.DoctorEntity;
import com.laioffer.mdoline.model.RegisterDoctorBody;
import com.laioffer.mdoline.model.UserRole;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.provisioning.UserDetailsManager;
import org.springframework.stereotype.Service;

import java.util.Collections;

@Service
public class DoctorService extends UserService<DoctorEntity, RegisterDoctorBody> {
    private final AvailableTimeRepository availableTimeRepository;
    private final DoctorRepository doctorRepository;

    public DoctorService(
            UserDetailsManager userDetailsManager,
            PasswordEncoder passwordEncoder,
            DoctorRepository doctorRepository,
            UserRepository userRepository,
            AvailableTimeRepository availableTimeRepository) {
        super(userDetailsManager, passwordEncoder, userRepository);
        this.doctorRepository = doctorRepository;
        this.availableTimeRepository = availableTimeRepository;
    }

    @Override
    void createUserProfile(String username, RegisterDoctorBody body) {
        DoctorEntity newDoctor = new DoctorEntity(
                super.getUserId(username),
                body.firstName(),
                body.lastName(),
                body.gender(),
                body.dateOfBirth(),
                body.email(),
                body.phone(),
                body.spec(),
                body.mailAddress(),
                body.license()
        );
        doctorRepository.save(newDoctor);
    }

    @Override
    public DoctorEntity getProfileByUsername(String username) {
        return doctorRepository.findByDoctorId(super.getUserId(username));
    }

    @Override
    public void updateProfile(String username, RegisterDoctorBody body) {
        doctorRepository.updateDoctorProfile(
                body.firstName(),
                body.lastName(),
                body.gender(),
                body.dateOfBirth(),
                body.email(),
                body.phone(),
                body.spec(),
                body.mailAddress(),
                body.license(),
                super.getUserId(username)
        );

    }

    @Override
    public void deleteProfile(String username) {

    }

    public void setCurrentCertainAvailableTime(String availableTime, Long doctorID, Boolean isOccupied) {
        AvailableTimeEntity availableTimeEntity = availableTimeRepository.findByDoctorIdAndTime(doctorID, availableTime);
        if (availableTimeEntity != null) {
            availableTimeRepository.setIsOccupiedByDoctorIdAndTime(doctorID, availableTime, isOccupied);
        }
    }

    public void deleteCertainAvailableTime(String availableTime, Long doctorID) {
        AvailableTimeEntity availableTimeEntity = availableTimeRepository.findByDoctorIdAndTime(doctorID, availableTime);
        if (availableTimeEntity != null) {
            availableTimeRepository.delete(doctorID, availableTime);
        }
    }
}
