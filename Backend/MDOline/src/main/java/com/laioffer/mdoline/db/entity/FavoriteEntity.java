package com.laioffer.mdoline.db.entity;

import org.springframework.data.relational.core.mapping.Table;

@Table("favorites")
public record FavoriteEntity(
        Long patientId,
        Long lectureId
) {
}
