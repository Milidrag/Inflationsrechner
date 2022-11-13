package com.groupproject.pbc.controllers;

import com.groupproject.pbc.models.Category;
import com.groupproject.pbc.models.Product;
import com.groupproject.pbc.models.SuperCategory;
import com.groupproject.pbc.repositories.CategoryRepository;
import com.groupproject.pbc.repositories.ProductRepository;
import com.groupproject.pbc.repositories.SuperCategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@Controller
@CrossOrigin(origins = "*")
@RequestMapping(path = "/pbc")
public class ProductController {

    @Autowired
    private ProductRepository productRepository;

    @Autowired
    private SuperCategoryRepository superCategoryRepository;

    @Autowired
    private CategoryRepository categoryRepository;

    @GetMapping(path = "/products")
    public @ResponseBody Iterable<Product> getAllProducts() {
        return productRepository.findAll();
    }

    @GetMapping(path = "/product-by-name")
    public @ResponseBody Iterable<Product> getSuperCategoryByName(@RequestParam String name) {
        return productRepository.findByProdName(name);
    }

    @GetMapping(path = "/product-by-super-category")
    public @ResponseBody Iterable<Product> getCategoryBySuperCategory(@RequestParam Integer scatId) {
        Optional<SuperCategory> superCategory = superCategoryRepository.findById(scatId);

        if (superCategory == null) {
            //TODO error handling, maybe try catch block?
        }

        return productRepository.findByProdScat(superCategory.get());
    }

    @GetMapping(path = "/product-by-category")
    public @ResponseBody Iterable<Product> getCategoryByCategory(@RequestParam Integer catId) {
        Optional<Category> category = categoryRepository.findById(catId);

        if (category == null) {
            //TODO error handling, maybe try catch block?
        }

        return productRepository.findByProdCat(category.get());
    }

}
