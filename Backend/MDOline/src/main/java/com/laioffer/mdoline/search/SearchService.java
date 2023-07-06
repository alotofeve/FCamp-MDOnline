package com.laioffer.mdoline.search;

import com.laioffer.mdoline.availableTime.AvailableTimeService;
import com.laioffer.mdoline.db.entity.DoctorEntity;
import com.laioffer.mdoline.model.*;
import com.laioffer.mdoline.user.DoctorService;
import com.laioffer.mdoline.user.UserService;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class SearchService {
    private final DoctorService doctorService;
    private final AvailableTimeService availableTimeService;

    public SearchService(DoctorService doctorService, AvailableTimeService availableTimeService) {
        this.doctorService = doctorService;
        this.availableTimeService = availableTimeService;
    }

    public ResponseSearchBody searchDoctorByName(String firstName, String lastName) {
        var doctorProfile = doctorService.getDoctorProfileByName(firstName, lastName);
        return new ResponseSearchBody(
                doctorProfile.firstName(),
                doctorProfile.lastName(),
                doctorProfile.spec(),
                availableTimeService.getAllAvailableTimes(doctorProfile.doctorId())
        );
    }
    public List<ResponseSearchBody> seachDoctorByFirstname(String firstname){
        List<DoctorEntity> doctorsProfile = doctorService.getDoctorsByFirstname(firstname);
        List<ResponseSearchBody> response = new ArrayList<>();
        for (DoctorEntity profile : doctorsProfile) {
            response.add(new ResponseSearchBody(
                    profile.firstName(),
                    profile.lastName(),
                    profile.spec(),
                    availableTimeService.getAllAvailableTimes(profile.doctorId())
            ));
        }
        return response;
    }

    public List<ResponseSearchBody> seachDoctorByLastname(String lastname){
        List<DoctorEntity> doctorsProfile = doctorService.getDoctorsByLastname(lastname);
        List<ResponseSearchBody> response = new ArrayList<>();
        for (DoctorEntity profile : doctorsProfile) {
            response.add(new ResponseSearchBody(
                    profile.firstName(),
                    profile.lastName(),
                    profile.spec(),
                    availableTimeService.getAllAvailableTimes(profile.doctorId())
            ));
        }
        return response;
    }

    public List<ResponseSearchBody> seachDoctorByFullname(String firstname, String lastname){
        List<DoctorEntity> doctorsProfile = doctorService.getDoctorsByFullname(firstname,lastname);
        List<ResponseSearchBody> response = new ArrayList<>();
        for (DoctorEntity profile : doctorsProfile) {
            response.add(new ResponseSearchBody(
                    profile.firstName(),
                    profile.lastName(),
                    profile.spec(),
                    availableTimeService.getAllAvailableTimes(profile.doctorId())
            ));
        }
        return response;
    }


    public List<ResponseSearchBody> searchDoctorBySpec(String spec) {
        List<DoctorEntity> doctorsProfile = doctorService.getDoctorsBySpec(spec);
        List<ResponseSearchBody> response = new ArrayList<>();
        for (DoctorEntity profile : doctorsProfile) {
            response.add(new ResponseSearchBody(
                    profile.firstName(),
                    profile.lastName(),
                    profile.spec(),
                    availableTimeService.getAllAvailableTimes(profile.doctorId())
            ));
        }
        return response;
    }

    public List<ResponseSearchBody> searchDoctorByAll() {
        List<DoctorEntity> doctorsProfile = doctorService.getAllDoctors();
        List<ResponseSearchBody> response = new ArrayList<>();
        for (DoctorEntity profile : doctorsProfile) {
            response.add(new ResponseSearchBody(
                    profile.firstName(),
                    profile.lastName(),
                    profile.spec(),
                    availableTimeService.getAllAvailableTimes(profile.doctorId())
            ));
        }
        return response;
    }

    public List<String> getAllSpecs() {
        return doctorService.getAllSpecs();
    }

    public List<ResponseGeneralSearchBody> searchingByFirstName(String firstName) {
        List<ResponseGeneralSearchBody> result = new ArrayList<>();
        List<DoctorEntity> doctorsProfile = doctorService.getDoctorsByFirstname(firstName);
        for (DoctorEntity profile : doctorsProfile) {
            result.add(new ResponseGeneralSearchBody(
                    profile,
                    availableTimeService.getAllAvailableTimes(profile.doctorId())
            ));
        }
        return result;
    }

    public List<ResponseGeneralSearchBody> searchingByLastName(String lastName) {
        List<ResponseGeneralSearchBody> result = new ArrayList<>();
        List<DoctorEntity> doctorsProfile = doctorService.getDoctorsByLastname(lastName);
        for (DoctorEntity profile : doctorsProfile) {
            result.add(new ResponseGeneralSearchBody(
                    profile,
                    availableTimeService.getAllAvailableTimes(profile.doctorId())
            ));
        }
        return result;
    }
    public List<ResponseGeneralSearchBody> searchingByFullName(String firstName, String lastName) {
        List<ResponseGeneralSearchBody> result = new ArrayList<>();
        List<DoctorEntity> doctorsProfile = doctorService.getDoctorsByFullname(firstName, lastName);
        for (DoctorEntity profile : doctorsProfile) {
            result.add(new ResponseGeneralSearchBody(
                    profile,
                    availableTimeService.getAllAvailableTimes(profile.doctorId())
            ));
        }
        return result;
    }

    public List<ResponseGeneralSearchBody> searchDoctor(String firstname, String lastname, String spec) {
        List<ResponseGeneralSearchBody> result = new ArrayList<>();
        List<DoctorEntity> doctorsProfile = doctorService.searchDoctors(firstname, lastname, spec);
        for (DoctorEntity profile : doctorsProfile) {
            result.add(new ResponseGeneralSearchBody(
                    profile,
                    availableTimeService.getAllAvailableTimes(profile.doctorId())
            ));
        }
        return result;
    }


}