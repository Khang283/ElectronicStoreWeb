package backend.service;

import backend.dao.UserDAO;
import backend.dto.LoginResponseDTO;
import backend.dto.SignUpRequestDTO;
import backend.models.User;
import lombok.extern.java.Log;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.text.SimpleDateFormat;
import java.util.Optional;

@Service
public class UserService {
    @Autowired
    private UserDAO userDAO;
    @Autowired
    private JwtService jwtService;

    public LoginResponseDTO createUser(SignUpRequestDTO user){
        User newUser = userDAO.createUser(user,"USER");
        if(newUser==null) return null;
        var jwt = jwtService.generateToken(newUser);
        return LoginResponseDTO.builder()
                .token(jwt)
                .build();
    }
    public LoginResponseDTO createdAdminUser(SignUpRequestDTO user){
        User newUser = userDAO.createUser(user,"ADMIN");
        if(newUser==null) return null;
        var jwt = jwtService.generateToken(newUser);
        return LoginResponseDTO.builder()
                .token(jwt)
                .build();
    }
    public Optional<User>findUserByUsername(String username){
        return userDAO.findUserByUsername(username);
    }
}
