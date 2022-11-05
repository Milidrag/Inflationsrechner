package com.groupproject.pbc.repositories;


import com.groupproject.pbc.models.Category;
import org.springframework.data.repository.CrudRepository;


import java.util.List;

public interface CategoryRepository extends CrudRepository<Category, Integer> {

    List<Category> findByCatName(String name);
}
