package backend.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class RecommendProductDTO {
    private Long productId;
    private String productName;
    private String productVersion;
    private BigDecimal productPrice;
    private int productRating;
    private String company;
    private String category;
    private String productIcon;
}
