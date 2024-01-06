package backend.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class OrderDTO {
    private Long userId;
    private Long cartId;
    private BigDecimal totalPrice;
    private Long totalQuantity;
    private String receiver;
    private String address;
    private String message;
}
