package backend.models;

import jakarta.persistence.*;
import org.hibernate.annotations.Columns;

import java.math.BigDecimal;
import java.util.Currency;
import java.util.Date;

@Entity(name = "product")
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="product_id")
    private Long productId;
    @Column(name="product_name")
    private String productName;
    @Column(name="category_id")
    private Long categoryId;
    @Column(name="company_id")
    private Long companyId;
    @Column(name="product_version")
    private String productVersion;
    @Column(name="product_stock")
    private Long productStock;
    @Column(name="product_rating")
    private Long productRating;
    @Column(name="product_price")
    private BigDecimal productPrice;
    @Column(name="product_sold")
    private Long productSold;
    @Column(name="product_status")
    private String productStatus;
    @Column(name="created_at")
    private Date createdAt;
    @Column(name="modified_at")
    private Date modifiedAt;
    @Column(name="deleted")
    private boolean deleted;

    public Product(Long productId, String productName, Long categoryId, Long companyId, String productVersion, Long productStock, Long productRating, BigDecimal productPrice, Long productSold, String productStatus, Date createdAt, Date modifiedAt, boolean deleted) {
        this.productId = productId;
        this.productName = productName;
        this.categoryId = categoryId;
        this.companyId = companyId;
        this.productVersion = productVersion;
        this.productStock = productStock;
        this.productRating = productRating;
        this.productPrice = productPrice;
        this.productSold = productSold;
        this.productStatus = productStatus;
        this.createdAt = createdAt;
        this.modifiedAt = modifiedAt;
        this.deleted = deleted;
    }

    public Product() {
    }

    public Long getProductId() {
        return productId;
    }

    public void setProductId(Long productId) {
        this.productId = productId;
    }

    public String getProductName() {
        return productName;
    }

    public void setProductName(String productName) {
        this.productName = productName;
    }

    public Long getCategoryId() {
        return categoryId;
    }

    public void setCategoryId(Long categoryId) {
        this.categoryId = categoryId;
    }

    public Long getCompanyId() {
        return companyId;
    }

    public void setCompanyId(Long companyId) {
        this.companyId = companyId;
    }

    public String getProductVersion() {
        return productVersion;
    }

    public void setProductVersion(String productVersion) {
        this.productVersion = productVersion;
    }

    public Long getProductStock() {
        return productStock;
    }

    public void setProductStock(Long productStock) {
        this.productStock = productStock;
    }

    public Long getProductRating() {
        return productRating;
    }

    public void setProductRating(Long productRating) {
        this.productRating = productRating;
    }

    public BigDecimal getProductPrice() {
        return productPrice;
    }

    public void setProductPrice(BigDecimal productPrice) {
        this.productPrice = productPrice;
    }

    public Long getProductSold() {
        return productSold;
    }

    public void setProductSold(Long productSold) {
        this.productSold = productSold;
    }

    public String getProductStatus() {
        return productStatus;
    }

    public void setProductStatus(String productStatus) {
        this.productStatus = productStatus;
    }

    public Date getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(Date createdAt) {
        this.createdAt = createdAt;
    }

    public Date getModifiedAt() {
        return modifiedAt;
    }

    public void setModifiedAt(Date modifiedAt) {
        this.modifiedAt = modifiedAt;
    }

    public boolean isDeleted() {
        return deleted;
    }

    public void setDeleted(boolean deleted) {
        this.deleted = deleted;
    }
}