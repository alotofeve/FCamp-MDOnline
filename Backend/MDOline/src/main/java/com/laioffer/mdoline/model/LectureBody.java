package com.laioffer.mdoline.model;

import com.fasterxml.jackson.annotation.JsonProperty;

public record LectureBody (
    String title,
    String body
) {
}