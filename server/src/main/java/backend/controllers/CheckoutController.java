package backend.controllers;

import backend.dto.CartDTO;
import backend.dto.CreatePaymentResponse;
import com.stripe.Stripe;
import com.stripe.exception.StripeException;
import com.stripe.model.PaymentIntent;
import com.stripe.param.PaymentIntentCreateParams;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.*;

import java.math.BigDecimal;
import java.math.MathContext;
import java.math.RoundingMode;

@RestController
@RequestMapping("/api/checkout")
public class CheckoutController {
    @Value("${STRIPE_SECRET_KEY}")
    private String stripeSk;
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

}
