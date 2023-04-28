package backend.dto;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;

public class InsertProductDTO {
    private String productName;
    private int categoryId;
    private int companyId;
    private String productVersion;
    private int productStock;
    private BigDecimal productPrice;

    private List<InsertAssetDTO> lstAsset = new ArrayList<>();
    private List<InsertSpecDTO> lstSpec= new ArrayList<>();

    public InsertProductDTO() {
    }

    public InsertProductDTO(String productName, int categoryId, int companyId, String productVersion, int productStock, BigDecimal productPrice, List<InsertAssetDTO> lstAsset, List<InsertSpecDTO> lstSpec) {
        this.productName = productName;
        this.categoryId = categoryId;
        this.companyId = companyId;
        this.productVersion = productVersion;
        this.productStock = productStock;
        this.productPrice = productPrice;
        this.lstAsset = lstAsset;
        this.lstSpec = lstSpec;
    }

    public String getProductName() {
        return productName;
    }

    public void setProductName(String productName) {
        this.productName = productName;
    }

    public int getCategoryId() {
        return categoryId;
    }

    public void setCategoryId(int categoryId) {
        this.categoryId = categoryId;
    }

    public int getCompanyId() {
        return companyId;
    }

    public void setCompanyId(int companyId) {
        this.companyId = companyId;
    }

    public String getProductVersion() {
        return productVersion;
    }

    public void setProductVersion(String productVersion) {
        this.productVersion = productVersion;
    }

    public int getProductStock() {
        return productStock;
    }

    public void setProductStock(int productStock) {
        this.productStock = productStock;
    }

    public double getProductPrice() {
        return productPrice.doubleValue();
    }

    public void setProductPrice(BigDecimal productPrice) {
        this.productPrice = productPrice;
    }

    public List<InsertAssetDTO> getLstAsset() {
        return lstAsset;
    }

    public void setLstAsset(List<InsertAssetDTO> lstAsset) {
        this.lstAsset = lstAsset;
    }

    public List<InsertSpecDTO> getLstSpec() {
        return lstSpec;
    }

    public void setLstSpec(List<InsertSpecDTO> lstSpec) {
        this.lstSpec = lstSpec;
    }
}

