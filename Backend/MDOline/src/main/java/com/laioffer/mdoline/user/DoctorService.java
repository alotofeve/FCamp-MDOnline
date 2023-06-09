package com.laioffer.mdoline.user;

import com.laioffer.mdoline.db.DoctorRepository;
import com.laioffer.mdoline.db.UserRepository;
import com.laioffer.mdoline.db.entity.DoctorEntity;
import com.laioffer.mdoline.model.RegisterDoctorBody;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.provisioning.UserDetailsManager;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DoctorService extends UserService<DoctorEntity, RegisterDoctorBody> {
    private final DoctorRepository doctorRepository;

    public DoctorService(
            UserDetailsManager userDetailsManager,
            PasswordEncoder passwordEncoder,
            DoctorRepository doctorRepository,
            UserRepository userRepository) {
        super(userDetailsManager, passwordEncoder, userRepository);
        this.doctorRepository = doctorRepository;
    }

    @Override
    public void createUserProfile(String username, RegisterDoctorBody body) {
        DoctorEntity newDoctor = new DoctorEntity(
                null,
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
        doctorRepository.deleteByDoctorId(super.getUserId(username));
    }

    public DoctorEntity getDoctorProfileByName(String firstName, String lastName) {
        return doctorRepository.findByLastNameAndFirstName(lastName, firstName);
    }
    public DoctorEntity getDoctorProfileById(Long id){return doctorRepository.searchDoctorEntityByDoctorId(id);}
    public List<DoctorEntity> getDoctorsByFirstname(String firstname){return doctorRepository.findDoctorEntitiesByFirstName(firstname);}

    public List<DoctorEntity> getDoctorsByLastname(String lastname){return doctorRepository.findDoctorEntitiesByLastName(lastname);}

    public List<DoctorEntity> getDoctorsByFullname(String firstname, String lastname){return doctorRepository.findDoctorEntitiesByFirstNameAndLastName(firstname,lastname);}
    public List<DoctorEntity> getDoctorsBySpec(String spec) {
        return doctorRepository.findBySpec(spec);
    }

    public List<DoctorEntity> getAllDoctors() {
        return doctorRepository.findAll();
    }

    public List<String> getAllSpecs() {
        return doctorRepository.findAllSpecs();
    }
    public List<DoctorEntity> searchDoctors(String firstname, String lastname, String spec){return doctorRepository.searchDoctor(firstname,lastname,spec);}
}


