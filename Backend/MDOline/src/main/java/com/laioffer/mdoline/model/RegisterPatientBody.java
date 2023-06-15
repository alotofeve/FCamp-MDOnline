package com.laioffer.mdoline.model;

import com.fasterxml.jackson.annotation.JsonProperty;

public record RegisterPatientBody(
        String username,
        String password,
        @JsonProperty("first_name") String firstName,
        @JsonProperty("last_name") String lastName,
        String gender,
        String dateOfBirth,
        Boolean insurance,
        String email,
        String phone,
        String mailAddress,
        String payment
) {
}
