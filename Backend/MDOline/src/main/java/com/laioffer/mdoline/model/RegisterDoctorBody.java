package com.laioffer.mdoline.model;

public record RegisterDoctorBody(
        String username,
        String password,
        String name,
        String gender,
        String dateOfBirth,
        String email,
        String phone,
        String spec,
        String mailAddress,
        String license
) {
}
