package backend.dto;

import com.stripe.Stripe;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class ChangeCartItemQuantityDTO {
    private Long productId;
    private Long amount;
}
