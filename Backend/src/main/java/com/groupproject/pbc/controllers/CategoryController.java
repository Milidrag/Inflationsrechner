package com.groupproject.pbc.controllers;

import com.groupproject.pbc.models.Category;
import com.groupproject.pbc.models.SuperCategory;
import com.groupproject.pbc.repositories.CategoryRepository;
import com.groupproject.pbc.repositories.SuperCategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.math.BigDecimal;
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
    public @ResponseBody Iterable<Category> getAllCategories()
    {
        return categoryRepository.findAll();
    }

    @GetMapping(path="/category-by-name")
    public @ResponseBody Iterable<Category> getCategoryByName (@RequestParam String name)
    {
        return categoryRepository.findByCatName(name);
    }

    @GetMapping(path="/category-by-super-category")
    public @ResponseBody Iterable<Category> getCategoryBySuperCategory (@RequestParam Integer scatId)
    {
        Optional<SuperCategory> superCategory = superCategoryRepository.findById(scatId);

        if (superCategory == null) {
            //TODO error handling, maybe try catch block?
        }
        return categoryRepository.findByCatScat(superCategory);
    }

}
