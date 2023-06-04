package backend.dao;

import backend.models.Cart;
import backend.models.CartItem;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.security.core.parameters.P;
import org.springframework.transaction.annotation.Transactional;

import java.math.BigDecimal;
import java.util.Optional;

public interface ICartItem extends JpaRepository<CartItem,CartItem.CartItemId> {
    @Query(value =  "SELECT * \n" +
                    "FROM cart_item\n" +
                    "WHERE cart_id = :cartId AND product_id=:productId",nativeQuery = true)
    Optional<CartItem> findCartItemByCartIdAndProductId(@Param("cartId")long cartId,@Param("productId")long productId);
    @Query(value =  "SELECT * \n" +
                    "FROM cart_item\n" +
                    "WHERE cart_id = :cartId AND product_id=:productId",nativeQuery = true)
    Optional<CartItem> checkProductExist(@Param("cartId")Long cartId, @Param("productId")Long productId);
    @Modifying
    @Transactional
    @Query(value =  "UPDATE cart_item\n" +
                    "SET quantity = :quantity\n" +
                    "WHERE cart_id = :cartId AND product_id = :productId",nativeQuery = true)
    void changeProductQuantity(@Param("cartId")Long cartId,@Param("productId")Long productId,@Param("quantity")Long quantity);
    @Modifying
    @Transactional
    @Query(value = "INSERT INTO cart_item(cart_id,product_id,price,quantity) VALUES (:cartId,:productId,:price,:quantity)",nativeQuery = true)
    void insertProductToCart(@Param("cartId")Long cartId,
                             @Param("productId")Long productId,
                             @Param("price") BigDecimal price,
                             @Param("quantity")Long quantity);
    @Modifying
    @Transactional
    @Query(value =  "UPDATE cart_item\n" +
                    "SET quantity = quantity + :quantity\n" +
                    "WHERE cart_id = :cartId AND product_id = :productId",nativeQuery = true)
    void updateProductQuantity(@Param("cartId")Long cartId,@Param("productId")Long productId,@Param("quantity")long quantity);
}
