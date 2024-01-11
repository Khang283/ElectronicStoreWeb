package backend.service;

import backend.dao.OrderDAO;
import backend.dao.UserDAO;
import backend.dto.ExchangeRateDTO;
import backend.dto.OrderDTO;
import backend.dto.OrderListDTO;
import backend.dto.UpdateOrderDTO;
import backend.models.Orders;
import backend.models.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestClientException;
import org.springframework.web.client.RestTemplate;

import java.math.BigDecimal;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class OrderService {
    @Value("${EXCHANGE_RATE_API_KEY}")
    private String EXCHANGE_RATE_API_KEY;
    @Value("${EXCHANGE_RATE_URL}")
    private String EXCHANGE_RATE_URL;
    @Autowired
    private OrderDAO orderDAO;
    @Autowired
    private UserDAO userDAO ;
    @Autowired
    private CartService cartService;
    public Orders createOrder(OrderDTO orderDTO){
        Orders orders = orderDAO.createOrder(orderDTO.getUserId(),
                                            orderDTO.getCartId(),
                                            orderDTO.getTotalPrice(),
                                            orderDTO.getTotalQuantity(),
                                            orderDTO.getReceiver(),
                                            orderDTO.getAddress(),
                                            orderDTO.getMessage())   ;
        return orders;
    }

    public boolean updateOrder(UpdateOrderDTO updateOrderDTO){
        try{
            orderDAO.updateOrder(updateOrderDTO.getId(),updateOrderDTO.getStatus());

        }catch (Exception e){
            System.out.println("Error: "+e.getMessage());
        }
        return true;
    }

    public List<OrderListDTO> getAllOrder(){
        List<OrderListDTO>orderListDTOs = new ArrayList<>();
        List<Orders> orders = orderDAO.findAllOrders();
        for(Orders order : orders){
            Optional<User> user = userDAO.findUserById(order.getUserId());
            OrderListDTO orderListDTO = OrderListDTO.builder()
                    .orderId(order.getOrderId())
                    .cartId(order.getCartId())
                    .userId(order.getUserId())
                    .username(user.get().getUsername())
                    .totalPrice(order.getTotalPrice())
                    .totalQuantity(order.getTotalQuantity())
                    .receiver(order.getReceiver())
                    .message(order.getDeliveryMessage())
                    .address(order.getOrderAddress())
                    .cartItems(cartService.getCartItemDTOByCartId(order.getCartId()))
                    .status(order.getStatus())
                    .build();
            orderListDTOs.add(orderListDTO);
        }
        return orderListDTOs;
    }

    public List<OrderListDTO>getOrdersByUserId(long userId){
        List<OrderListDTO>orderListDTOs = new ArrayList<>();
        List<Orders> orders = orderDAO.findOrderByUserId(userId);
        for(Orders order : orders){
            Optional<User> user = userDAO.findUserById(order.getUserId());
            OrderListDTO orderListDTO = OrderListDTO.builder()
                    .orderId(order.getOrderId())
                    .cartId(order.getCartId())
                    .userId(order.getUserId())
                    .username(user.get().getUsername())
                    .totalPrice(order.getTotalPrice())
                    .totalQuantity(order.getTotalQuantity())
                    .receiver(order.getReceiver())
                    .message(order.getDeliveryMessage())
                    .address(order.getOrderAddress())
                    .cartItems(cartService.getCartItemDTOByCartId(order.getCartId()))
                    .status(order.getStatus())
                    .build();
            orderListDTOs.add(orderListDTO);
        }
        return orderListDTOs;
    }

    public BigDecimal getExchangeRate(String from, String to) throws RestClientException {
        String ACCESS_API_KEY = EXCHANGE_RATE_API_KEY;
        String uri = EXCHANGE_RATE_URL;
        String endpoint = "latest";
        String url = uri+ACCESS_API_KEY+"/"+endpoint+"/"+from;
        RestTemplate restTemplate = new RestTemplate();
        ResponseEntity<ExchangeRateDTO> response = restTemplate.getForEntity(url, ExchangeRateDTO.class);
        return response.getBody().getConversion_rates().get(to);
    }
}
