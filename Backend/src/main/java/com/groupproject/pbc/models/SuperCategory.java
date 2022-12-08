package com.groupproject.pbc.models;

import javax.persistence.*;
import java.math.BigDecimal;

@Entity
@Table(name = "super_category")
public class SuperCategory {

    public SuperCategory(String scatName, BigDecimal scatSize, BigDecimal scatInflAug, BigDecimal scatInflJul, BigDecimal scatInflChangeAug, BigDecimal scatInflChangeJul) {
        this.scatName = scatName;
        this.scatSize = scatSize;
        this.scatInflAug = scatInflAug;
        this.scatInflJul = scatInflJul;
        this.scatInflChangeAug = scatInflChangeAug;
        this.scatInflChangeJul = scatInflChangeJul;
    }

    public SuperCategory() {
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

    @Column(precision = 10, scale = 2)
    private BigDecimal scatInflChangeJul;


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

    public BigDecimal getScatInflChangeJul() {
        return scatInflChangeJul;
    }

    public void setScatInflChangeJul(BigDecimal scatInflChangeJul) {
        this.scatInflChangeJul = scatInflChangeJul;
    }
}
