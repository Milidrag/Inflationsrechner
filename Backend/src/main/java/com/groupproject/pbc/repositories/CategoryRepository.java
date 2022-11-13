package com.groupproject.pbc.repositories;


import com.groupproject.pbc.models.Category;
import com.groupproject.pbc.models.SuperCategory;
import org.springframework.data.repository.CrudRepository;


import java.util.List;
import java.util.Optional;

public interface CategoryRepository extends CrudRepository<Category, Integer> {

    List<Category> findByCatName(String name);

    List<Category> findByCatScat(Optional<SuperCategory> catScat);
}
