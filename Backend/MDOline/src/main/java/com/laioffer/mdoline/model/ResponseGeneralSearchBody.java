package com.laioffer.mdoline.model;

import com.laioffer.mdoline.db.entity.DoctorEntity;

import java.util.List;

public record ResponseGeneralSearchBody(
        DoctorEntity doctorEntity,
        List<RegisterAvailableTimeBody> availables

) {
}
