# Controller lever API list:

## DoctorController:
   ### public void registerDoctor(@RequestBody RegisterDoctorBody body) 
     - Register a doctor
     - @param body  a RegisterBody object contains all the information of a doctor

   ### public DoctorEntity getDoctorProfile(@AuthenticationPrincipal User user)
     -  Update doctor profile
     - @param user a user object contains the information of a doctor in order to locate the doctor in the database
    
   ### public void updateDoctorProfile(@AuthenticationPrincipal User user, @RequestBody RegisterDoctorBody body)
     -  Update doctor profile
     - @param user a user object contains the information of a doctor in order to locate the doctor in the database
     - @param body a RegisterDoctorBody object contains all the information of a doctor 
    
   ### public void deleteDoctorProfile(@AuthenticationPrincipal User user)
     - Delete doctor profile
     - @param user a user object contains the information of a doctor in order to locate the doctor in the database
    
   ### public void setAvailableTimes(@AuthenticationPrincipal User user, @RequestBody List<String> availableTimes)
     - add doctor's available times into database
     - @param user a user object contains the information of a doctor in order to locate the doctor in the database
     - @param availableTimes a list of string, each string represents a time slot
  
   ### public List<String> getAllAvailableTimes(@AuthenticationPrincipal User user)
     - get all available times of a doctor
     - @param user a user object contains the information of a doctor in order to locate the doctor in the database
     - @return a list of string, each string represents a time slot
  
  ### public void updateCertainAvailableTime(@AuthenticationPrincipal User user, @RequestParam("available_time_id") String availableTimeID, @RequestParam("is_available") boolean isAvailable)
     - set a certain available time of a doctor to occupied after the appointment is created
     - @param user a user object contains the information of a doctor in order to locate the doctor in the database
     - @param availableTimeID the id of the available time
     - @param isAvailable a boolean value indicates whether the time slot is occupied or not

 
## PatientController:
   ### public void registerPatient(@RequestBody RegisterPatientBody body)
     - Register a patient
     - @param body  a RegisterBody object contains all the information of a patient
   
   ### public PatientEntity getPatientProfile(@AuthenticationPrincipal User user)
     -  Get patient profile
     - @param user  a user object contains the information of a patient in order to locate the patient in the database
     - @return PatientEntity a PatientEntity object contains all the information of a patient
   
   ### public void updatePatientProfile(@AuthenticationPrincipal User user, @RequestBody RegisterPatientBody body)
     - Update patient profile
     - @param user a user object contains the information of a patient in order to locate the patient in the database
     - @param body a RegisterPatientBody object contains all the information of a patient
   
   ### public void deletePatientProfile(@AuthenticationPrincipal User user)
     - Delete patient profile
     - @param user a user object contains the information of a patient in order to locate the patient in the database
  
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
