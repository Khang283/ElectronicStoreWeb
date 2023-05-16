package backend.models;

import jakarta.persistence.*;

import java.util.Date;

@Entity(name = "orders")
public class Orders {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="order_id")
    private Long orderId;
    @Column(name="user_id")
    private Long userId;
    @Column(name="total_price")
    private Double totalPrice;
    @Column(name="total_quantity")
    private Double totalQuantity;
    @Column(name = "receiver")
    private String receiver;
    @Column(name = "delivery_message")
    private String deliveryMessage;
    @Column(name = "order_address")
    private String orderAddress;
    @Column(name = "delivered")
    private boolean delivered;
    @Column(name="created_at")
    private Date createdAt;
    @Column(name="modified_at")
    private Date modifiedAt;
    @Column(name="deleted")
    private boolean deleted;

    public Orders(Long orderId, Long userId, Double totalPrice, Double totalQuantity, String receiver, String deliveryMessage, String orderAddress, boolean delivered, Date createdAt, Date modifiedAt, boolean deleted) {
        this.orderId = orderId;
        this.userId = userId;
        this.totalPrice = totalPrice;
        this.totalQuantity = totalQuantity;
        this.receiver = receiver;
        this.deliveryMessage = deliveryMessage;
        this.orderAddress = orderAddress;
        this.delivered = delivered;
        this.createdAt = createdAt;
        this.modifiedAt = modifiedAt;
        this.deleted = deleted;
    }

    public Orders() {
    }

    public Long getOrderId() {
        return orderId;
    }

    public void setOrderId(Long orderId) {
        this.orderId = orderId;
    }

    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }

    public Double getTotalPrice() {
        return totalPrice;
    }

    public void setTotalPrice(Double totalPrice) {
        this.totalPrice = totalPrice;
    }

    public Double getTotalQuantity() {
        return totalQuantity;
    }

    public void setTotalQuantity(Double totalQuantity) {
        this.totalQuantity = totalQuantity;
    }

    public String getReceiver() {
        return receiver;
    }

    public void setReceiver(String receiver) {
        this.receiver = receiver;
    }

    public String getDeliveryMessage() {
        return deliveryMessage;
    }

    public void setDeliveryMessage(String deliveryMessage) {
        this.deliveryMessage = deliveryMessage;
    }

    public String getOrderAddress() {
        return orderAddress;
    }

    public void setOrderAddress(String orderAddress) {
        this.orderAddress = orderAddress;
    }

    public boolean isDelivered() {
        return delivered;
    }

    public void setDelivered(boolean delivered) {
        this.delivered = delivered;
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
