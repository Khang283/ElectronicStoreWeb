package backend.models;

import jakarta.persistence.*;
import org.hibernate.annotations.Columns;

import java.util.Date;

@Entity
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="product_id")
    private Long product_id;

    @Column(name="product_name")
    private String product_name;
    @Column(name="category_id")
    private Long category_id;
    @Column(name="company_id")
    private Long company_id;
    @Column(name="product_version")
    private String product_version;
    @Column(name="product_stock")
    private Long product_stock;
    @Column(name="product_rating")
    private Long product_rating;
    @Column(name="product_price")
    private Double product_price;
    @Column(name="product_sold")
    private Long product_sold;
    @Column(name="product_status")
    private String product_status;
    @Column(name="created_at")
    private Date created_at;
    @Column(name="modified_at")
    private Date modified_at;
    @Column(name="deleted")
    private boolean deleted;

    public Product(Long product_id, String product_name, Long category_id, Long company_id, String product_version, Long product_stock, Long product_rating, Double product_price, Long product_sold, String product_status, Date created_at, Date modified_at, boolean deleted) {
        this.product_id = product_id;
        this.product_name = product_name;
        this.category_id = category_id;
        this.company_id = company_id;
        this.product_version = product_version;
        this.product_stock = product_stock;
        this.product_rating = product_rating;
        this.product_price = product_price;
        this.product_sold = product_sold;
        this.product_status = product_status;
        this.created_at = created_at;
        this.modified_at = modified_at;
        this.deleted = deleted;
    }

    public Product() {
    }

    public Long getProduct_id() {
        return product_id;
    }

    public void setProduct_id(Long product_id) {
        this.product_id = product_id;
    }

    public String getProduct_name() {
        return product_name;
    }

    public void setProduct_name(String product_name) {
        this.product_name = product_name;
    }

    public Long getCategory_id() {
        return category_id;
    }

    public void setCategory_id(Long category_id) {
        this.category_id = category_id;
    }

    public Long getCompany_id() {
        return company_id;
    }

    public void setCompany_id(Long company_id) {
        this.company_id = company_id;
    }

    public String getProduct_version() {
        return product_version;
    }

    public void setProduct_version(String product_version) {
        this.product_version = product_version;
    }

    public Long getProduct_stock() {
        return product_stock;
    }

    public void setProduct_stock(Long product_stock) {
        this.product_stock = product_stock;
    }

    public Long getProduct_rating() {
        return product_rating;
    }

    public void setProduct_rating(Long product_rating) {
        this.product_rating = product_rating;
    }

    public Double getProduct_price() {
        return product_price;
    }

    public void setProduct_price(Double product_price) {
        this.product_price = product_price;
    }

    public Long getProduct_sold() {
        return product_sold;
    }

    public void setProduct_sold(Long product_sold) {
        this.product_sold = product_sold;
    }

    public String getProduct_status() {
        return product_status;
    }

    public void setProduct_status(String product_status) {
        this.product_status = product_status;
    }

    public Date getCreated_at() {
        return created_at;
    }

    public void setCreated_at(Date created_at) {
        this.created_at = created_at;
    }

    public Date getModified_at() {
        return modified_at;
    }

    public void setModified_at(Date modified_at) {
        this.modified_at = modified_at;
    }

    public boolean isDeleted() {
        return deleted;
    }

    public void setDeleted(boolean deleted) {
        this.deleted = deleted;
    }
}
