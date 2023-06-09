package backend.dto;

import java.math.BigDecimal;

public class ProductModifyDTO {
    private Long productId;
    private String productName;
    private BigDecimal productPrice;
    private String productVersion;

    private String productStatus;
    private Long companyId;
    private Long categoryId;
    private Long productStock;
    public ProductModifyDTO(Long productId, String productName, BigDecimal productPrice, String productVersion, String productStatus, Long companyId, Long categoryId, Long productStock) {
        this.productId = productId;
        this.productName = productName;
        this.productPrice = productPrice;
        this.productVersion = productVersion;
        this.productStatus = productStatus;
        this.companyId = companyId;
        this.categoryId = categoryId;
        this.productStock = productStock;
    }



    public Long getProductStock() {
        return productStock;
    }

    public void setProductStock(Long productStock) {
        this.productStock = productStock;
    }




    public ProductModifyDTO() {
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


    public String getProductVersion() {
        return productVersion;
    }

    public void setProductVersion(String productVersion) {
        this.productVersion = productVersion;
    }







    public String getProductStatus() {
        return productStatus;
    }

    public void setProductStatus(String productStatus) {
        this.productStatus = productStatus;
    }

    public Long getCompanyId() {
        return companyId;
    }

    public void setCompanyId(Long companyId) {
        this.companyId = companyId;
    }

    public Long getCategoryId() {
        return categoryId;
    }

    public void setCategoryId(Long categoryId) {
        this.categoryId = categoryId;
    }

}
