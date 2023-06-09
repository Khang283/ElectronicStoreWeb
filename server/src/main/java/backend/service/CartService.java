package backend.service;

import backend.dao.*;
import backend.dto.CartDTO;
import backend.dto.CartItemDTO;
import backend.models.Cart;
import backend.models.CartItem;
import backend.models.Product;
import backend.models.User;
import org.hibernate.annotations.CreationTimestamp;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.config.annotation.web.oauth2.resourceserver.OpaqueTokenDsl;
import org.springframework.stereotype.Service;
import java.math.BigDecimal;
import java.util.*;

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

    public CartDTO getCartByUsername(String username){
        Optional<User>user = userDAO.findUserByUsername(username);
        Cart cart = cartDAO.findCartByUserId(user.get().getUserId());
        if(cart == null || cart.isDeleted()){
            return null;
        }
        List<CartItemDTO> cartItemDTOS = new ArrayList<>();
        List<CartItem> cartItems = cartDAO.findCartItemByCartId(cart.getCartId());
        if(!cartItems.isEmpty() || cartItems == null){
            for(CartItem cartItem : cartItems){
                Product product = productDAO.findProductById(cartItem.getCartItemId().getProductId()).orElseThrow();
                CartItemDTO cartItemDTO = CartItemDTO.builder()
                        .productId(product.getProductId())
                        .productName(product.getProductName())
                        .productImage(productDAO.findProductIcon(product.getProductId()))
                        .price(cartItem.getPrice())
                        .quantity(cartItem.getQuantity())
                        .build();
                cartItemDTOS.add(cartItemDTO);
            }
        }
        CartDTO cartDTO = CartDTO.builder()
                .cartItems(cartItemDTOS)
                .userId(user.get().getUserId())
                .cartId(cart.getCartId())
                .totalPrice(cart.getTotalMoney())
                .totalQuantity(cart.getTotalQuantity())
                .build();
        return cartDTO;
    }

    public boolean deleteCartByUsername(String username){
        Optional<User>user = userDAO.findUserByUsername(username);
        if(user.isPresent()){
            Cart cart = cartDAO.findCartByUserId(user.get().getUserId());
            if(cart==null || cart.isDeleted()) return false;
            try{
                cartDAO.deleteCartByCartId(cart.getCartId());
            }catch (Exception e){
                System.out.println("Error: "+e.getMessage());
            }
            return true;
        }
        return false;
    }

    public List<CartDTO>getHistory(String username){
        Optional<User> user = userDAO.findUserByUsername(username);
        if(!user.isPresent()) return null;
        List<Cart>carts = cartDAO.getHistory(user.get().getUserId());
        List<CartDTO>cartDTOS = new ArrayList<>();
        for(Cart cart: carts){
            CartDTO cartDTO = CartDTO.builder()
                    .cartId(cart.getCartId())
                    .userId(cart.getUserId())
                    .cartItems(getCartItemDTOByCartId(cart.getCartId()))
                    .totalQuantity(cart.getTotalQuantity())
                    .totalPrice(cart.getTotalMoney())
                    .build();
            cartDTOS.add(cartDTO);
        }
        return cartDTOS;
    }

    public List<CartItemDTO>getCartItemDTOByCartId(long cartId){
        List<CartItemDTO>cartItemDTOS = new ArrayList<>();
        List<CartItem> cartItems = cartDAO.findCartItemByCartId(cartId);
        for(CartItem cartItem: cartItems){
            Optional<Product> product = productDAO.findProductById(cartItem.getCartItemId().getProductId());
            CartItemDTO cartItemDTO = CartItemDTO.builder()
                    .productId(cartItem.getCartItemId().getProductId())
                    .productName(product.get().getProductName())
                    .price(product.get().getProductPrice())
                    .productImage(productDAO.findProductIcon(product.get().getProductId()))
                    .quantity(cartItem.getQuantity())
                    .build();
            cartItemDTOS.add(cartItemDTO);
        }
        return cartItemDTOS;
    }
}