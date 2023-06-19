package com.laioffer.mdoline.availableTime;

import com.laioffer.mdoline.db.AvailableTimeRepository;
import com.laioffer.mdoline.db.entity.DoctorEntity;
import com.laioffer.mdoline.model.RegisterDoctorBody;
import com.laioffer.mdoline.user.DoctorService;
import com.laioffer.mdoline.user.UserService;
import org.apache.catalina.User;
import org.springframework.http.HttpStatus;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class AvailableTimesController {
    private final AvailableTimeService availableTimeService;

    public AvailableTimesController(AvailableTimeService availableTimeService) {
        this.availableTimeService = availableTimeService;
    }

    /**
     * add doctor's available times into database
     * @param user a user object contains the information of a doctor in order to locate the doctor in the database
     * @param availableTimes a list of string, each string represents a time slot
     */
    @PostMapping("/setAvailableTimes")
    @ResponseStatus(value = HttpStatus.OK)
    public void setAvailableTimes(@AuthenticationPrincipal User user, @RequestBody List<String> availableTimes){
        availableTimeService.setAvailableTimes(user.getUsername(), availableTimes);
    }

    /**
     * get all available times of a doctor
     * @param user a user object contains the information of a doctor in order to locate the doctor in the database
     * @return a list of string, each string represents a time slot
     */
    @GetMapping("/getAllAvailableTimes")
    public List<String> getAllAvailableTimes(@AuthenticationPrincipal User user){
        return null;
    }

    /**
     * set a certain available time of a doctor to occupied after the appointment is created
     * @param user a user object contains the information of a doctor in order to locate the doctor in the database
     * @param availableTimeID the id of the available time
     * @param isAvailable a boolean value indicates whether the time slot is occupied or not
     */
    @PutMapping("/updateCertainAvailableTime")
    @ResponseStatus(value = HttpStatus.OK)
    public void updateCertainAvailableTime(@AuthenticationPrincipal User user, @RequestParam("available_time_id") String availableTimeID, @RequestParam("is_available") boolean isAvailable){
    }








}
