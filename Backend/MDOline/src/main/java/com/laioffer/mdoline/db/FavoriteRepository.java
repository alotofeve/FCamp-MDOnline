package com.laioffer.mdoline.db;

import com.laioffer.mdoline.db.entity.FavoriteEntity;
import org.springframework.data.repository.ListCrudRepository;

public interface FavoriteRepository extends ListCrudRepository<FavoriteEntity, Long> {

}
