package com.laioffer.mdoline.db.entity;

import org.springframework.data.annotation.Id;
import org.springframework.data.relational.core.mapping.Table;

@Table("favorites")
public record FavoriteEntity(
        @Id Long favoriteId,
        Long patientId,
        Long lectureId
) {
}
