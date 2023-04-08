package backend.models;

import jakarta.persistence.*;
import org.hibernate.annotations.Columns;

import java.util.Date;

@Entity(name = "cart")
public class Cart {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="cart_id")
    private Long cartId;
    @Column(name="user_id")
    private Long userId;
    @Column(name="total_money")
    private Double totalMoney;
    @Column(name="total_quantity")
    private Double totalQuantity;
    @Column(name="created_at")
    private Date createdAt;
    @Column(name="modified_at")
    private Date modifiedAt;
    @Column(name="deleted")
    private boolean deleted;

    public Cart(Long cartId, Long userId, Double totalMoney, Double totalQuantity, Date createdAt, Date modifiedAt, boolean deleted) {
        this.cartId = cartId;
        this.userId = userId;
        this.totalMoney = totalMoney;
        this.totalQuantity = totalQuantity;
        this.createdAt = createdAt;
        this.modifiedAt = modifiedAt;
        this.deleted = deleted;
    }

    public Cart() {
    }

    public void setCartId(Long cartId) {
        this.cartId = cartId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }

    public void setTotalMoney(Double totalMoney) {
        this.totalMoney = totalMoney;
    }

    public void setTotalQuantity(Double totalQuantity) {
        this.totalQuantity = totalQuantity;
    }

    public void setCreatedAt(Date createdAt) {
        this.createdAt = createdAt;
    }

    public void setModifiedAt(Date modifiedAt) {
        this.modifiedAt = modifiedAt;
    }

    public void setDeleted(boolean deleted) {
        this.deleted = deleted;
    }

    public Long getCartId() {
        return cartId;
    }

    public Long getUserId() {
        return userId;
    }

    public Double getTotalMoney() {
        return totalMoney;
    }

    public Double getTotalQuantity() {
        return totalQuantity;
    }

    public Date getCreatedAt() {
        return createdAt;
    }

    public Date getModifiedAt() {
        return modifiedAt;
    }

    public boolean isDeleted() {
        return deleted;
    }
}
