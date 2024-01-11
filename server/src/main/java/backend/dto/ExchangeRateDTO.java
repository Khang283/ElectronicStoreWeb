package backend.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;
import java.util.Date;
import java.util.Map;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class ExchangeRateDTO {
    private String result;
    private String documentation;
    private String terms_of_use;
    private Long time_last_update_unix;
    private Date time_last_update_utc;
    private Long time_next_update_unix;
    private Date time_next_update_utc;
    private String base_code;
    private Map<String, BigDecimal> conversion_rates;
}

