package backend.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class GetSpecDTO {
    private Long specId;
    private String specName;
    private String groupName;
    private String specValue;
    private String specDetail;


}
