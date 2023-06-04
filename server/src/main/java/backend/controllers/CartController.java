package backend.controllers;

import backend.dto.ChangeCartItemQuantityDTO;
import backend.service.CartService;
import backend.service.JwtService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping("/api")
public class CartController {
    @Autowired
    private CartService cartService;
    @Autowired
    private JwtService jwtService;
    @PostMapping("/cart/add")
    public ResponseEntity<String>addToCart(@RequestHeader("Authorization")String accessToken,@RequestBody long productId){
        String token = accessToken.substring(7);
        if(jwtService.isValidateToken(token)){
            String username = jwtService.extractUsername(token);
            boolean isAdded = cartService.addProductToCart(username,productId);
            if(isAdded) return ResponseEntity.ok("Đã thêm sản phẩm vào giỏ hàng");
        }
        return ResponseEntity.badRequest().build();
    }
    @PutMapping("/cart/remove")
    public ResponseEntity<String>removeFromCart(@RequestHeader("Authorization")String accessToken,@RequestBody long productId){
        String token = accessToken.substring(7);
        if(jwtService.isValidateToken(token)){
            String username = jwtService.extractUsername(token);
            if(cartService.removeCartItem(username,productId)) return ResponseEntity.ok("Đã xóa sản phẩm khỏi giỏ hàng");
        }
        return ResponseEntity.badRequest().build();
    }

    @PutMapping("/cart/quantity")
    public ResponseEntity<String>changeQuantity(@RequestHeader("Authorization")String accessToken, @RequestBody ChangeCartItemQuantityDTO changeCartItemQuantityDTO){
        String token = accessToken.substring(7);
        long productId = changeCartItemQuantityDTO.getProductId();
        long quantity = changeCartItemQuantityDTO.getAmount();
        if(quantity<1){
            if(jwtService.isValidateToken(token)){
                String username = jwtService.extractUsername(token);
                if(cartService.changeQuantity(username,productId,quantity)) return ResponseEntity.ok("Đã thay đổi số lượng sản phẩm trong giỏ hàng");
            }
        }
        return ResponseEntity.badRequest().build();
    }

}
