package com.laioffer.mdoline.model;

import com.fasterxml.jackson.annotation.JsonProperty;

public record RegisterDoctorBody(
        @JsonProperty("first_name") String firstName,
        @JsonProperty("last_name") String lastName,
        String gender,
        @JsonProperty("date_of_birth") String dateOfBirth,
        String email,
        String phone,
        String spec,
        @JsonProperty("mail_address") String mailAddress,
        String license
) {
}
