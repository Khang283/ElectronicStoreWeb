import { useAccount, useConnect, useWriteContract } from 'wagmi'
import abi from './abi/USDT.abi.json'
import { Button } from 'react-bootstrap'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Checkout from '../Checkout/Checkout';
import axios from 'axios';
import Cookies from 'js-cookie';

export function CryptoCheckout(props) {
    const { writeContract, status } = useWriteContract();
    const { isConnected, address } = useAccount();
    const { connectors, connect } = useConnect();
    const location = useLocation();
    const [isCheckout, setIsCheckout] = useState(false);
    let totalPrice = Math.ceil(location.state.cart.totalPrice / 24000);
    let orderId = location.state.order;
    const navigate = useNavigate();
    // let totalPrice = 200000000000000;
    console.log(totalPrice)

    async function transfer() {
        const data = await writeContract({
            abi,
            address: '0x4FEAcAd497f196d47E0F1AE73695969a898AC790',
            functionName: 'transfer',
            args: [
                '0x430A55534D99EB4f17cD24880c7Dd79659F838cE',
                totalPrice
            ],

        });

    }
    useEffect(() => {
        console.log(status)
        if (status === 'success') {
            setIsCheckout(true)
        }
    }, [status])

    useEffect(() => {
        if (isCheckout) {
            const payload = {
                id: orderId,
                status: "Đã thanh toán"
            }
            axios.post('/api/cart/checkout/confirm', payload, {
                headers: {
                    Authorization: `Bearer ${Cookies.get('authToken')}`,
                }
            }).then(res => {
                if (res.status === 200) {
                    console.log("Thanh toán thành công");
                    // navigate("/");

                }
            }).catch(e => {
                console.log(e);
            });
        }
    }, [isCheckout])


    if (isConnected) {
        return (
            <div className='text-center'>
                <h2>Ví của bạn</h2>
                <h2>{address}</h2>
                <h3>Số tiền sẽ chuyển: {totalPrice} USD</h3>
                <Button disabled={isCheckout}
                    onClick={transfer}
                >
                    Transfer
                </Button>
                <h4>Trạng thái: {isCheckout ? "Đã thanh toán" : "Đang chờ"}</h4>
                {
                    isCheckout ?
                        <Link to={'/'}>
                            <Button>
                                Quay về trang chủ
                            </Button>
                        </Link>
                        :
                        <div></div>
                }
            </div >
        )
    }
    else {
        return (
            <div>
                <h2>Bạn chưa connect ví</h2>
                <Button variant='primary' key={connectors[1].uid} onClick={() => connect({ connector: connectors[1] })}>
                    {connectors[1].name}
                </Button>
            </div>
        )
    }

}