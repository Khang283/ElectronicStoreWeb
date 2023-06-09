package backend.dao;

import backend.dto.SignUpRequestDTO;
import backend.dto.UserDTO;
import backend.models.Role;
import backend.models.User;
import backend.service.JwtService;
import org.hibernate.tool.schema.spi.SqlScriptException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Optional;

@Repository
public class UserDAO {
    @Autowired
    private IUser _user;
    @Autowired
    private PasswordEncoder passwordEncoder;
    @Autowired
    private JwtService jwtService;
    public User createUser(SignUpRequestDTO user,String role){
        Role role1 = role.equals("USER")?Role.USER:Role.ADMIN;
        var newUser = User.builder()
                .username(user.getUsername())
                .password(passwordEncoder.encode(user.getPassword()))
                .userEmail(user.getUserEmail())//mã hóa mật khẩu trước khi đưa xuống db
                .userAddress(user.getUserAddress())
                .userPhone(user.getUserPhone())
                .dob(user.getDob())
                .gender(user.getGender())
                .role(role1)
                .build();
        _user.save(newUser); //lưu user mới (mật khẩu được lưu là mật khẩu đã được mã hóa ở trên)
        return newUser;

    }
    public Optional<User>findUserByUsername(String username){
        return _user.findByUsername(username);
    }
    public Optional<User>findUserByEmail(String email){
        return _user.findUserByEmail(email);
    }

    public Optional<User>findUserById(long id){
        return _user.findById(id);
    }

    public void updateUserById(long id, String username, String address, String email, String phone, String gender, Date dob){
        try{
            _user.updateUserById(id,username,address,email,phone,gender,dob);
        }
        catch (SqlScriptException e){
            System.out.println("Error "+e.toString());
        }
    }

    public void changePassword(long id,String newPassword){
        try{
            _user.changePassword(id,passwordEncoder.encode(newPassword));
        }
        catch (SqlScriptException e){
            System.out.println("Error "+e.getMessage());
        }
    }

    public List<UserDTO> getAllUser(){
        List<UserDTO> userDTOS = new ArrayList<>();
        List<User> users = _user.findAll();
        for(User user: users){
            UserDTO userDTO = UserDTO.builder()
                    .userId(user.getUserId())
                    .username(user.getUsername())
                    .address(user.getUserAddress())
                    .email(user.getUserEmail())
                    .phone(user.getUserPhone())
                    .gender(user.getGender())
                    .avatar(user.getAvatar())
                    .dob(user.getDob())
                    .role(user.getRole())
                    .build();
            userDTOS.add(userDTO);
        }
        return userDTOS;
    }
}
