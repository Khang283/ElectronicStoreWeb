package backend.service;

import backend.dao.*;
import backend.dto.AddProductToCartDTO;
import backend.models.Cart;
import backend.models.CartItem;
import backend.models.Product;
import backend.models.User;
import org.hibernate.annotations.NaturalId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.swing.text.html.Option;
import java.math.BigDecimal;
import java.util.Date;
import java.util.Optional;

@Service
public class CartService {
    @Autowired
    private JwtService jwtService;
    @Autowired
    private ProductDAO productDAO;
    @Autowired
    private ICart _cart;
    @Autowired
    private CartDAO cartDAO;
    @Autowired
    private UserDAO userDAO;

    public boolean addProductToCart(AddProductToCartDTO addProductToCartDTO){
        String token = addProductToCartDTO.getToken();
        Long productId = addProductToCartDTO.getProductId();
        if(jwtService.isValidateToken(token)==false) return false;
        String username = jwtService.extractUsername(token);
        Optional<User> user = userDAO.findUserByUsername(username);
        if(!user.isPresent()) return false;
        Cart cart = cartDAO.findCartByUserId(user.get().getUserId());
        if(cart==null){
            long quantity = 0;
            BigDecimal money = new BigDecimal(0.00);
            Cart newCart = Cart.builder()
                    .userId(user.get().getUserId())
                    .totalQuantity(quantity)
                    .totalMoney(money)
                    .createdAt(new Date())
                    .build();
            Cart cart1 = _cart.save(newCart);
            Cart cart2 = cartDAO.findCartByUserId(user.get().getUserId());
            boolean isInserted = cartDAO.addProductToCart(productId, cart2.getCartId());
            if(isInserted) return true;
            return false;
        }
        else{
            if(cartDAO.checkProductExistInCart(cart.getCartId(),productId)){
                Optional<CartItem>cartItem = cartDAO.findCartItemById(cart.getCartId(),productId);
                cartDAO.changeQuantity(cart.getCartId(),productId,cartItem.get().getQuantity()+1);
                return true;
            }
            boolean isInserted = cartDAO.addProductToCart(productId, cart.getCartId());
            if(isInserted) return true;
            return false;
        }
    }
}