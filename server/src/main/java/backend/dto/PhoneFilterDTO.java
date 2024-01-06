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
public class PhoneFilterDTO {
    private String company;
    private String category;
    private BigDecimal minPrice;
    private BigDecimal maxPrice;
    private String specialFeature;
    private String battery;
    private String screen;
    private String camera;

}
