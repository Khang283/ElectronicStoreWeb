package backend.dto;

import backend.models.CartItem;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;
import java.util.List;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class OrderListDTO {
    private Long orderId;
    private Long userId;
    private Long cartId;
    private String username;
    private BigDecimal totalPrice;
    private Long totalQuantity;
    private String receiver;
    private String address;
    private String message;
    private List<CartItemDTO> cartItems;
    private String status;
}
