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

    public void FavoriteController(FavoriteService favoriteService){
        this.favoriteService = favoriteService;
    }
    @PostMapping("/favoriteLecture")
    public void favoriteLecture(@RequestBody FavoriteBody favoriteRecord){
        favoriteService.favoriteLecture(favoriteRecord);
    }
    @GetMapping("/getLectureByPatient")
    public List<FavoriteEntity> getLectureByPatient(@AuthenticationPrincipal User user){

//       List<FavoriteEntity> favoriteRecord = favoriteService.getLectureByPatient(patientService.getUserId(user.getUsername()));
        return favoriteService.getLectureByPatient(patientService.getUserId(user.getUsername()));
    }
    @DeleteMapping("/unfavoriteLecture")
    public void unfavoriteLecture(@AuthenticationPrincipal User user,@RequestBody FavoriteBody favoriteBody){
        favoriteService.unfavoritelecture(patientService.getUserId(user.getUsername()), favoriteBody.lectureId());
    }

}
