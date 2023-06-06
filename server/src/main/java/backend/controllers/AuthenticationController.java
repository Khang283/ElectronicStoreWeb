package backend.controllers;

import backend.dto.LoginRequestDTO;
import backend.dto.LoginResponseDTO;
import backend.dto.SignUpRequestDTO;
import backend.service.JwtService;
import backend.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1")
public class AuthenticationController {
    @Autowired
    private UserService userService;
    @Autowired
    private JwtService jwtService;
    @Autowired
    private PasswordEncoder passwordEncoder;
    @Autowired
    private AuthenticationManager authenticationManager;
    @PostMapping("/login")
    public ResponseEntity<LoginResponseDTO>logIn(@RequestBody LoginRequestDTO user){
        authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(user.getUsername(),user.getPassword()));
        var userLogin = userService.findUserByUsername(user.getUsername()).orElseThrow();
        var token = jwtService.generateToken(userLogin);
        return ResponseEntity.ok(LoginResponseDTO.builder()
                        .userId(userLogin.getUserId())
                        .username(userLogin.getUsername())
                        .role(userLogin.getRole())
                        .token(token)
                        .token_type("Bearer")
                        .expire_in(jwtService.extractExpiration(token))
                        .build());
    }
    @PostMapping("/signup")
    public ResponseEntity<LoginResponseDTO> register(@RequestBody SignUpRequestDTO user) {
        LoginResponseDTO loginResponseDTO = userService.createUser(user);
        if(loginResponseDTO==null){
            return ResponseEntity.badRequest().build();
        }
        return ResponseEntity.ok(loginResponseDTO);
    }
     @PostMapping("/admin/signup")
    public ResponseEntity<LoginResponseDTO> adminRegister(@RequestBody SignUpRequestDTO user){
        LoginResponseDTO loginResponseDTO = userService.createdAdmin(user);
        if(loginResponseDTO == null){
            return ResponseEntity.badRequest().build();
        }
        return ResponseEntity.ok(loginResponseDTO);
     }
}
