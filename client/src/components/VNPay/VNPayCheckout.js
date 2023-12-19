import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import bankdata from './BankList.json';
import axios from 'axios';
import Cookies from 'js-cookie';

export function VNPayCheckout(props) {
    let [ordertype, setOrderType] = useState('');
    let [amount, setAmount] = useState('');
    let [description, setDescription] = useState('');
    let [bank, setBank] = useState('');

    const sendSubmit = ()=>{
        console.log(ordertype,amount,description,bank);
        axios.post('/api/checkout/submitOrder',{},{
            params: {
                amount: amount,
                orderInfo: description,
            },
            headers: {
                Authorization: `Bearer ${Cookies.get('authToken')}`,
            }
        }).then(res=>{
            console.log(res.data)
            window.location.href = res.data;
        })
    }

    return (
        <div className='col-md-5 mx-auto'>
            <h2>
                Tạo mới đơn hàng
            </h2>
            <div>
                <Form>
                    <Form.Group className="mb-3">
                        <Form.Label>Loại hàng hóa</Form.Label>
                        <Form.Select name='ordertype' onChange={e=>setOrderType(e.target.value)}>
                            <option value={'topup'}>Nạp tiền điện thoại</option>
                            <option value={'billpayment'}>Thanh toán hóa đơn</option>
                            <option value={'fashion'}>Thời trang</option>
                        </Form.Select>
                    </Form.Group>

                    <Form.Group className="mb-3" >
                        <Form.Label>Số tiền</Form.Label>
                        <Form.Control type="number" placeholder="1000" id='Amount' onChange={e=>setAmount(e.target.value)}/>
                    </Form.Group>
                    <Form.Group className="mb-3" >
                        <Form.Label>Nội dung thanh toán</Form.Label>
                        <Form.Control type="text" placeholder="" id='description' as={'textarea'} onChange={e=>setDescription(e.target.value)}/>
                    </Form.Group>
                    <Form.Group className="mb-3" >
                        <Form.Label>Ngân hàng</Form.Label>
                        <Form.Select name='bankcode' onChange={e=>setBank(e.target.value)}>
                            <option value={null}>Không chọn</option>
                            {bankdata.map((bank) => {
                                return (
                                    <option value={bank.code}>{bank.name}</option>
                                )
                            })}
                        </Form.Select>
                    </Form.Group>

                    <Button variant="primary" type="button" onClick={sendSubmit}>
                        Thanh toán VNPay
                    </Button>
                </Form>
            </div>
        </div>
    );
}
