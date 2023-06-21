package com.laioffer.mdoline.model;

import java.util.List;

public record ResponseSearchBody(
        String firstName,
        String lastName,
        String spec,
        List<String> availableTime
) {
}
