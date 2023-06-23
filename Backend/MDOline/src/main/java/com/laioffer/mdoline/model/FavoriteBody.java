package com.laioffer.mdoline.model;

import com.fasterxml.jackson.annotation.JsonProperty;

public record FavoriteBody(
        @JsonProperty("lecture_id") Long lectureId
) {
}