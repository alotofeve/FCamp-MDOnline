package com.laioffer.mdoline.model;

import com.fasterxml.jackson.annotation.JsonProperty;

public record GeneralSearchBody(
        @JsonProperty("first_name") String firstName,
        @JsonProperty("last_name") String lastName,
        String spec
) {
}
