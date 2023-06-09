package com.laioffer.mdoline.lecture;

import com.laioffer.mdoline.db.entity.DoctorEntity;
import com.laioffer.mdoline.db.entity.LectureEntity;
import com.laioffer.mdoline.model.LectureBody;
import com.laioffer.mdoline.model.RegisterDoctorBody;
import com.laioffer.mdoline.user.DoctorService;
import com.laioffer.mdoline.user.UserService;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class LectureController{
    LectureService lectureService;
    UserService<DoctorEntity, RegisterDoctorBody> doctorService;

    public LectureController(LectureService lectureService, DoctorService doctorService) {
        this.lectureService = lectureService;
        this.doctorService = doctorService;
    }

    @PostMapping("/post-lecture")
    public void postLecture(@AuthenticationPrincipal User user, @RequestBody LectureBody lectureBody) {
        lectureService.postLecture(doctorService.getUserId(user.getUsername()), lectureBody);
    }
    @GetMapping("/get-lecture-by-doctor")
    List<LectureEntity> getLectureByDoctor(@AuthenticationPrincipal User user) {
        return lectureService.getLectureByDoctor(doctorService.getUserId(user.getUsername()));
    }
    @DeleteMapping("/delete-lecture-by-id")
    void deleteLecture(@RequestParam("lecture_id") Long lectureId){
        lectureService.deleteLecture(lectureId);
    }

    @GetMapping("/get-five-lectures")
    List<LectureEntity> getFiveLectures(){
        return lectureService.getFiveLectures();
    }
}