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

    public AvailableTimeService(AvailableTimeRepository availableTimeRepository, DoctorService doctorService) {
        this.availableTimeRepository = availableTimeRepository;
        this.doctorService = doctorService;
    }

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

    public void setCurrentCertainAvailableTime(String availableTime, Long userId, Boolean isOccupied) {
        AvailableTimeEntity availableTimeEntity = availableTimeRepository.findByUserIdAndTime(userId, availableTime);
        if (availableTimeEntity != null) {
            availableTimeRepository.setIsOccupiedByDoctorIdAndTime(userId, availableTime, isOccupied);
        }
    }

    public void deleteCertainAvailableTime(String availableTime, Long userId) {
        AvailableTimeEntity availableTimeEntity = availableTimeRepository.findByUserIdAndTime(userId, availableTime);
        if (availableTimeEntity != null) {
            availableTimeRepository.delete(userId, availableTime);
        }
    }

    public void deleteCertainAvailableTime(String username, String availableTime) {
        var userId = doctorService.getUserId(username);
        AvailableTimeEntity availableTimeEntity = availableTimeRepository.findByUserIdAndTime(userId, availableTime);
        if (availableTimeEntity != null) {
            availableTimeRepository.delete(userId, availableTime);
        }
    }

    public List<String> getAllAvailableTimes(String username) {
        return availableTimeRepository.findAllAvailableTimesByDoctorId(doctorService.getUserId(username));
    }

    public List<String> getAllAvailableTimes(Long userId) {
        return availableTimeRepository.findAllAvailableTimesByDoctorId(userId);
    }

    public void updateCertainAvailableTime(String username, String timeSlot, boolean isOccupied) {
        availableTimeRepository.updateCertainAvailableTime(doctorService.getUserId(username), timeSlot, isOccupied);
    }
}
