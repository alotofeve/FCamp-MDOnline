package com.laioffer.mdoline.favorite;

import com.laioffer.mdoline.db.FavoriteRepository;
import com.laioffer.mdoline.db.LectureRepository;
import com.laioffer.mdoline.db.entity.FavoriteEntity;
import com.laioffer.mdoline.db.entity.LectureEntity;
import com.laioffer.mdoline.lecture.LectureService;
import com.laioffer.mdoline.model.FavoriteBody;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FavoriteService {
    FavoriteRepository favoriteRepository;

    public FavoriteService(FavoriteRepository favoriteRepository){
        this.favoriteRepository = favoriteRepository;
    }

    public List<FavoriteEntity> getLectureByPatient(Long patientId) {
        return favoriteRepository.findAllByPatientId(patientId);
    }
    public void favoriteLecture(Long userId, Long lectureId){
        FavoriteEntity favoriteRecord = new FavoriteEntity(
                null,
                userId,
                lectureId
        );
        favoriteRepository.save(favoriteRecord);
    }
    public void unsetFavoriteLecture(Long patientId, Long lectureId){
        favoriteRepository.deleteByPatientIdAndLectureId(patientId,lectureId);
    }
}
