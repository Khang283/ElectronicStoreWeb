package backend.models;

import jakarta.persistence.*;

import java.io.Serial;
import java.io.Serializable;
import java.util.Date;

@Entity (name = "cart_item")
public class CartItem {
    @EmbeddedId
    private CartItemId cartItemId;
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

    public static class CartItemId implements Serializable {
        @Column(name="cart_id")
        private Long cartId;
        @Column(name="product_id")
        private Long productId;

        public Long getCartId() {
            return cartId;
        }

        public void setCartId(Long cartId) {
            this.cartId = cartId;
        }

        public Long getProductId() {
            return productId;
        }

        public void setProductId(Long productId) {
            this.productId = productId;
        }

        public CartItemId(Long cartId, Long productId) {
            this.cartId = cartId;
            this.productId = productId;
        }

        public CartItemId() {
        }
    }

    public CartItem() {
    }

    public CartItem(CartItemId cartItemId, Double price, Double quantity, Date createdAt, Date modifiedAt, boolean deleted) {
        this.cartItemId = cartItemId;
        this.price = price;
        this.quantity = quantity;
        this.createdAt = createdAt;
        this.modifiedAt = modifiedAt;
        this.deleted = deleted;
    }

    public void setCartItemId(CartItemId cartItemId) {
        this.cartItemId = cartItemId;
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
