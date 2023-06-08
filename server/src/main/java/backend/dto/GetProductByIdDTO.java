package backend.dto;

import backend.models.Assets;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class GetProductByIdDTO {
    private String productName;
    private BigDecimal productPrice;
    private int productSale;
    private String productIcon;
    private String productVersion;
    private Long productRating;
    private Long productSold;
    private Long productStock;
    private String productStatus;
    private String company;
    private String category;
    private List<GetAssetDTO> assets = new ArrayList<>();
    private List<GetSpecDTO> specs= new ArrayList<>();
}
