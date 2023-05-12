package backend.controllers;

import backend.dto.AddProductToCartDTO;
import backend.service.CartService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class CartController {
    @Autowired
    private CartService cartService;
    @PostMapping("/cart/add")
    public ResponseEntity<String>addToCart(@RequestBody AddProductToCartDTO addProductToCartDTO){
        boolean isAdded = cartService.addProductToCart(addProductToCartDTO);
        if(isAdded) return ResponseEntity.ok("Đã thêm sản phẩm vào giỏ hàng");
        return ResponseEntity.badRequest().build();
    }
}
