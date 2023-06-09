package backend.dto;

import backend.models.Role;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class UserDTO {
    private Long userId;
    private String username;
    private String address;
    private String email;
    private String phone;
    private String gender;
    private String avatar;
    private Date dob;
    private Role role;
}
