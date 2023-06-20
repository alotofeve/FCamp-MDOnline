# Controller lever API list:

## DoctorController:

 ### public void registerDoctor(@RequestBody RegisterUserCredentialBody credentialBody) 
   - @PostMapping("/registerDoctor")
   - Register a doctor
   - @param credentialBody  
      - String username
      - String password

 ---

 ### public void registerDoctor(@RequestBody RegisterUserCredentialBody credentialBody)
   - @PostMapping("/registerDoctor")
   - Set doctor profile
   - @param body
      - String username
      - String password,
      - String firstName,
      - String lastName,
      - String gender,
      - String dateOfBirth,
      - Boolean insurance,
      - String email,
      - String phone,
      - String mailAddress,
      - String payment
