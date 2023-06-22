package com.laioffer.mdoline.model;

import com.fasterxml.jackson.annotation.JsonProperty;

public record FavoriteBody(
        @JsonProperty("patient_id") Long patientId,
        @JsonProperty("lecture_id") Long lectureId
) {
    @Override
    public Long patientId() {
        return patientId;
    }

    @Override
    public Long lectureId() {
        return lectureId;
    }
}
