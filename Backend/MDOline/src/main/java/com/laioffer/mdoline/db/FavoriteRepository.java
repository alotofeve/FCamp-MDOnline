package com.laioffer.mdoline.db;

import com.laioffer.mdoline.db.entity.FavoriteEntity;
import com.laioffer.mdoline.db.entity.LectureEntity;
import org.springframework.data.jdbc.repository.query.Modifying;
import org.springframework.data.jdbc.repository.query.Query;
import org.springframework.data.repository.ListCrudRepository;

import java.util.List;

public interface FavoriteRepository extends ListCrudRepository<FavoriteEntity, Long> {
    List<FavoriteEntity> findAllByPatientId(Long patientId);

    @Modifying
    @Query("DELETE FROM favorites WHERE patient_id = :patientId AND lecture_id = :lectureId")
    void deleteByPatientIdAndLectureId(Long patientId, Long lectureId);
}
