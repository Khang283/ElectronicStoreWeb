package backend.dto;

import java.math.BigDecimal;

public class ProductListDTO {
    private Long productId;
    private String productName;
    private BigDecimal productPrice;
    private String productIcon;
    private String productVersion;
    private Long productRating;
    private Long productSold;
    private String productStatus;
    private String company;
    private String category;

    public ProductListDTO() {
    }

    public ProductListDTO(Long productId, String productName, BigDecimal productPrice, String productIcon, String productVersion, Long productRating, Long productSold, String productStatus, String company, String category) {
        this.productId = productId;
        this.productName = productName;
        this.productPrice = productPrice;
        this.productIcon = productIcon;
        this.productVersion = productVersion;
        this.productRating = productRating;
        this.productSold = productSold;
        this.productStatus = productStatus;
        this.company = company;
        this.category = category;
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

    public BigDecimal getProductPrice() {
        return productPrice;
    }

    public void setProductPrice(BigDecimal productPrice) {
        this.productPrice = productPrice;
    }

    public String getProductIcon() {
        return productIcon;
    }

    public void setProductIcon(String productIcon) {
        this.productIcon = productIcon;
    }

    public String getProductVersion() {
        return productVersion;
    }

    public void setProductVersion(String productVersion) {
        this.productVersion = productVersion;
    }

    public Long getProductRating() {
        return productRating;
    }

    public void setProductRating(Long productRating) {
        this.productRating = productRating;
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

    public String getCompany() {
        return company;
    }

    public void setCompany(String company) {
        this.company = company;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }
}
