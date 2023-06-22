package com.laioffer.mdoline.model;

import com.fasterxml.jackson.annotation.JsonProperty;

public record LectureBody (
    @JsonProperty("lecture_id") Long lectureId,
    @JsonProperty("doctor_id") Long doctorId,
    String title,
    String body
){

    @Override
    public Long lectureId() {
        return lectureId;
    }

    @Override
    public Long doctorId() {
        return doctorId;
    }

    @Override
    public String title() {
        return title;
    }

    @Override
    public String body() {
        return body;
    }
}
