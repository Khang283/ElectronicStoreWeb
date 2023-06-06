package backend.dto;

import backend.models.Role;
import lombok.*;

import java.util.Date;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class LoginResponseDTO {
    private Long userId;
    private String username;
    private Role role;
    private String token;
    private String token_type;
    private Date expire_in; //time in utc
}
