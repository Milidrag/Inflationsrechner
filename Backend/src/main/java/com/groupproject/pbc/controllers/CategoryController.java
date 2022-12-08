package com.groupproject.pbc.controllers;

import com.groupproject.pbc.models.Category;
import com.groupproject.pbc.models.SuperCategory;
import com.groupproject.pbc.repositories.CategoryRepository;
import com.groupproject.pbc.repositories.SuperCategoryRepository;
import io.swagger.v3.oas.annotations.Operation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@Controller
@CrossOrigin(origins = "*")
@RequestMapping(path="/pbc")
public class CategoryController {

    @Autowired
    private SuperCategoryRepository superCategoryRepository;

    @Autowired
    private CategoryRepository categoryRepository;

    @GetMapping(path="/categories")
    @Operation(summary = "Returns all categories")
    public @ResponseBody Iterable<Category> getAllCategories()
    {
        return categoryRepository.findAll();
    }

    @GetMapping(path="/category-by-name")
    @Operation(summary = "Returns all categories filtered by name")
    public @ResponseBody Iterable<Category> getCategoryByName (@RequestParam String name)
    {
        return categoryRepository.findByCatName(name);
    }

    @GetMapping(path="/category-by-super-category")
    @Operation(summary = "Returns all supercategories, filtered by scatId")
    public @ResponseBody Iterable<Category> getCategoryBySuperCategory (@RequestParam Integer scatId)
    {
        Optional<SuperCategory> superCategory = superCategoryRepository.findById(scatId);

        return categoryRepository.findByCatScat(superCategory);
    }
}
