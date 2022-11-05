package com.groupproject.pbc.controllers;

import com.groupproject.pbc.models.SuperCategory;
import com.groupproject.pbc.repositories.CategoryRepository;
import com.groupproject.pbc.repositories.SuperCategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
@RequestMapping(path="/pbc")
public class SuperCategoryController {

    @Autowired
    private SuperCategoryRepository superCategoryRepository;

    @Autowired
    private CategoryRepository categoryRepository;


    @PostMapping(path="/super-category")
    public @ResponseBody String addNewSuperCategory (@RequestParam String name)
    {

        SuperCategory superCategory = new SuperCategory();
        superCategory.setScatName(name);
        superCategoryRepository.save(superCategory);
        return "Saved";
    }

    @GetMapping(path="/super-category")
    public @ResponseBody Iterable<SuperCategory> getAllSuperCategories()
    {
        return superCategoryRepository.findAll();
    }

    @GetMapping(path="/super-category-by-name")
    public @ResponseBody Iterable<SuperCategory> getSuperCategoryByName (@RequestParam String name)
    {
        return superCategoryRepository.findByScatName(name);
    }
}
