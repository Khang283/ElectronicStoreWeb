package backend.models;

import jakarta.persistence.*;

import java.io.Serializable;
import java.util.Date;

@Entity(name = "product_detail")
public class ProductDetail {
    @EmbeddedId
    private ProductDetailId productDetailId;
    @Column(name = "created_at")
    private Date createdAt;
    @Column(name = "modified_at")
    private Date modifiedAt;
    @Column(name = "deleted")
    private boolean deleted;
    private static class ProductDetailId implements Serializable{
        @Column(name = "product_id")
        private Long productId;
        @Column(name = "spec_id")
        private Long specId;

        public ProductDetailId() {
        }

        public ProductDetailId(Long productId, Long specId) {
            this.productId = productId;
            this.specId = specId;
        }

        public Long getProductId() {
            return productId;
        }

        public void setProductId(Long productId) {
            this.productId = productId;
        }

        public Long getSpecId() {
            return specId;
        }

        public void setSpecId(Long specId) {
            this.specId = specId;
        }
    }

    public ProductDetail() {
    }

    public ProductDetail(ProductDetailId productDetailId, Date createdAt, Date modifiedAt, boolean deleted) {
        this.productDetailId = productDetailId;
        this.createdAt = createdAt;
        this.modifiedAt = modifiedAt;
        this.deleted = deleted;
    }

    public ProductDetailId getProductDetailId() {
        return productDetailId;
    }

    public void setProductDetailId(ProductDetailId productDetailId) {
        this.productDetailId = productDetailId;
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
