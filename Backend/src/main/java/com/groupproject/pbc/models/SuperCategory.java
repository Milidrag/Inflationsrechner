package com.groupproject.pbc.models;

import javax.persistence.*;
import java.math.BigDecimal;

@Entity
@Table(name = "super_category")
public class SuperCategory {

    public SuperCategory(String scatName, BigDecimal scatSize, BigDecimal scatInflAug, BigDecimal scatInflJul, BigDecimal scatInflChangeAug) {
        this.scatName = scatName;
        this.scatSize = scatSize;
        this.scatInflAug = scatInflAug;
        this.scatInflJul = scatInflJul;
        this.scatInflChangeAug = scatInflChangeAug;
    }

    public SuperCategory() {
    }

    //TODO Zorana: delete constructor after controller call has been updated
    public SuperCategory(String scatName) {
        this.scatName = scatName;
    }

    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    private Integer scatId;

    private String scatName;

    @Column(precision = 10, scale = 2)
    private BigDecimal scatSize;

    @Column(precision = 10, scale = 2)
    private BigDecimal scatInflAug;

    @Column(precision = 10, scale = 2)
    private BigDecimal scatInflJul;

    @Column(precision = 10, scale = 2)
    private BigDecimal scatInflChangeAug;

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

    public BigDecimal getScatSize() {
        return scatSize;
    }

    public void setScatSize(BigDecimal scatSize) {
        this.scatSize = scatSize;
    }

    public BigDecimal getScatInflAug() {
        return scatInflAug;
    }

    public void setScatInflAug(BigDecimal scatInflAug) {
        this.scatInflAug = scatInflAug;
    }

    public BigDecimal getScatInflJul() {
        return scatInflJul;
    }

    public void setScatInflJul(BigDecimal scatInflJul) {
        this.scatInflJul = scatInflJul;
    }

    public BigDecimal getScatInflChangeAug() {
        return scatInflChangeAug;
    }

    public void setScatInflChangeAug(BigDecimal scatInflChangeAug) {
        this.scatInflChangeAug = scatInflChangeAug;
    }
}
