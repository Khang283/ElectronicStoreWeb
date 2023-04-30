/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package backend.dto;
import java.math.BigDecimal;
import java.util.List;
import java.util.ArrayList;
import java.lang.Long;
/**
 *
 * @author DELL
 */
public class ModifyProductDTO {
    private Long productId;
     private String productName;
    private BigDecimal productPrice;
    private String productVersion;
    private Long productRating;
    private Long productSold;
    private String productStatus;
    private Long companyId;
    private Long categoryId;
    private Long productStock;
    private List <ModifyAssetDTO> productAsset = new ArrayList<>();
    private List <ModifySpecDTO> productDetail = new ArrayList<>();

    public ModifyProductDTO(Long productId, String productName, BigDecimal productPrice, String productVersion, Long productRating, Long productSold, String productStatus, Long companyId, Long categoryId, Long productStock) {
        this.productId = productId;
        this.productName = productName;
        this.productPrice = productPrice;
        this.productVersion = productVersion;
        this.productRating = productRating;
        this.productSold = productSold;
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

    
    

    public ModifyProductDTO() {
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

    

    public List<ModifyAssetDTO> getProductAsset() {
        return productAsset;
    }

    public List<ModifySpecDTO> getProductDetail() {
        return productDetail;
    }
    
}
