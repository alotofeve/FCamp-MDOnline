package com.laioffer.mdoline.db;

import com.laioffer.mdoline.db.entity.AvailableTimeEntity;
import org.springframework.data.jdbc.repository.query.Modifying;
import org.springframework.data.jdbc.repository.query.Query;
import org.springframework.data.repository.ListCrudRepository;

import java.util.List;

public interface AvailableTimeRepository extends ListCrudRepository<AvailableTimeEntity, Long> {
    AvailableTimeEntity findByUserIdAndDateAndTime(Long userId, String date, String availableTime);

    List<AvailableTimeEntity> findAllByUserId(Long userId);

    @Modifying
    @Query("UPDATE available_times SET" +
            " is_occupied = :isOccupied WHERE " +
            "user_id = :user_Id AND " +
            "date = :date AND " +
            "time =:time")
    void setIsOccupiedByDoctorIdAndTime(Long user_Id, String date, String time, Boolean isOccupied);

    @Modifying
    @Query("DELETE FROM available_times WHERE user_id = :user_Id AND date = :date AND time= :time")
    void delete(Long user_Id, String date, String time);

    @Query("SELECT time FROM available_times WHERE user_Id = :user_Id")
    List<String> findAllAvailableTimesByDoctorId(Long user_Id);

    @Modifying
    @Query("UPDATE available_times SET " +
            "is_occupied = :isOccupied WHERE " +
            "user_Id =:user_Id AND " +
            "date = :date AND " +
            "time =:timeslot")
    void updateCertainAvailableTime(Long user_Id, String date, String timeslot, Boolean isOccupied);

}
