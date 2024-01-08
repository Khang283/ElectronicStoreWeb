package backend.dto;

import lombok.*;

@Getter
@Setter
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class ProductSearchDTO {
    private String name;
    private String link;
}
