package backend.service;

import backend.dto.*;
import backend.dao.UserDAO;
import backend.models.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
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
                .userId(newUser.getUserId())
                .username(newUser.getUsername())
                .role(newUser.getRole())
                .token(jwt)
                .token_type("Bearer")
                .expire_in(jwtService.extractExpiration(jwt))
                .build();
    }
    public LoginResponseDTO createdAdmin(SignUpRequestDTO user){
        User newUser = userDAO.createUser(user,"ADMIN");
        if(newUser==null) return null;
        var jwt = jwtService.generateToken(newUser);
        return LoginResponseDTO.builder()
                .userId(newUser.getUserId())
                .username(newUser.getUsername())
                .role(newUser.getRole())
                .token(jwt)
                .token_type("Bearer")
                .expire_in(jwtService.extractExpiration(jwt))
                .build();
    }
    public Optional<User>findUserByUsername(String username){
        return userDAO.findUserByUsername(username);
    }
    public Optional<User>findUserByEmail(String email){
        return userDAO.findUserByEmail(email);
    }
    public UserDTO findUserById(long id){
        User user = userDAO.findUserById(id).orElseThrow();
        return UserDTO.builder()
                .userId(user.getUserId())
                .username(user.getUsername())
                .address(user.getUserAddress())
                .email(user.getUserEmail())
                .phone(user.getUserPhone())
                .gender(user.getGender())
                .avatar(user.getAvatar())
                .dob(user.getDob())
                .build();
    }

    public void updateUser(UpdateUserDTO user){
        try{
            userDAO.updateUserById(user.getId(),user.getUsername(),user.getAddress(),user.getEmail(),user.getPhone(),user.getGender(),user.getDob());
        }
        catch (Exception e){
            System.out.println("Error "+e.getMessage());
        }
    }

    public boolean changePassword(ChangePasswordDTO changePasswordDTO){
        Optional<User>user = userDAO.findUserById(changePasswordDTO.getId());
        if(!user.isPresent()){
            return false;
        }
        String oldPassword = changePasswordDTO.getOldPassword();
        String newPassword = changePasswordDTO.getNewPassword();
        if(!oldPassword.equals(newPassword)) return false;
        userDAO.changePassword(changePasswordDTO.getId(),newPassword);
        return true;
    }

    public List<UserDTO>getAllUser(){
        return userDAO.getAllUser();
    }

}
