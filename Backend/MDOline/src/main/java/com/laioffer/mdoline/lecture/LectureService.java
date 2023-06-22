package com.laioffer.mdoline.lecture;


import com.laioffer.mdoline.db.LectureRepository;
import com.laioffer.mdoline.db.entity.FavoriteEntity;
import com.laioffer.mdoline.db.entity.LectureEntity;
import com.laioffer.mdoline.model.LectureBody;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class LectureService {
    LectureRepository lectureRepository;

    public LectureService(LectureRepository lectureRepository){
        this.lectureRepository = lectureRepository;
    }
    public void postLecture(LectureBody lectureBody){
        LectureEntity lecture = new LectureEntity(
                lectureBody.lectureId(),
                lectureBody.doctorId(),
                lectureBody.title(),
                lectureBody.body()
        );
        lectureRepository.save(lecture);
    }
    public LectureEntity getLectureByID(Long lectureId){
        return lectureRepository.findByLectureId(lectureId);
    }
    public List<LectureEntity> getLectureByDoctor(Long doctorId){
        return lectureRepository.findAllByDoctorId(doctorId);
    }
    public void deleteLecture(Long lectureId) {
        lectureRepository.deleteByLectureId(lectureId);
    }

}