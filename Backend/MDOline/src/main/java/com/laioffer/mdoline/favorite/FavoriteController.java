package com.laioffer.mdoline.favorite;

import com.laioffer.mdoline.db.entity.DoctorEntity;
import com.laioffer.mdoline.db.entity.FavoriteEntity;
import com.laioffer.mdoline.db.entity.LectureEntity;
import com.laioffer.mdoline.db.entity.PatientEntity;
import com.laioffer.mdoline.model.FavoriteBody;
import com.laioffer.mdoline.model.RegisterDoctorBody;
import com.laioffer.mdoline.model.RegisterPatientBody;
import com.laioffer.mdoline.user.UserService;
import org.apache.catalina.User;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class FavoriteController {
    FavoriteService favoriteService;
    UserService<PatientEntity, RegisterPatientBody> patientService;

    public FavoriteController(FavoriteService favoriteService) {
        this.favoriteService = favoriteService;
    }
    @PostMapping("/favorite-lecture")
    public void favoriteLecture(@RequestBody FavoriteBody favoriteRecord){
        favoriteService.favoriteLecture(favoriteRecord);
    }
    @GetMapping("/get-lecture-by-patient")
    public List<FavoriteEntity> getLectureByPatient(@AuthenticationPrincipal User user){
        return favoriteService.getLectureByPatient(patientService.getUserId(user.getUsername()));
    }
    @DeleteMapping("/unset-favorite-lecture")
    public void unsetFavoriteLecture(@AuthenticationPrincipal User user,@RequestBody FavoriteBody favoriteBody){
        favoriteService.unsetFavoriteLecture(patientService.getUserId(user.getUsername()), favoriteBody.lectureId());
    }

}
