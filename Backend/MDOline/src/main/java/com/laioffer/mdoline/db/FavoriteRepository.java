package com.laioffer.mdoline.db;

import com.laioffer.mdoline.db.entity.FavoriteEntity;
import com.laioffer.mdoline.db.entity.LectureEntity;
import org.springframework.data.repository.ListCrudRepository;

import java.util.List;

public interface FavoriteRepository extends ListCrudRepository<FavoriteEntity, Long> {
    List<FavoriteEntity> findAllByPatientId(Long patientId);
    void deleteByPatientIdAndLectureId(Long patientId, Long lectureId);
}
