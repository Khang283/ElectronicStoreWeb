package backend.service;

import backend.dao.*;
import backend.models.Cart;
import backend.models.CartItem;
import backend.models.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
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

    public boolean addProductToCart(String username, long productId){
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
            _cart.save(newCart);
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

    public boolean changeQuantity(String username, long productId,long amount){
        Optional<User> user = userDAO.findUserByUsername(username);
        if(!user.isPresent()) return false;
        Cart cart = cartDAO.findCartByUserId(user.get().getUserId());
        if(cart==null || cart.isDeleted()) return false;
        Optional<CartItem>cartItem = cartDAO.findCartItemById(cart.getCartId(),productId);
        if(!cartItem.isPresent()) return false;
        if(amount < 1) return false;
        cartDAO.changeQuantity(cart.getCartId(),productId,amount);
        return true;
    }

    public boolean removeCartItem(String username, long productId){
        Optional<User> user = userDAO.findUserByUsername(username);
        if(!user.isPresent()) return false;
        Cart cart = cartDAO.findCartByUserId(user.get().getUserId());
        if(cartDAO.removeCartItem(cart.getCartId(),productId)) return true;
        return false;
    }
}