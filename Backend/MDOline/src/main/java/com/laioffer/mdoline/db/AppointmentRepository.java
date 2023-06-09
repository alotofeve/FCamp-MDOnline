package com.laioffer.mdoline.db;

import com.laioffer.mdoline.db.entity.AppointmentEntity;
import org.springframework.data.repository.ListCrudRepository;

public interface AppointmentRepository extends ListCrudRepository<AppointmentEntity, Long> {
}
