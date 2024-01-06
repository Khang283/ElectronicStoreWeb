import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams, useSearchParams } from 'react-router-dom';
import { loadOrder } from '../../reducer/orderReducer';
import axios from 'axios';
import Cookies from 'js-cookie';
import { forEach } from 'lodash';

export function VnPayReturn(props) {
    const [searchParam, setSearchParam] = useSearchParams();
    const [paymentStatus, setPaymentStatus] = useState(false)
    const orderId = Cookies.get('orderId');
    console.log(orderId);


    useEffect(() => {
        let paramsList = '?';
        let keys = searchParam.toString().trim();
        console.log(keys);
        paramsList += keys;
        console.log('/v1/vnpay-payment' + paramsList);
        let updateOrder = {
            id: orderId,
            status: null
        }
        async function updateStatus() {
            await axios.post('/api/v1/vnpay-payment' + paramsList, updateOrder, {
                headers: {
                    Authorization: `Bearer ${Cookies.get('authToken')}`
                }
            }).then(res => {
                console.log(res.data);
                setPaymentStatus(res.data.paymentStatus);
            })
        }
        updateStatus();
    }, [])

    return (
        <div>
            < h1 >Thanh toán {paymentStatus ? "thành công" : "không thành công"}!</h1 >
            <Link to={"/"}>
                <Button>
                    Nhấn để quay về trang chủ
                </Button>
            </Link>
        </div >

    )
}