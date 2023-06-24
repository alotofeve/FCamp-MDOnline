package com.laioffer.mdoline.db;

import com.laioffer.mdoline.db.entity.AvailableTimeEntity;
import org.springframework.data.jdbc.repository.query.Modifying;
import org.springframework.data.jdbc.repository.query.Query;
import org.springframework.data.repository.ListCrudRepository;

import java.util.List;

public interface AvailableTimeRepository extends ListCrudRepository<AvailableTimeEntity, Long> {
    AvailableTimeEntity findByUserIdAndTime(Long userId, String availableTime);

    @Modifying
    @Query("UPDATE available_times SET is_occupied = :isOccupied WHERE user_id = :user_Id AND time =:time")
    void setIsOccupiedByDoctorIdAndTime(Long user_Id, String time, Boolean isOccupied);

    @Modifying
    @Query("DELETE FROM available_times WHERE user_id = :user_Id AND time= :time")
    void delete(Long user_Id, String time);

    @Query("SELECT time FROM available_times WHERE user_Id = :user_Id")
    List<String> findAllAvailableTimesByDoctorId(Long user_Id);

    @Modifying
    @Query("UPDATE available_times SET is_occupied = :isOccupied WHERE user_Id =:user_Id AND time =:timeslot")
    void updateCertainAvailableTime(Long user_Id, String timeslot, Boolean isOccupied);

}
