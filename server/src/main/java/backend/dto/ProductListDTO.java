package backend.dto;

import java.math.BigDecimal;
<<<<<<< HEAD

public class ProductListDTO {
    private Long productId;
=======
import java.lang.Long;
public class ProductListDTO {
>>>>>>> 4a1f7dc8f36597c9808936e8c20069c06465542f
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

<<<<<<< HEAD
    public ProductListDTO(Long productId, String productName, BigDecimal productPrice, String productIcon, String productVersion, Long productRating, Long productSold, String productStatus, String company, String category) {
        this.productId = productId;
=======
    public ProductListDTO(String productName, BigDecimal productPrice, String productIcon, String productVersion, Long productRating, Long productSold, String productStatus, String company, String category) {
>>>>>>> 4a1f7dc8f36597c9808936e8c20069c06465542f
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

<<<<<<< HEAD
    public Long getProductId() {
        return productId;
    }

    public void setProductId(Long productId) {
        this.productId = productId;
    }

=======
>>>>>>> 4a1f7dc8f36597c9808936e8c20069c06465542f
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