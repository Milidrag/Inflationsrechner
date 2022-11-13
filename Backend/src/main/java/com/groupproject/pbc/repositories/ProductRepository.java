package com.groupproject.pbc.repositories;

import com.groupproject.pbc.models.Category;
import com.groupproject.pbc.models.Product;
import com.groupproject.pbc.models.SuperCategory;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface ProductRepository extends CrudRepository<Product, Integer> {

    List<Product> findByProdName(String name);

    List<Product> findByProdSize(Float prodSize);

    List<Product> findByProdInflAug(Float prodInflAug);

    List<Product> findByProdInflJul(Float prodInflJul);

    List<Product> findByProdInflChangeAug(Float prodInflChangeAug);

    List<Product> findByProdSum(int prodSum);


    List<Product> findByProdScat(SuperCategory prodScat);


    List<Product> findByProdCat(Category prodCat);

}
