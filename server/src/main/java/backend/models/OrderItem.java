package backend.models;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;

import java.util.Date;

@Entity(name = "order_item")
public class OrderItem {
    @Column(name="order_id")
    private Long orderId;
    @Column(name="product_id")
    private Long productId;
    @Column(name="price")
    private Double price;
    @Column(name="quantity")
    private Double quantity;
    @Column(name="created_at")
    private Date createdAt;
    @Column(name="modified_at")
    private Date modifiedAt;
    @Column(name="deleted")
    private boolean deleted;

    public OrderItem(Long orderId, Long productId, Double price, Double quantity, Date createdAt, Date modifiedAt, boolean deleted) {
        this.orderId = orderId;
        this.productId = productId;
        this.price = price;
        this.quantity = quantity;
        this.createdAt = createdAt;
        this.modifiedAt = modifiedAt;
        this.deleted = deleted;
    }

    public OrderItem() {
    }

    public Long getOrderId() {
        return orderId;
    }

    public void setOrderId(Long orderId) {
        this.orderId = orderId;
    }

    public Long getProductId() {
        return productId;
    }

    public void setProductId(Long productId) {
        this.productId = productId;
    }

    public Double getPrice() {
        return price;
    }

    public void setPrice(Double price) {
        this.price = price;
    }

    public Double getQuantity() {
        return quantity;
    }

    public void setQuantity(Double quantity) {
        this.quantity = quantity;
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
