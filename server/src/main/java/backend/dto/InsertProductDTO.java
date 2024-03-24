package backend.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;

@Builder
@Data
@NoArgsConstructor
@AllArgsConstructor
public class InsertProductDTO {
    private String productName;
    private Long categoryId;
    private Long companyId;
    private String productVersion;
    private Long productStock;
    private BigDecimal productPrice;

    private List<InsertAssetDTO> assets ;
    private List<InsertSpecDTO> specs ;


}

