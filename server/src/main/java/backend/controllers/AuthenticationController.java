package backend.controllers;

import backend.dto.LoginRequestDTO;
import backend.dto.LoginResponseDTO;
import backend.dto.SignUpRequestDTO;
import backend.models.Role;
import backend.service.JwtService;
import backend.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import javax.annotation.processing.RoundEnvironment;

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
                .token(token)
                .build());
    }
    @PostMapping("/signup")
    public ResponseEntity<LoginResponseDTO> register(@RequestBody SignUpRequestDTO user) {
        LoginResponseDTO loginResponseDTO = userService.saveUser(user);
        if(loginResponseDTO==null){
            return ResponseEntity.badRequest().build();
        }
        return ResponseEntity.ok(loginResponseDTO);
    }

}