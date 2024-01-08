import React from "react"
import { useEffect } from "react"
import Loader from "../Loader/Loader"
import axios from "axios"
import { useNavigate, useParams } from "react-router-dom"
import Cookies from "js-cookie"

const ConfirmPayment = () => {
  const navigate = useNavigate();
  const { orderid } = useParams();
  const payload = {
    id: orderid,
    status: "Đã thanh toán"
  }

  axios.post('/api/cart/checkout/confirm', payload, {
    headers: {
      Authorization: `Bearer ${Cookies.get('authToken')}`,
    }
  }).then(res => {
    if (res.status === 200) {
      console.log("Thanh toán thành công");
      navigate("/");
    }
  }).catch(e => {
    console.log(e);
  });

  return (
    <Loader />
  )
}

export default ConfirmPayment;