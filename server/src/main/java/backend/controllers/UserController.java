package backend.controllers;

import backend.dto.ChangePasswordDTO;
import backend.dto.ChangeRoleDTO;
import backend.dto.UpdateUserDTO;
import backend.dto.UserDTO;
import backend.models.User;
import backend.service.JwtService;
import backend.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/user")
public class UserController {
    @Autowired
    private UserService userService;
    @Autowired
    private JwtService jwtService;
    @GetMapping()
    public ResponseEntity<UserDTO>getUser(@RequestParam("id")long id){
        UserDTO user = userService.findUserById(id);
        if(user==null){
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(user);
    }

    @PutMapping()
    public ResponseEntity<UpdateUserDTO>updateUser(@RequestBody UpdateUserDTO userDTO){
        userService.updateUser(userDTO);
        return ResponseEntity.ok(userDTO);
    }

    @PutMapping("/password")
    public ResponseEntity<String>changePassword(@RequestBody ChangePasswordDTO changePasswordDTO){
        if(userService.changePassword(changePasswordDTO)){
            return ResponseEntity.ok("Cập nhật thành công");
        }
        return ResponseEntity.badRequest().build();
    }

    @GetMapping("/admin")
    @PreAuthorize("hasAuthority('ADMIN')")
    public ResponseEntity<List<UserDTO>>getAllUser(){
        List<UserDTO> userDTOS = userService.getAllUser();
        if(userDTOS.isEmpty()){
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(userDTOS);
    }

    @GetMapping("/me")
    public ResponseEntity<UserDTO>getUserInfo(@RequestHeader("Authorization")String accessToken){
        String token = accessToken.substring(7);
        String username = jwtService.extractUsername(token);
        Optional<User>user = userService.findUserByUsername(username);
        return ResponseEntity.ok(UserDTO.builder()
                .userId(user.get().getUserId())
                .username(user.get().getUsername())
                .address(user.get().getUserAddress())
                .email(user.get().getUserEmail())
                .phone(user.get().getUserPhone())
                .avatar(user.get().getAvatar())
                .gender(user.get().getGender())
                .dob(user.get().getDob())
                .role(user.get().getRole())
                .build());
    }

    @PutMapping("/admin/password")
    @PreAuthorize("hasAuthority('ADMIN')")
    public ResponseEntity<String>changePasswordByAdmin(@RequestBody ChangePasswordDTO changePasswordDTO){
        userService.changePasswordByAdmin(changePasswordDTO);
        return ResponseEntity.ok("Đổi mật khẩu thành công");
    }

    @PostMapping("/admin/role")
    @PreAuthorize(("hasAuthority('ADMIN')"))
    public ResponseEntity<String>changeRole(@RequestBody ChangeRoleDTO changeRoleDTO){
        if(userService.changeRole(changeRoleDTO)) return ResponseEntity.ok("Thay đổi quyền thành công");
        return ResponseEntity.badRequest().build();
    }
}
