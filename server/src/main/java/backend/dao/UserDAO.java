package backend.dao;

import backend.dto.SignUpRequestDTO;
import backend.models.Role;
import backend.models.User;
import backend.service.JwtService;
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
    public User createUser(SignUpRequestDTO user,String role){
        Role role1 = role=="USER"?Role.USER:Role.ADMIN;
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
}
