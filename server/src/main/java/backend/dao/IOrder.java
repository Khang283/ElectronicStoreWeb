package backend.dao;

import backend.models.Orders;
import jakarta.persistence.criteria.Order;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.math.BigDecimal;
import java.util.List;

@Repository
public interface IOrder extends JpaRepository<Orders,Long> {

    @Modifying
    @Transactional
    @Query(value = "INSERT INTO orders (user_id,cart_id,total_price,total_quantity,receiver,delivery_message,order_address,status) VALUES (:userId,:cartId,:totalPrice,:totalQuantity,:receiver,:message,:address,'Đang xử lý')",
            nativeQuery = true)
    void insertOrder(@Param("userId")long userId,
                     @Param("cartId")long cartId,
                     @Param("totalPrice")BigDecimal totalPrice,
                     @Param("totalQuantity")Long totalQuantity,
                     @Param("receiver")String receiver,
                     @Param("message")String message,
                     @Param("address")String address);
    @Modifying
    @Transactional
    @Query(value =  "UPDATE orders \n" +
                    "SET status = :status\n" +
                    "WHERE order_id = :id",nativeQuery = true)
    void updateOrder(@Param("id")long id,@Param("status")String status);

    @Query(value =  "SELECT * \n" +
                    "FROM orders \n" +
                    "WHERE user_id = :id",nativeQuery = true)
    List<Orders>findOrderById(@Param("id")long id);
}
