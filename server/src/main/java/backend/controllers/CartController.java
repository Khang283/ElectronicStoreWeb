package backend.controllers;

import backend.dto.*;
import backend.models.Orders;
import backend.models.User;
import backend.service.*;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;


@RestController
@RequestMapping("/api")
public class CartController {
    @Autowired
    private CartService cartService;
    @Autowired
    private JwtService jwtService;
    @Autowired
    private OrderService orderService;
    @Autowired
    private UserService userService;
    @PostMapping("/cart/add")
    public ResponseEntity<String>addToCart(@RequestHeader("Authorization")String accessToken,@RequestBody CartPayLoad payLoad){
        String token = accessToken.substring(7);
        if(jwtService.isValidateToken(token)){
            String username = jwtService.extractUsername(token);
            boolean isAdded = cartService.addProductToCart(username,payLoad.getProductId());
            if(isAdded) return ResponseEntity.ok("Đã thêm sản phẩm vào giỏ hàng");
        }
        return ResponseEntity.badRequest().build();
    }
    @PutMapping("/cart/remove")
    public ResponseEntity<String>removeFromCart(@RequestHeader("Authorization")String accessToken,@RequestBody CartPayLoad payLoad){
        String token = accessToken.substring(7);
        if(jwtService.isValidateToken(token)){
            String username = jwtService.extractUsername(token);
            if(cartService.removeCartItem(username,payLoad.getProductId())) return ResponseEntity.ok("Đã xóa sản phẩm khỏi giỏ hàng");
        }
        return ResponseEntity.badRequest().build();
    }

    @PutMapping("/cart/quantity")
    public ResponseEntity<String>changeQuantity(@RequestHeader("Authorization")String accessToken, @RequestBody ChangeCartItemQuantityDTO changeCartItemQuantityDTO){
        String token = accessToken.substring(7);
        long productId = changeCartItemQuantityDTO.getProductId();
        long quantity = changeCartItemQuantityDTO.getAmount();
        if(quantity>=1){
            if(jwtService.isValidateToken(token)){
                String username = jwtService.extractUsername(token);
                if(cartService.changeQuantity(username,productId,quantity)) return ResponseEntity.ok("Đã thay đổi số lượng sản phẩm trong giỏ hàng");
            }
        }
        return ResponseEntity.badRequest().build();
    }

    @GetMapping("/cart")
    public ResponseEntity<CartDTO>getCart(@RequestHeader("Authorization")String accessToken){
        String token = accessToken.substring(7);
        if(jwtService.isValidateToken(token)){
            String username = jwtService.extractUsername(token);
            CartDTO cartDTO = cartService.getCartByUsername(username);
            if(cartDTO==null) return ResponseEntity.notFound().build();
            return ResponseEntity.ok(cartService.getCartByUsername(username));
        }
        return ResponseEntity.notFound().build();
    }
    @PostMapping("/cart/checkout/confirm")
    public ResponseEntity<String>confirmCheckout(@RequestHeader("Authorization")String accessToken, @RequestBody UpdateOrderDTO updateOrderDTO){
        String token = accessToken.substring(7);
        String username = jwtService.extractUsername(token);
        if(cartService.deleteCartByUsername(username)){
            if(orderService.updateOrder(updateOrderDTO)) return ResponseEntity.ok("Xóa giỏ hảng thành công và cập nhật trạng thái thành công");
        }
        return ResponseEntity.badRequest().build();
    }

    @GetMapping("/cart/history")
    public ResponseEntity<List<OrderListDTO>>getHistory(@RequestHeader("Authorization")String accessToken){
        String token = accessToken.substring(7);
        String username = jwtService.extractUsername(token);
        Optional<User> user = userService.findUserByUsername(username);
        List<OrderListDTO>orderListDTOS = orderService.getOrdersByUserId(user.get().getUserId());
        if(orderListDTOS.isEmpty()){
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(orderListDTOS);
    }

    @PostMapping("/order")
    public ResponseEntity<Orders>createOrder(@RequestBody OrderDTO order ){
        Orders orders = orderService.createOrder(order);
        if(orders !=null) return ResponseEntity.ok(orders);
        return ResponseEntity.badRequest().build();
    }

    @GetMapping("/admin/cart/order")
    @PreAuthorize("hasAuthority('ADMIN')")
    public ResponseEntity<List<OrderListDTO>>getOrderHistoryList(){
        List<OrderListDTO>orderListDTOS = orderService.getAllOrder();
        if(orderListDTOS.isEmpty()) return ResponseEntity.badRequest().build();
        return ResponseEntity.ok(orderListDTOS);
    }

}
