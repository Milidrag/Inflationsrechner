package com.groupproject.pbc.controllers;

import com.groupproject.pbc.models.Category;
import com.groupproject.pbc.models.Product;
import com.groupproject.pbc.models.SuperCategory;
import com.groupproject.pbc.repositories.CategoryRepository;
import com.groupproject.pbc.repositories.ProductRepository;
import com.groupproject.pbc.repositories.SuperCategoryRepository;
import io.swagger.v3.oas.annotations.Operation;
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
    @Operation(summary = "Returns all products")
    public @ResponseBody Iterable<Product> getAllProducts() {
        return productRepository.findAll();
    }

    @GetMapping(path = "/product-by-name")
    @Operation(summary = "Returns all categories filtered by name")
    public @ResponseBody Iterable<Product> getSuperCategoryByName(@RequestParam String name) {
        return productRepository.findByProdName(name);
    }

    @GetMapping(path = "/product-by-super-category")
    @Operation(summary = "Returns all categories, filtered by scatId")
    public @ResponseBody Iterable<Product> getCategoryBySuperCategory(@RequestParam Integer scatId) {
        Optional<SuperCategory> superCategory = superCategoryRepository.findById(scatId);

        return productRepository.findByProdScat(superCategory.get());
    }

    @GetMapping(path = "/product-by-category")
    @Operation(summary = "Returns all products. Filtered by category")
    public @ResponseBody Iterable<Product> getCategoryByCategory(@RequestParam Integer catId) {
        Optional<Category> category = categoryRepository.findById(catId);

        return productRepository.findByProdCat(category.get());
    }
}
