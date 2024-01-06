package backend.dao;

import backend.models.Orders;
import jakarta.persistence.criteria.Order;
import org.hibernate.tool.schema.spi.SqlScriptException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.math.BigDecimal;
import java.util.Date;
import java.util.List;

@Repository
public class OrderDAO {
    @Autowired
    private IOrder _order;
    @Autowired
    private ICart _cart;
    @Autowired
    private IUser _user;

    public Orders createOrder (Long userId, Long cartId, BigDecimal totalPrice,Long totalQuantity,String receiver,String address,String message){
        Orders orders = Orders.builder()
                .userId(userId)
                .cartId(cartId)
                .totalPrice(totalPrice)
                .totalQuantity(totalQuantity)
                .receiver(receiver)
                .deliveryMessage(message)
                .orderAddress(address)
                .status("Chưa thanh toán")
                .createdAt(new Date())
                .build();
        Orders orders1 = _order.save(orders);
        return orders1;
    }

    public void updateOrder(Long id,String status){
        try{
            _order.updateOrder(id,status);
        }catch (SqlScriptException e){
            System.out.println("Error: "+e.getMessage());
        }
    }

    public List<Orders>findAllOrders(){
        return _order.findAll();
    }

    public List<Orders>findOrderByUserId(long userId){
        return _order.findOrderByUserId(userId);
    }
}
