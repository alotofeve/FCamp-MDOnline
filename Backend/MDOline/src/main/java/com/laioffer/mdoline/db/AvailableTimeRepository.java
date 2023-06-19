package com.laioffer.mdoline.db;

import com.laioffer.mdoline.db.entity.AvailableTimeEntity;
import org.springframework.data.jdbc.repository.query.Modifying;
import org.springframework.data.jdbc.repository.query.Query;
import org.springframework.data.repository.ListCrudRepository;

import java.util.List;

public interface AvailableTimeRepository extends ListCrudRepository<AvailableTimeEntity, Long> {
    AvailableTimeEntity findByDoctorIdAndTime(Long doctorId, String availableTime);

    @Modifying
    @Query("UPDATE available_times SET is_occupied = :isOccupied WHERE doctor_ID =:doctorId AND available_time =:time")
    void setIsOccupiedByDoctorIdAndTime(Long doctorId, String time, Boolean isOccupied);

    @Modifying
    @Query("DELETE FROM available_times WHERE doctor_id= :doctorId AND available_time= :time")
    void delete(Long doctorId, String time);

    @Modifying
    @Query("SELECT time FROM available_times WHERE doctor_id = :doctorId")
    List<String> findAllAvailableTimesByDoctorId(Long doctorId);

    @Modifying
    @Query("UPDATE available_times SET is_occupied = :isOccupied WHERE doctor_ID =:doctorId AND available_time =:timeslot")
    void updateCertainAvailableTime(Long doctorId, String timeslot, Boolean isOccupied);

}
