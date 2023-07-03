package com.laioffer.mdoline.db;

import com.laioffer.mdoline.db.entity.LectureEntity;
import org.springframework.data.jdbc.repository.query.Modifying;
import org.springframework.data.jdbc.repository.query.Query;
import org.springframework.data.repository.ListCrudRepository;

import java.util.List;

public interface LectureRepository extends ListCrudRepository<LectureEntity, Long> {
//    void postLecture(String title, String body);
    List<LectureEntity> findAllByDoctorId(Long doctorId);
    LectureEntity findByLectureId(Long lectureId);

    @Modifying
    @Query("DELETE FROM lectures WHERE lecture_id = :lectureId")
    void deleteByLectureId(Long lectureId);
    @Query("SELECT * FROM lectures LIMIT 5")
    List<LectureEntity> getFiveLectures();
}
