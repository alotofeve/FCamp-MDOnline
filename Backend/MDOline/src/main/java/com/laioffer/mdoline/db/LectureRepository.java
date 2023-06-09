package com.laioffer.mdoline.db;

import com.laioffer.mdoline.db.entity.LectureEntity;
import org.springframework.data.repository.ListCrudRepository;

public interface LectureRepository extends ListCrudRepository<LectureEntity, Long> {
}
