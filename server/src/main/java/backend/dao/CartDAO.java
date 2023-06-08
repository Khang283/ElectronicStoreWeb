package backend.dao;

import backend.dto.CartDTO;
import backend.dto.CartItemDTO;
import backend.models.Cart;
import backend.models.CartItem;
import backend.models.Product;
import org.hibernate.tool.schema.spi.SqlScriptException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Repository
public class CartDAO {
    @Autowired
    private ICart _cart;
    @Autowired
    private IProduct _product;
    @Autowired
    private ICartItem _cartItem;
    public boolean addProductToCart(Long productId,Long cartId){
        Optional<Product> product = _product.findById(productId);
        if(product.isEmpty() || !product.isPresent()) return false;
        long quantity = 1;
        _cartItem.insertProductToCart(cartId,productId,product.get().getProductPrice(),quantity);
        _cart.updateCart(cartId,1,product.get().getProductPrice());
        return true;
    }
    public boolean changeQuantity(Long cartId,Long productId,long quantity){
        Optional<Product> product = _product.findById(productId);
        if(!product.isPresent()) return false;
        Cart cart = _cart.findCartByCartId(cartId);
        if(cart==null) return false;
        Optional<CartItem>cartItem = _cartItem.findCartItemByCartIdAndProductId(cartId,productId);
        if(!cartItem.isPresent()) return false;
        Long productQuantity = cartItem.get().getQuantity();
        //tinh luong quantity thay doi
        long changeAmount = quantity - productQuantity;
        //thay doi cart_item quantity thanh quantity yeu cau
        _cartItem.changeProductQuantity(cartId,productId,quantity);
        //tinh so tien thay doi
        BigDecimal money = cartItem.get().getPrice().multiply(BigDecimal.valueOf(changeAmount));
        //cap nhat quantity va money thay doi vao cart
        _cart.updateCart(cartId,changeAmount,money);
        return true;
    }

    public Optional<CartItem> findCartItemById(long cartId,long productId){
        return _cartItem.findCartItemByCartIdAndProductId(cartId,productId);
    }

    public Cart findCartByUserId(Long userId){
        return _cart.findCartByUserId(userId);
    }
    public boolean checkProductExistInCart(Long cartId,Long productId){
        if(_cartItem.checkProductExist(cartId,productId).isPresent()) return true;
        return false;
    }

    public boolean removeCartItem(long cartId,long productId){
        Optional<Product> product = _product.findById(productId);
        Cart cart = _cart.findCartByCartId(cartId);
        Optional<CartItem> cartItem = _cartItem.findCartItemByCartIdAndProductId(cartId,productId);
        if(cart==null || cart.isDeleted() || !cartItem.isPresent() || !product.isPresent()) return false;
        long changeAmount = cartItem.get().getQuantity();
        BigDecimal money = cartItem.get().getPrice().multiply(new BigDecimal(cartItem.get().getQuantity()));
        _cart.updateCart(cartId,-changeAmount,money.negate());
        _cartItem.deleteById(new CartItem.CartItemId(cartId,productId));
        return true;
    }

    public List<CartItem> findCartItemByCartId(long cartId){
        return _cartItem.findCartItemByCartId(cartId).orElseThrow();
    }

    public void deleteCartByCartId(long id){
        try{
            _cart.deleteCartByCartId(id);
        }catch (SqlScriptException e){
            System.out.println("Error: "+e.getMessage());
        }
    }

    public List<Cart>getHistory(long userId){
        return _cart.getHistory(userId);
    }
}
