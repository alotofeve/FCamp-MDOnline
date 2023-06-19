package com.laioffer.mdoline.model;

import com.fasterxml.jackson.annotation.JsonProperty;

public record RegisterDoctorBody(
        @JsonProperty("first_name") String firstName,
        @JsonProperty("last_name") String lastName,
        String gender,
        String dateOfBirth,
        String email,
        String phone,
        String spec,
        String mailAddress,
        String license
) {
}
