package backend.models;

import jakarta.annotation.Nullable;
import jakarta.persistence.*;

import java.util.Date;

@Entity(name = "assets")
public class Assets {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "asset_id")
    private Long assetId;
    @Column(name = "asset_name")
    private String assetName;
    @Column(name = "asset_path")
    private String assetPath;
    @Column(name = "asset_type")
    private String assetType;
    @Nullable
    @Column(name = "created_at")
    private Date createdAt;
    @Nullable
    @Column(name = "modified_at")
    private Date modifiedAt;
    @Nullable
    @Column(name = "deleted")
    private boolean deleted;

    public Assets() {
    }

    public Assets(Long asset_id, String assetName, String assetPath, String assetType, Date createdAt, Date modifiedAt, boolean deleted) {
        this.assetId = asset_id;
        this.assetName = assetName;
        this.assetPath = assetPath;
        this.assetType = assetType;
        this.createdAt = createdAt;
        this.modifiedAt = modifiedAt;
        this.deleted = deleted;
    }

    public Long getAssetId() {
        return assetId;
    }

    public void setAssetId(Long assetId) {
        this.assetId = assetId;
    }

    public String getAssetName() {
        return assetName;
    }

    public void setAssetName(String assetName) {
        this.assetName = assetName;
    }

    public String getAssetPath() {
        return assetPath;
    }

    public void setAssetPath(String assetPath) {
        this.assetPath = assetPath;
    }

    public String getAssetType() {
        return assetType;
    }

    public void setAssetType(String assetType) {
        this.assetType = assetType;
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
