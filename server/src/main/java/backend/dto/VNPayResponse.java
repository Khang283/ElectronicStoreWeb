package backend.dto;

import lombok.*;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class VNPayResponse {
    private boolean paymentStatus;
    private String orderId;
    private String totalPrice;
    private String paymentTime;
    private String transaction;

}
