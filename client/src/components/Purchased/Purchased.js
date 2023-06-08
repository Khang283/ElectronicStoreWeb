import React, { Fragment, useEffect, useState } from "react";
import { MDBDataTable } from "mdbreact";
import Cookies from "js-cookie";
import axios from "axios";
import Loader from "../Loader/Loader";
import { Link } from "react-router-dom";
const Purchased = props => {
    const [orders,setOrders] = useState([]);
    const [loading,setLoad] = useState(true);

    useEffect(()=>{
        axios.get("/api/cart/history",{
            headers: {
                Authorization: `Bearer ${Cookies.get('authToken')}`,
            }
            
        }).then(res=>{
            if(res.status==200){
                setOrders(res.data);
                setLoad(false);
            }
    
        }).catch(e=>{
            console.log(e);
        })
    },[]);

    const setOrderTable =()=>{
        const data = {
            columns: [
                {
                    label: 'Mã đơn hàng',
                    field: 'id',
                    sort: 'asc'
                },
                {
                    label: 'Tổng tiền',
                    field: 'totalPrice',
                    sort: 'asc'
                },
                {
                    label: 'Số lượng',
                    field: 'totalQuantity',
                    sort: 'asc'
                },
                {
                    label: 'Tình trạng',
                    field: 'status',
                    sort: 'asc'
                },
                {
                    label: 'Hành động',
                    field: 'actions',
                },
            ],
            rows: []
        }

        orders.forEach(order=>{
            data.rows.push({
                id: order.cartId,
                totalPrice: order.totalPrice.toLocaleString()+" VND",
                totalQuantity: order.totalQuantity,
                status: "Đã thanh toán",
                actions: <Fragment>
                <Link to={'/'} className="btn btn-primary py-1 px-2">
                <i class="bi bi-eye-fill"></i>
                </Link>
            </Fragment>
            })
        })

        return data;
    }

    return (
        <Fragment>

            <div className="row">
                <div className="col-12 col-md-10">
                    <Fragment>
                        <h1 className="my-5">Danh sách đơn hàng</h1>

                        {loading ? <Loader /> : (
                            <MDBDataTable
                                data={setOrderTable()}
                                className="px-3"
                                bordered
                                striped
                                hover
                            />
                        )}

                    </Fragment>
                </div>
            </div>

        </Fragment>
    )

}
export default Purchased;