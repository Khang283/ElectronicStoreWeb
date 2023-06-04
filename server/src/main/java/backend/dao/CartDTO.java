package backend.dao;

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
public class CartDTO {
    private Long carId;
    private Long userId;
    private List<CartItem> cartItems;
    private Long totalQuantity;
    private BigDecimal totalPrice;
}
