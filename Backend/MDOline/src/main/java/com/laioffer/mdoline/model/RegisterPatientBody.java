package com.laioffer.mdoline.model;

public record RegisterPatientBody(
        String username,
        String password,
        String name,
        String gender,
        String dateOfBirth,
        Boolean insurance,
        String email,
        String phone,
        String mailAddress,
        String payment
) {
}
