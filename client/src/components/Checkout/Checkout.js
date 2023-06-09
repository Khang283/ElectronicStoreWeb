import React, { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

import CheckoutForm from "./CheckoutForm";
import axios from "axios";
import Cookies from "js-cookie";
import { useLocation } from "react-router-dom";
import "./Checkout.css";
import Loader from "../Loader/Loader";

// Make sure to call loadStripe outside of a component’s render to avoid
// recreating the Stripe object on every render.
// This is your test publishable API key.
const stripePromise = loadStripe(`${process.env.REACT_APP_STRIPE_PUBLIC_KEY}`);
//console.log(process.env.REACT_APP_STRIPE_PUBLIC_KEY);

export default function Checkout(props) {

    const location = useLocation();
    const [locationState,setLocationState] = useState({});
    const [clientSecret, setClientSecret] = useState("");
    let cart = location.state.cart;
    let orderId = location.state.order;
    console.log(location.state);
    //let cart = props.cart;
    useEffect(() => {
        setLocationState(location.state);
        if(locationState){
            //console.log(locationState.cart)
            axios.post('/api/checkout/create-payment-intent',cart,{
                headers: {
                    Authorization: `Bearer ${Cookies.get('authToken')}`,
                }
            })
            .then(res=>{
                setClientSecret(res.data.secretKey);
                //console.log(res.data.secretKey);
            })
        }
        // Create PaymentIntent as soon as the page loads
        
    }, []);

    const appearance = {
        theme: 'stripe',
    };
    const options = {
        clientSecret,
        appearance,
    };

    if (clientSecret) {
        return (
            <Elements options={options} stripe={stripePromise}>
                <CheckoutForm orderId={orderId}/>
            </Elements>
        )
    }
    else{
        return(
            <div>
                <Loader />
            </div>
        )
    }

    // return (
    //     <div className="Checkout">
    //         {clientSecret && (
    //             <Elements options={options} stripe={stripePromise}>
    //                 <CheckoutForm />
    //             </Elements>
    //         )}
    //     </div>
    // );
}