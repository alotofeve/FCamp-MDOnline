package com.laioffer.mdoline.db;

import com.laioffer.mdoline.db.entity.AvailableTimeEntity;
import org.springframework.data.jdbc.repository.query.Modifying;
import org.springframework.data.jdbc.repository.query.Query;
import org.springframework.data.repository.ListCrudRepository;

public interface AvailableTimeRepository extends ListCrudRepository<AvailableTimeEntity, Long> {
    AvailableTimeEntity findByDoctorIdAndTime(Long doctorId, String availableTime);

    @Modifying
    @Query("UPDATE available_times SET is_occupied = :isOccupied WHERE doctor_ID =:doctorId AND time =:time")
    public void setIsOccupiedByDoctorIdAndTime(Long doctorId, String time, Boolean isOccupied);

    @Modifying
    @Query("DELETE FROM available_times WHERE doctor_id= :doctorId AND time= :time")
    public void delete(Long doctorId, String time);
}
