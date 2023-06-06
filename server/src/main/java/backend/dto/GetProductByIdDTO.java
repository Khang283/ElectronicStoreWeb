package backend.dto;

import backend.models.Assets;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;

public class GetProductByIdDTO {
    private String productName;
    private BigDecimal productPrice;
    private int productSale;
    private String productIcon;
    private String productVersion;
    private Long productRating;
    private Long productSold;
    private String productStatus;
    private String company;
    private String category;
    private List<String> assets = new ArrayList<>();

    public GetProductByIdDTO() {
    }

    public GetProductByIdDTO(String productName, BigDecimal productPrice, int productSale, String productIcon, String productVersion, Long productRating, Long productSold, String productStatus, String company, String category, List<String> assets) {
        this.productName = productName;
        this.productPrice = productPrice;
        this.productSale = productSale;
        this.productIcon = productIcon;
        this.productVersion = productVersion;
        this.productRating = productRating;
        this.productSold = productSold;
        this.productStatus = productStatus;
        this.company = company;
        this.category = category;
        this.assets = assets;
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

    public int getProductSale() {
        return productSale;
    }

    public void setProductSale(int productSale) {
        this.productSale = productSale;
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

    public List<String> getAssets() {
        return assets;
    }

    public void setAssets(List<String> assets) {
        this.assets = assets;
    }
}
