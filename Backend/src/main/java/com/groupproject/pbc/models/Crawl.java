package com.groupproject.pbc.models;


import javax.persistence.*;
import java.math.BigDecimal;
import java.util.Date;

@Entity
@Table(name = "crawl")
public class Crawl {

    public Crawl() {

    }

    public Crawl(BigDecimal crawlPrice, Date crawlDate, Product crawlProd) {
        this.crawlPrice = crawlPrice;
        this.crawlDate = crawlDate;
        this.crawlProd = crawlProd;
    }

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer crawlId;

    @Column(precision = 10, scale = 2)
    private BigDecimal crawlPrice;

    private Date crawlDate;

    @ManyToOne(fetch = FetchType.EAGER, optional = false)
    @JoinColumn(name = "prodId", nullable = false)
    private Product crawlProd;


    public Integer getCrawlId() {
        return crawlId;
    }

    public void setCrawlId(Integer crawlId) {
        this.crawlId = crawlId;
    }

    public BigDecimal getCrawlPrice() {
        return crawlPrice;
    }

    public void setCrawlPrice(BigDecimal crawlPrice) {
        this.crawlPrice = crawlPrice;
    }

    public Date getCrawlDate() {
        return crawlDate;
    }

    public void setCrawlDate(Date crawlDate) {
        this.crawlDate = crawlDate;
    }

    public Product getCrawlProd() {
        return crawlProd;
    }

    public void setCrawlProd(Product crawlProd) {
        this.crawlProd = crawlProd;
    }
}
