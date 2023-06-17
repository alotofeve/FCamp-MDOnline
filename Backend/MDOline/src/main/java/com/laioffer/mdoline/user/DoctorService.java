package com.laioffer.mdoline.user;

import com.laioffer.mdoline.db.AvailableTimeRepository;
import com.laioffer.mdoline.db.DoctorRepository;
import com.laioffer.mdoline.db.entity.AvailableTimeEntity;
import com.laioffer.mdoline.db.entity.DoctorEntity;
import com.laioffer.mdoline.model.RegisterDoctorBody;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.provisioning.UserDetailsManager;
import org.springframework.stereotype.Service;

import java.util.Collections;

@Service
public class DoctorService extends UserService<DoctorEntity, RegisterDoctorBody> {
//    private final DoctorRepository doctorRepository;
    private final AvailableTimeRepository availableTimeRepository;
    private final DoctorRepository doctorRepository;

    public DoctorService(UserDetailsManager userDetailsManager, PasswordEncoder passwordEncoder, DoctorRepository doctorRepository, AvailableTimeRepository availableTimeRepository) {
        super(userDetailsManager, passwordEncoder);
        this.doctorRepository = doctorRepository;
        this.availableTimeRepository = availableTimeRepository;
    }

    @Override
    public void register(RegisterDoctorBody body) {

    }

    @Override
    public DoctorEntity getProfileByUsername(String username) {
        return null;
    }

    @Override
    public void updateProfile(DoctorEntity doctorEntity, RegisterDoctorBody body) {

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
