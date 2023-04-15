package backend.dto;

import lombok.*;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class SignUpRequestDTO {
    private String username;
    private String password;
}
