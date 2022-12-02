package com.groupproject.pbc.models;

import javax.persistence.*;
import java.math.BigDecimal;

@Entity
@Table(name = "product")
public class Product {

    public Product() {
    }

    public Product(String prodName, BigDecimal prodSize, BigDecimal prodInflAug, BigDecimal prodInflJul, BigDecimal prodInflChangeAug,
                   int prodSum, SuperCategory prodScat, Category prodCat) {
        this.prodName = prodName;
        this.prodSize = prodSize;
        this.prodInflAug = prodInflAug;
        this.prodInflJul = prodInflJul;
        this.prodInflChangeAug = prodInflChangeAug;
        this.prodSum = prodSum;
        this.prodScat = prodScat;
        this.prodCat = prodCat;
    }

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer prodId;

    private String prodName;

    @Column(precision = 10, scale = 2)
    private BigDecimal prodSize;

    @Column(precision = 10, scale = 2)
    private BigDecimal prodInflAug;

    @Column(precision = 10, scale = 2)
    private BigDecimal prodInflJul;

    @Column(precision = 10, scale = 2)
    private BigDecimal prodInflChangeAug;

    @Column(precision = 1, scale = 0)
    private int prodSum;

    @ManyToOne(fetch = FetchType.EAGER, optional = false)
    @JoinColumn(name = "prod_scat", nullable = false)
    private SuperCategory prodScat;


    @ManyToOne(fetch = FetchType.EAGER, optional = false)
    @JoinColumn(name = "prod_cat", nullable = false)
    private Category prodCat;


    public Integer getProdId() {
        return prodId;
    }

    public void setProdId(Integer prodId) {
        this.prodId = prodId;
    }

    public String getProdName() {
        return prodName;
    }

    public void setProdName(String prodName) {
        this.prodName = prodName;
    }

    public BigDecimal getProdSize() {
        return prodSize;
    }

    public void setProdSize(BigDecimal prodSize) {
        this.prodSize = prodSize;
    }

    public BigDecimal getProdInflAug() {
        return prodInflAug;
    }

    public void setProdInflAug(BigDecimal prodInflAug) {
        this.prodInflAug = prodInflAug;
    }

    public BigDecimal getProdInflJul() {
        return prodInflJul;
    }

    public void setProdInflJul(BigDecimal prodInflJul) {
        this.prodInflJul = prodInflJul;
    }

    public BigDecimal getProdInflChangeAug() {
        return prodInflChangeAug;
    }

    public void setProdInflChangeAug(BigDecimal prodInflChangeAug) {
        this.prodInflChangeAug = prodInflChangeAug;
    }

    public int getProdSum() {
        return prodSum;
    }

    public void setProdSum(int prodSum) {
        this.prodSum = prodSum;
    }

    public SuperCategory getProdScat() {
        return prodScat;
    }

    public void setProdScat(SuperCategory prodScat) {
        this.prodScat = prodScat;
    }

    public Category getProdCat() {
        return prodCat;
    }

    public void setProdCat(Category prodCat) {
        this.prodCat = prodCat;
    }
}
