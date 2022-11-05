package com.groupproject.pbc.models;

import javax.persistence.*;

@Entity
@Table(name = "category")
public class Category {


    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    private Integer catId;

    private String catName;

    @ManyToOne(fetch = FetchType.EAGER, optional = false)
    @JoinColumn(name = "scatId", nullable = false)
    private SuperCategory superCategory;

    public Category (String catName, SuperCategory superCategory) {
        this.catName = catName;
        this.superCategory = superCategory;
    }

    public Category() {

    }


    public Integer getCatId() {
        return catId;
    }

    public void setCatId(Integer catId) {
        this.catId = catId;
    }

    public String getCatName() {
        return catName;
    }

    public void setCatName(String catName) {
        this.catName = catName;
    }

    public SuperCategory getSuperCategory() {
        return superCategory;
    }

    public void setSuperCategory(SuperCategory superCategory) {
        this.superCategory = superCategory;
    }

}
