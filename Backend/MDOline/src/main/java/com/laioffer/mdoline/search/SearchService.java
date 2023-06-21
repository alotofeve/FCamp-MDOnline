package com.laioffer.mdoline.search;

import com.laioffer.mdoline.availableTime.AvailableTimeService;
import com.laioffer.mdoline.db.entity.DoctorEntity;
import com.laioffer.mdoline.model.ResponseSearchBody;
import com.laioffer.mdoline.user.DoctorService;
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
}