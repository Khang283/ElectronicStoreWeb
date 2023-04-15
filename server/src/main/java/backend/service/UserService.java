package backend.service;

import backend.dao.IUser;
import backend.dao.UserDAO;
import backend.dto.LoginRequestDTO;
import backend.dto.LoginResponseDTO;
import backend.dto.SignUpRequestDTO;
import backend.models.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserService {
    @Autowired
    private UserDAO userDAO;
    @Autowired
    private JwtService jwtService;

    public boolean createUser(SignUpRequestDTO newUser){
        Optional<User> user = userDAO.createUser(newUser);
        if(user==null || user.isEmpty()){
            return false;
        }
        else{
            return true;
        }
    }
    public LoginResponseDTO saveUser(SignUpRequestDTO user){
        User newUser = userDAO.saveUser(user);
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
