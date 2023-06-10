package backend.controllers;

import backend.dto.FavoriteDTO;
import backend.dto.ProductListDTO;
import backend.models.Favorite;
import backend.models.Product;
import backend.models.User;
import backend.service.FavoriteService;
import backend.service.JwtService;
import backend.service.ProductService;
import backend.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.converter.RsaKeyConverters;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/favorite")
public class FavoriteController {
    @Autowired
    private FavoriteService favoriteService;
    @Autowired
    private JwtService jwtService;
    @Autowired
    private UserService userService;
    @Autowired
    private ProductService productService;

    @PostMapping()
    public ResponseEntity<String>addToFavorite(@RequestBody FavoriteDTO favoriteDTO, @RequestHeader("Authorization")String accessToken){
        String token = accessToken.substring(7);
        String username = jwtService.extractUsername(token);
        Optional<User> user = userService.findUserByUsername(username);
        if(favoriteService.addToFavorite(user.get().getUserId(),favoriteDTO.getProductId())) return ResponseEntity.ok("Thêm vào yêu thích thành công");
        return ResponseEntity.noContent().build();
    }

    @GetMapping()
    public ResponseEntity<List<ProductListDTO>>getFavoriteList(@RequestHeader("Authorization")String accessToken){
        String token = accessToken.substring(7);
        String username = jwtService.extractUsername(token);
        Optional<User> user = userService.findUserByUsername(username);
        List<Favorite>favorites = favoriteService.findFavoriteByUserId(user.get().getUserId());
        List<ProductListDTO>productListDTOS = favoriteService.getFavoriteProductList(favorites);
        if(productListDTOS.isEmpty()) return ResponseEntity.notFound().build();
        return ResponseEntity.ok(productListDTOS);
    }
    @DeleteMapping()
    public ResponseEntity<String>removeFromFavorite(@RequestHeader("Authorization")String accessToken,@RequestBody FavoriteDTO favoriteDTO){
        if(favoriteService.removeFromFavorite(favoriteDTO.getUserId(),favoriteDTO.getProductId())) return ResponseEntity.ok("Xóa sản phẩm khỏi yêu thích");
        return ResponseEntity.badRequest().build();
    }
}
