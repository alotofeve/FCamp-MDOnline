package com.laioffer.mdoline.model;

import com.fasterxml.jackson.annotation.JsonProperty;

public record LectureBody (
    @JsonProperty("lecture_id") Long lectureId,
    @JsonProperty("doctor_id") Long doctorId,
    String title,
    String body
) {
}