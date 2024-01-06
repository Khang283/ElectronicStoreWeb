package backend.models;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;
import java.util.Date;

@Entity(name = "orders")
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Orders {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="order_id")
    private Long orderId;
    @Column(name="user_id")
    private Long userId;
    @Column(name="total_price")
    private BigDecimal totalPrice;
    @Column(name="total_quantity")
    private Long totalQuantity;
    @Column(name = "receiver")
    private String receiver;
    @Column(name = "delivery_message")
    private String deliveryMessage;
    @Column(name = "order_address")
    private String orderAddress;
    @Column(name="created_at")
    private Date createdAt;
    @Column(name="modified_at")
    private Date modifiedAt;
    @Column(name="deleted")
    private boolean deleted;
    @Column(name="cart_id")
    private Long cartId;
    @Column(name = "status")
    private String status;

}
