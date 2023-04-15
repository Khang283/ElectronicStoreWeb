package backend.dao;

import backend.dto.LoginResponseDTO;
import backend.dto.SignUpRequestDTO;
import backend.models.Role;
import backend.models.User;
import backend.service.JwtService;
import lombok.extern.java.Log;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public class UserDAO {
    @Autowired
    private IUser _user;
    @Autowired
    private PasswordEncoder passwordEncoder;
    @Autowired
    private JwtService jwtService;

    public Optional<User> createUser(SignUpRequestDTO newUser){
        Optional<User> user = _user.findByUsername(newUser.getUsername());
        if(user.isEmpty()){
            _user.createUser(newUser.getUsername(),newUser.getPassword());
            Optional<User> createdUser = _user.findByUsername(newUser.getUsername());
            return createdUser;
        }
        return null;
    }
    public User saveUser(SignUpRequestDTO user){
        var newUser = User.builder()
                .username(user.getUsername())
                .password(passwordEncoder.encode(user.getPassword())) //mã hóa mật khẩu trước khi đưa xuống db
                .role(Role.USER)
                .build();
        _user.save(newUser); //lưu user mới (mật khẩu được lưu là mật khẩu đã được mã hóa ở trên)
        return newUser;

    }
    public Optional<User>findUserByUsername(String username){
        return _user.findByUsername(username);
    }
}
