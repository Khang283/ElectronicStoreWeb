package backend.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;
import java.lang.Long;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class ProductListDTO {
    private Long productId;
    private String productName;
    private BigDecimal productPrice;
    private String productIcon;
    private String productVersion;
    private Long productRating;
    private Long productSold;
    private String productStatus;
    private Long productStock;
    private String company;
    private String category;
}
