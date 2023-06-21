package com.laioffer.mdoline.availableTime;

import com.laioffer.mdoline.db.AvailableTimeRepository;
import com.laioffer.mdoline.db.entity.AvailableTimeEntity;
import com.laioffer.mdoline.db.entity.DoctorEntity;
import com.laioffer.mdoline.model.RegisterDoctorBody;
import com.laioffer.mdoline.user.DoctorService;
import com.laioffer.mdoline.user.UserService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AvailableTimeService {
    private final AvailableTimeRepository availableTimeRepository;

    private final UserService<DoctorEntity, RegisterDoctorBody> doctorService;

    public void setAvailableTimes(String username, List<String> availableTimes) {
        for (String time : availableTimes) {
            AvailableTimeEntity availableTimeEntity = new AvailableTimeEntity(
                    null,
                    doctorService.getUserId(username),
                    time,
                    false
            );
            availableTimeRepository.save(availableTimeEntity);
        }
    }

    public AvailableTimeService(AvailableTimeRepository availableTimeRepository, DoctorService doctorService) {
        this.availableTimeRepository = availableTimeRepository;
        this.doctorService = doctorService;
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

    public void deleteCertainAvailableTime(String availableTime, String username) {
        var doctorID = doctorService.getUserId(username);
        AvailableTimeEntity availableTimeEntity = availableTimeRepository.findByDoctorIdAndTime(doctorID, availableTime);
        if (availableTimeEntity != null) {
            availableTimeRepository.delete(doctorID, availableTime);
        }
    }

    public List<String> getAllAvailableTimes(String username) {
        return availableTimeRepository.findAllAvailableTimesByDoctorId(doctorService.getUserId(username));
    }

    public List<String> getAllAvailableTimes(Long doctorID) {
        return availableTimeRepository.findAllAvailableTimesByDoctorId(doctorID);
    }

    public void updateCertainAvailableTime(String username, String timeSlot, boolean isAvailable) {
        availableTimeRepository.updateCertainAvailableTime(doctorService.getUserId(username), timeSlot, isAvailable);
    }
}
