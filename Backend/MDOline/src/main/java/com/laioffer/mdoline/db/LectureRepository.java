package com.laioffer.mdoline.db;

import com.laioffer.mdoline.db.entity.LectureEntity;
import org.springframework.data.repository.ListCrudRepository;

import java.util.List;

public interface LectureRepository extends ListCrudRepository<LectureEntity, Long> {
//    void postLecture(String title, String body);
    List<LectureEntity> findAllByDoctorId(Long doctorId);
    LectureEntity findByLectureId(Long lectureId);
    void deleteByLectureId(Long lectureId);
//    void favouriteLecture(long patientID, long LectureID);
//    void unfavouriteLecture(long patientID, long lectureID);
}
