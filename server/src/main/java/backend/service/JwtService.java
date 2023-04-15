package backend.service;

import backend.dao.IUser;
import backend.models.User;
import io.jsonwebtoken.*;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.security.Keys;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;

import java.security.Key;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;
import java.util.Optional;
import java.util.function.Function;

@Service
public class JwtService {
    @Autowired
    private IUser _user;
    //Secret key 256bit hex, có thể dùng bất kỳ string nào khác
    private final String SECRET_KEY = "4D635166546A576E5A7234743777217A25432A462D4A614E645267556B587032";
    private final long JWT_EXPIRATION = 1000 * 60 * 24 ; // 1000 milisecond * 60m * 24h = 24h + 1000milisecond
    public String extractUsername(String jwt){
        return extractClaim(jwt, Claims::getSubject);
    }
    //lấy claim bất kỳ
    public <T> T extractClaim(String token, Function<Claims, T> claimsResolver) {
        final Claims claims = extractAllClaim(token);
        return claimsResolver.apply(claims);
    }
    //Lấy toàn bộ dữ liệu trong jwt
    public Claims extractAllClaim (String token){
        return Jwts.parserBuilder()
                .setSigningKey(getSignInKey())
                .build()
                .parseClaimsJws(token)
                .getBody();
    }
    public Date extractExpiration(String token){
        return extractAllClaim(token).getExpiration();
    }
    //Giải mã secret key do dùng key dạng 256bit hex
    public Key getSignInKey(){
        byte[] keyByte = Decoders.BASE64.decode(SECRET_KEY);
        return Keys.hmacShaKeyFor(keyByte);
    }

    public String generateToken(UserDetails userDetails){
        return generateToken(new HashMap<>(),userDetails);
    }
    public String generateToken(Map<String,Object>extraClaims, UserDetails userDetails){
        Date expirationDate = new Date(System.currentTimeMillis() + JWT_EXPIRATION);
        return Jwts.builder()
                .setClaims(extraClaims) //có thể truyền thêm claim tức thông tin thêm cho jwt tại đây
                .setSubject(userDetails.getUsername()) //set subject là username
                .setIssuedAt(new Date(System.currentTimeMillis()))
                .setExpiration(expirationDate)
                .signWith(getSignInKey(), SignatureAlgorithm.HS256)//sign secret key và thuật toán (HS256 do secret key là 256bit)
                .compact();
    }
    public boolean isValidateToken(String token){
        String userEmail= extractUsername(token);
        Optional<User> userDetails = _user.findByUsername(userEmail);
        if(userDetails.isEmpty() || isTokenExpired(token)){
            return false;
        }
        return true;
    }
    public boolean isTokenExpired(String token){
         if(extractExpiration(token).before(new Date())){
             return true;
        }
        return false;
    }
}
