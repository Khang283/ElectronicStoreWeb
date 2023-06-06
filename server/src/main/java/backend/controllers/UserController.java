package backend.controllers;

import backend.dto.ChangePasswordDTO;
import backend.dto.UpdateUserDTO;
import backend.dto.UserDTO;
import backend.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/user")
public class UserController {
    @Autowired
    private UserService userService;
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
}
