package backend.controllers;

import backend.dto.CartDTO;
import backend.dto.CreatePaymentResponse;
import backend.dto.VNPayResponse;
import backend.service.VNPayService;
import com.stripe.Stripe;
import com.stripe.exception.StripeException;
import com.stripe.model.PaymentIntent;
import com.stripe.param.PaymentIntentCreateParams;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.math.BigDecimal;
import java.math.MathContext;
import java.math.RoundingMode;

@RestController
@RequestMapping("/api/checkout")
public class CheckoutController {
    @Value("${STRIPE_SECRET_KEY}")
    private String stripeSk;
    @Autowired
    private VNPayService vnPayService;
    @PostMapping("/create-payment-intent")
    public CreatePaymentResponse createPaymentIntent(@RequestBody CartDTO cart) throws StripeException {
        if(cart==null) return null;
        Stripe.apiKey = stripeSk;
        BigDecimal currencyScale = new BigDecimal("230");
        int scale = 4;
        MathContext context = new MathContext(5);
        Long amount = cart.getTotalPrice().divide(currencyScale,MathContext.DECIMAL32).longValue();
        PaymentIntentCreateParams params = PaymentIntentCreateParams.builder()
                .setAmount(amount)
                .setCurrency("usd")
                .setAutomaticPaymentMethods(
                        PaymentIntentCreateParams.AutomaticPaymentMethods
                                .builder()
                                .setEnabled(true)
                                .build()
                )
                .build();
        PaymentIntent paymentIntent = PaymentIntent.create(params);
        CreatePaymentResponse response = CreatePaymentResponse.builder()
                .secretKey(paymentIntent.getClientSecret())
                .build();
        return response;
    }

    @PostMapping("/submitOrder")
    public ResponseEntity<String> submitOrder(@RequestParam("amount") int orderTotal,
                                      @RequestParam("orderInfo") String orderInfo,
                                      HttpServletRequest request){
        String baseUrl = request.getScheme() + "://" + request.getServerName() + ":" + request.getServerPort();
        String vnpayUrl = vnPayService.createOrder(orderTotal, orderInfo, baseUrl);

        return ResponseEntity.ok(vnpayUrl);
    }

    @GetMapping("/vnpay-payment")
    public VNPayResponse getPaymentStatus(HttpServletRequest request){
        int paymentStatus =vnPayService.orderReturn(request);

        String orderInfo = request.getParameter("vnp_OrderInfo");
        String paymentTime = request.getParameter("vnp_PayDate");
        String transactionId = request.getParameter("vnp_TransactionNo");
        String totalPrice = request.getParameter("vnp_Amount");

        VNPayResponse response = VNPayResponse.builder()
                .paymentStatus(paymentStatus == 1 ? true : false)
                .orderId(orderInfo)
                .totalPrice(totalPrice)
                .paymentTime(paymentTime)
                .transaction(transactionId)
                .build();

        return response;
    }

}
