package com.groupproject.pbc.repositories;

import com.groupproject.pbc.models.Product;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface ProductController extends CrudRepository<Product, Integer> {

    List<Product> findByProdName(String name);

    List<Product> findByProdSize(Float prodSize);

    List<Product> findByProdInflAug(Float prodInflAug);

    List<Product> findByProdInflJul(Float prodInflJul);

    List<Product> findByProdInflChangeAug(Float prodInflChangeAug);

    List<Product> findByProdSum(int prodSum);


    List<Product> findByProdScat(Integer prodScat);


    List<Product> findByProdCat(Integer prodCat);

}
