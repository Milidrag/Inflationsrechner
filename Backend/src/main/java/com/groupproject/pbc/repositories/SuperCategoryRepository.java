package com.groupproject.pbc.repositories;


import com.groupproject.pbc.models.SuperCategory;
import org.springframework.data.repository.CrudRepository;

import java.util.List;


public interface SuperCategoryRepository extends CrudRepository<SuperCategory, Integer> {

    List<SuperCategory> findByScatName(String name);
}
