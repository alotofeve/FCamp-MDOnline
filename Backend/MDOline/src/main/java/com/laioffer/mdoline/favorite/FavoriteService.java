package com.laioffer.mdoline.favorite;

import com.laioffer.mdoline.db.FavoriteRepository;
import com.laioffer.mdoline.db.LectureRepository;
import com.laioffer.mdoline.db.entity.FavoriteEntity;
import com.laioffer.mdoline.db.entity.LectureEntity;
import com.laioffer.mdoline.lecture.LectureService;
import com.laioffer.mdoline.model.FavoriteBody;

import java.util.List;

public class FavoriteService {
    FavoriteRepository favoriteRepository;

    public void  FavoriteService(FavoriteRepository favoriteRepository){
        this.favoriteRepository = favoriteRepository;
    }

    public List<FavoriteEntity> getLectureByPatient(Long patientId){

        return favoriteRepository.findAllByPatientId(patientId);
    }
    public void favoriteLecture(FavoriteBody favoriteBody){
        FavoriteEntity favoriteRecord = new FavoriteEntity(
                favoriteBody.patientId(),
                favoriteBody.lectureId()
        );
        favoriteRepository.save(favoriteRecord);
    }
    public void unfavoritelecture(Long patientId, Long lectureId){
        favoriteRepository.deleteByPatientIdAndLectureId(patientId,lectureId);
    }
}
