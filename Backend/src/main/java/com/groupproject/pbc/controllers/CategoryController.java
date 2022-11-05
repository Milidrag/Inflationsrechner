package com.groupproject.pbc.controllers;

import com.groupproject.pbc.models.Category;
import com.groupproject.pbc.models.SuperCategory;
import com.groupproject.pbc.repositories.CategoryRepository;
import com.groupproject.pbc.repositories.SuperCategoryRepository;
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


    @PostMapping(path="/category")
    public @ResponseBody String addNewCategory (@RequestParam String name, @RequestParam Integer scatId)
    {
        Optional<SuperCategory> superCategoryOptional = superCategoryRepository.findById(scatId);

        if (!superCategoryOptional.isPresent()) {
            //TODO error handling, maybe try catch block?
        }
        SuperCategory superCategory = superCategoryOptional.get();
        Category category = new Category(name, superCategory);
        categoryRepository.save(category);
        return "Saved";
    }

    @GetMapping(path="/category")
    public @ResponseBody Iterable<Category> getAllCategories()
    {
        return categoryRepository.findAll();
    }

    @GetMapping(path="/category-by-name")
    public @ResponseBody Iterable<Category> getCategoryByName (@RequestParam String name)
    {
        return categoryRepository.findByCatName(name);
    }
}
