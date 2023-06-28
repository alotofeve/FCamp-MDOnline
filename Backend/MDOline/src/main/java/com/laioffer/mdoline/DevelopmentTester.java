//package com.laioffer.mdoline;
//
//import com.laioffer.mdoline.model.RegisterDoctorBody;
//import com.laioffer.mdoline.model.UserRole;
//import com.laioffer.mdoline.user.DoctorService;
//import com.laioffer.mdoline.user.UserService;
//import org.springframework.boot.ApplicationArguments;
//import org.springframework.boot.ApplicationRunner;
//import org.springframework.stereotype.Component;
//import org.slf4j.Logger;
//import org.slf4j.LoggerFactory;
//
//
//@Component
//public class DevelopmentTester implements ApplicationRunner {
//    private static final Logger logger = LoggerFactory.getLogger(DevelopmentTester.class);
//
//    private final UserService doctorService;
//
//    public DevelopmentTester(DoctorService doctorService) {
//        this.doctorService = doctorService;
//    }
//
//    @Override
//    public void run(ApplicationArguments args) {
//        doctorService.register("michael", "12345", UserRole.DOCTOR);
//    }
//
//}
