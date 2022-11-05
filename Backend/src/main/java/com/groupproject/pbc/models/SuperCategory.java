package com.groupproject.pbc.models;

import javax.persistence.*;

@Entity
@Table(name = "super_category")
public class SuperCategory {


    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    private Integer scatId;

    private String scatName;

//    @OneToMany(mappedBy = "superCategory", fetch = FetchType.LAZY,
//            cascade = CascadeType.MERGE)
//    private Set<Category> categories;

    public Integer getScatId() {
        return scatId;
    }

    public void setScatId(Integer scatId) {
        this.scatId = scatId;
    }

    public String getScatName() {
        return scatName;
    }

    public void setScatName(String scatName) {
        this.scatName = scatName;
    }

}
