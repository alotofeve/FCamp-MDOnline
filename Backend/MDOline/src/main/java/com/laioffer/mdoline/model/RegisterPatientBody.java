package com.laioffer.mdoline.model;

import com.fasterxml.jackson.annotation.JsonProperty;

public record RegisterPatientBody(
        @JsonProperty("first_name") String firstName,
        @JsonProperty("last_name") String lastName,
        String gender,
        @JsonProperty("date_of_birth") String dateOfBirth,
        Boolean insurance,
        String email,
        String phone,
        @JsonProperty("mail_address") String mailAddress,
        String payment
) {
}
