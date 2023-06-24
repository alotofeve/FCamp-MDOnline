package com.laioffer.mdoline.db.entity;

import com.fasterxml.jackson.annotation.JsonProperty;
import org.springframework.data.annotation.Id;
import org.springframework.data.relational.core.mapping.Table;

@Table("available_times")
public record AvailableTimeEntity(
        @Id Long availableTimeId,
        Long userId,
        String time,
        Boolean isOccupied
){
}
