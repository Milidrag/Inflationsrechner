package com.groupproject.pbc.models;

import javax.persistence.*;
import java.math.BigDecimal;

@Entity
@Table(name = "category")
public class Category {

    public Category(String catName, SuperCategory catScat, BigDecimal catSize, BigDecimal catInflAug,
                    BigDecimal catInflJul, BigDecimal catInflChangeAug, BigDecimal catInflChangeJul) {
        this.catName = catName;
        this.catScat = catScat;
        this.catSize = catSize;
        this.catInflAug = catInflAug;
        this.catInflJul = catInflJul;
        this.catInflChangeAug = catInflChangeAug;
        this.catInflChangeJul = catInflChangeJul;
    }

    public Category() {

    }


    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer catId;

    private String catName;

    @ManyToOne(fetch = FetchType.EAGER, optional = false)
    @JoinColumn(name = "cat_scat", nullable = false)
    private SuperCategory catScat;

    @Column(precision = 10, scale = 2)
    private BigDecimal catSize;

    @Column(precision = 10, scale = 2)
    private BigDecimal catInflAug;

    @Column(precision = 10, scale = 2)
    private BigDecimal catInflJul;

    @Column(precision = 10, scale = 2)
    private BigDecimal catInflChangeAug;


    @Column(precision = 10, scale = 2)
    private BigDecimal catInflChangeJul;

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

    public SuperCategory getCatScat() {
        return catScat;
    }

    public void setCatScat(SuperCategory catScat) {
        this.catScat = catScat;
    }

    public BigDecimal getCatSize() {
        return catSize;
    }

    public void setCatSize(BigDecimal catSize) {
        this.catSize = catSize;
    }

    public BigDecimal getCatInflAug() {
        return catInflAug;
    }

    public void setCatInflAug(BigDecimal catInflAug) {
        this.catInflAug = catInflAug;
    }

    public BigDecimal getCatInflJul() {
        return catInflJul;
    }

    public void setCatInflJul(BigDecimal catInflJul) {
        this.catInflJul = catInflJul;
    }

    public BigDecimal getCatInflChangeAug() {
        return catInflChangeAug;
    }

    public void setCatInflChangeAug(BigDecimal catInflChangeAug) {
        this.catInflChangeAug = catInflChangeAug;
    }

    public BigDecimal getCatInflChangeJul() {
        return catInflChangeJul;
    }

    public void setCatInflChangeJul(BigDecimal catInflChangeJul) {
        this.catInflChangeJul = catInflChangeJul;
    }

}
