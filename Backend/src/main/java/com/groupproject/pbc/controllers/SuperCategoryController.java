package com.groupproject.pbc.controllers;

import com.groupproject.pbc.models.SuperCategory;
import com.groupproject.pbc.repositories.CategoryRepository;
import com.groupproject.pbc.repositories.SuperCategoryRepository;
import io.swagger.v3.oas.annotations.Operation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
@CrossOrigin(origins = "*")
@RequestMapping(path="/pbc")
public class SuperCategoryController {

    @Autowired
    private SuperCategoryRepository superCategoryRepository;

    @Autowired
    private CategoryRepository categoryRepository;

    @GetMapping(path="/super-categories")
    @Operation(summary = "Returns all super-categories")
    public @ResponseBody Iterable<SuperCategory> getAllSuperCategories()
    {
        return superCategoryRepository.findAll();
    }

    @GetMapping(path="/super-category-by-name")
    @Operation(summary = "Returns all super-categories filtered by name")
    public @ResponseBody Iterable<SuperCategory> getSuperCategoryByName (@RequestParam String name)
    {
        return superCategoryRepository.findByScatName(name);
    }
}
