package com.laioffer.mdoline.availableTime;

import com.laioffer.mdoline.db.AvailableTimeRepository;
import com.laioffer.mdoline.db.entity.AvailableTimeEntity;
import com.laioffer.mdoline.db.entity.DoctorEntity;
import com.laioffer.mdoline.model.RegisterAvailableTimeBody;
import com.laioffer.mdoline.model.RegisterDoctorBody;
import com.laioffer.mdoline.user.DoctorService;
import com.laioffer.mdoline.user.UserService;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class AvailableTimeService {
    private final AvailableTimeRepository availableTimeRepository;

    private final UserService<DoctorEntity, RegisterDoctorBody> doctorService;

    public AvailableTimeService(
            AvailableTimeRepository availableTimeRepository,
            DoctorService doctorService) {
        this.availableTimeRepository = availableTimeRepository;
        this.doctorService = doctorService;
    }

    public void setAvailableTimes(String username, List<RegisterAvailableTimeBody> body) {
        for (RegisterAvailableTimeBody element : body) {
            AvailableTimeEntity availableTimeEntity = new AvailableTimeEntity(
                    null,
                    doctorService.getUserId(username),
                    element.date(),
                    element.time(),
                    false
            );
            availableTimeRepository.save(availableTimeEntity);
        }
    }

    public void setCurrentCertainAvailableTime(
            String date,
            String availableTime,
            Long userId,
            Boolean isOccupied) {
        AvailableTimeEntity availableTimeEntity =
                availableTimeRepository.findByUserIdAndDateAndTime(userId, date, availableTime);
        if (availableTimeEntity != null) {
            availableTimeRepository.
                    setIsOccupiedByDoctorIdAndTime(userId, date, availableTime, isOccupied);
        }
    }

    public void deleteCertainAvailableTime(
            Long Id,
            String date,
            String time
    ) {
        AvailableTimeEntity availableTimeEntity =
                availableTimeRepository.findByUserIdAndDateAndTime(Id, date, time);
        if (availableTimeEntity != null) {
            availableTimeRepository.delete(Id, date, time);
        }
    }

    public void deleteCertainAvailableTime(
            String username,
            String date,
            String time) {
        var userId = doctorService.getUserId(username);
        AvailableTimeEntity availableTimeEntity =
                availableTimeRepository.
                        findByUserIdAndDateAndTime(userId, date, time);
        if (availableTimeEntity != null) {
            availableTimeRepository.delete(userId, date, time);
        }
    }

    public List<RegisterAvailableTimeBody> getAllAvailableTimes(String username) {
        var availableTimeEntities =
                availableTimeRepository.findAllByUserId(doctorService.getUserId(username));
        List<RegisterAvailableTimeBody> result = new ArrayList<>();
        for (AvailableTimeEntity element : availableTimeEntities) {
            result.add(new RegisterAvailableTimeBody(
                    element.date(),
                    element.time()
            ));
        }
        return result;
    }

    public List<RegisterAvailableTimeBody> getAllAvailableTimes(Long userId) {
        var availableTimeEntities =
                availableTimeRepository.findAllByUserId(userId);
        List<RegisterAvailableTimeBody> result = new ArrayList<>();
        for (AvailableTimeEntity element : availableTimeEntities) {
            result.add(new RegisterAvailableTimeBody(
                    element.date(),
                    element.time()
            ));
        }
        return result;
    }

    public void updateCertainAvailableTime(
            String username, RegisterAvailableTimeBody body, boolean isOccupied) {
        availableTimeRepository.
                updateCertainAvailableTime(
                        doctorService.getUserId(username), body.date(), body.time(), isOccupied);
    }
}
