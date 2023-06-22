package com.laioffer.mdoline.lecture;

import com.laioffer.mdoline.db.entity.DoctorEntity;
import com.laioffer.mdoline.db.entity.LectureEntity;
import com.laioffer.mdoline.model.LectureBody;
import com.laioffer.mdoline.model.RegisterDoctorBody;
import com.laioffer.mdoline.user.DoctorService;
import com.laioffer.mdoline.user.UserService;
import com.laioffer.mdoline.lecture.LectureService;
import org.apache.catalina.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class LectureController{
    LectureService lectureService;
    UserService<DoctorEntity, RegisterDoctorBody> doctorService;

    public void LectureController(LectureService lecture){
        this.lectureService = lecture;
    }
    public void DoctorController(DoctorService doctorService) {
        this.doctorService = doctorService;
    }
    @PostMapping("/postLecture")
    public void postLecture(@RequestBody LectureBody lectureBody){
        lectureService.postLecture(lectureBody);
    }
    @GetMapping("/getLectureByDoctor")
    List<LectureEntity> getLectureByDoctor(@AuthenticationPrincipal User user){
        return lectureService.getLectureByDoctor(doctorService.getUserId(user.getUsername()));
    }
    @DeleteMapping("/deleteLecture")
    void deleteLecture(Long lectureId){
        lectureService.deleteLecture(lectureId);
    }

}