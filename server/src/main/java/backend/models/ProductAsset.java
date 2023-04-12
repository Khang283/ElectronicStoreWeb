package backend.models;

import jakarta.persistence.*;

import java.awt.*;
import java.util.Date;

@Entity(name = "product_asset")
public class ProductAsset {
    @Id
    @Column(name = "product_asset_id")
    private Long productAssetId;
    @Column(name = "product_id")
    private Long productId;
    @Column(name = "asset_id")
    private Long assetId;
    @Column(name = "asset_role")
    private String assetRole;
    @Column(name = "created_at")
    private Date createdAt;
    @Column(name = "modified_at")
    private Date modifiedAt;
    @Column(name = "deleted")
    private boolean deleted;

    public ProductAsset() {
    }

    public ProductAsset(Long productId, Long assetId, String assetRole, Date createdAt, Date modifiedAt, boolean deleted) {
        this.productId = productId;
        this.assetId = assetId;
        this.assetRole = assetRole;
        this.createdAt = createdAt;
        this.modifiedAt = modifiedAt;
        this.deleted = deleted;
    }

    public Long getProductId() {
        return productId;
    }

    public void setProductId(Long productId) {
        this.productId = productId;
    }

    public Long getAssetId() {
        return assetId;
    }

    public void setAssetId(Long assetId) {
        this.assetId = assetId;
    }

    public String getAssetRole() {
        return assetRole;
    }

    public void setAssetRole(String assetRole) {
        this.assetRole = assetRole;
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
