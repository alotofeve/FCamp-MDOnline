package com.laioffer.mdoline.db.entity;

import org.springframework.data.annotation.Id;
import org.springframework.data.relational.core.mapping.Table;

@Table("lectures")
public record LectureEntity(
        @Id Long lectureId,
        Long doctorId,
        String title,
        String body
) {
}
