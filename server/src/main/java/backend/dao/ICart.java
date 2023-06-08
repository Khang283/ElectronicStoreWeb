package backend.dao;

import backend.models.Cart;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;

import java.math.BigDecimal;
import java.util.List;
import java.util.Optional;

public interface ICart extends JpaRepository<Cart,Long> {
    @Query(value =  "SELECT * \n" +
                    "FROM cart \n" +
                    "WHERE user_id = :userId AND deleted = FALSE",nativeQuery = true)
    Cart findCartByUserId(@Param("userId")Long userId);
    @Query(value =  "SELECT * \n" +
                    "FROM cart \n" +
                    "WHERE cart_id = :cartId AND deleted = FALSE",nativeQuery = true)
    Cart findCartByCartId(@Param("cartId")Long cartId);

    @Modifying
    @Transactional
    @Query(value =  "UPDATE cart\n" +
                    "SET total_quantity = total_quantity + :quantity\n" +
                    "WHERE cart_id = :cartId",nativeQuery = true)
    void updateCartQuantity(@Param("cartId")Long cartId,@Param("quantity")long quantity);

    @Modifying
    @Transactional
    @Query(value =  "UPDATE cart\n" +
                    "SET total_quantity = total_quantity + :quantity, total_money = total_money + :money \n" +
                    "WHERE cart_id = :cartId",nativeQuery = true)
    void updateCart(@Param("cartId")long cartId,@Param("quantity")long quantity,@Param("money")BigDecimal money);

    @Modifying
    @Transactional
    @Query(value =  "UPDATE cart \n" +
                    "SET deleted = TRUE \n" +
                    "WHERE cart_id = :id",nativeQuery = true)
    void deleteCartByCartId(@Param("id")long id);

    @Query(value =  "SELECT * \n" +
                    "FROM cart\n" +
                    "WHERE user_id = :id AND deleted = TRUE",nativeQuery = true)
    List<Cart>getHistory(@Param("id")long id);
}
