package com.laioffer.mdoline.db.entity;

import org.springframework.data.annotation.Id;
import org.springframework.data.relational.core.mapping.Table;

@Table("available_times")
public record AvailableTimeEntity(
        @Id Long availableTimeId,
        Long doctorId,
        Long time,
        Boolean isOccupied
){
}
