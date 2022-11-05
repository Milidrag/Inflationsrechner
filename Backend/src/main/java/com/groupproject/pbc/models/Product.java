package com.groupproject.pbc.models;

import javax.persistence.*;

@Entity
@Table(name = "product")
public class Product {

    public Product() {
    }

    public Product(String prodName, float prodSize, float prodInflAug, float prodInflJul, float prodInflChangeAug,
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

    private float prodSize;

    private float prodInflAug;

    private float prodInflJul;

    private float prodInflChangeAug;

    private int prodSum;

    @ManyToOne(fetch = FetchType.EAGER, optional = false)
    @JoinColumn(name = "scatId", nullable = false)
    private SuperCategory prodScat;


    @ManyToOne(fetch = FetchType.EAGER, optional = false)
    @JoinColumn(name = "catId", nullable = false)
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

    public float getProdSize() {
        return prodSize;
    }

    public void setProdSize(float prodSize) {
        this.prodSize = prodSize;
    }

    public float getProdInflAug() {
        return prodInflAug;
    }

    public void setProdInflAug(float prodInflAug) {
        this.prodInflAug = prodInflAug;
    }

    public float getProdInflJul() {
        return prodInflJul;
    }

    public void setProdInflJul(float prodInflJul) {
        this.prodInflJul = prodInflJul;
    }

    public float getProdInflChangeAug() {
        return prodInflChangeAug;
    }

    public void setProdInflChangeAug(float prodInflChangeAug) {
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
