package backend.dto;

import java.util.List;
import java.math.BigDecimal;
public class ProductDetailDTO {
    private Long productId;
    private String productName;
    private BigDecimal productPrice;
    private List<String> ImagePath;
    private String productVersion;
    private Long productRating;
    private Long productSold;
    private String productStatus;
    private String company;
    private List<String> SpecInfo;
    public ProductDetailDTO() {
    }

    public ProductDetailDTO(Long productId, String productName, BigDecimal productPrice, List<String> ImagePath, String productVersion, Long productRating, Long productSold, String productStatus, String company, List<String> SpecInfo) {
        this.productId = productId;
        this.productName = productName;
        this.productPrice = productPrice;
        this.ImagePath = ImagePath;
        this.productVersion = productVersion;
        this.productRating = productRating;
        this.productSold = productSold;
        this.productStatus = productStatus;
        this.company = company;
        this.SpecInfo = SpecInfo;
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

    public List<String> getImagePath() {
        return ImagePath;
    }

    public void setImagePath(List<String> ImagePath) {
        this.ImagePath = ImagePath;
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

    public List<String> getSpecInfo() {
        return SpecInfo;
    }

    public void setSpecInfo(List<String> SpecInfo) {
        this.SpecInfo = SpecInfo;
    }
}
