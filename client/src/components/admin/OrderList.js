import React, { Fragment, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { MDBDataTable } from 'mdbreact'

import MetaData from '../layout/MetaData'
import Loader from '../layout/Loader'
import Sidebar from './Sidebar'

import { useAlert } from 'react-alert'
import { useDispatch, useSelector } from 'react-redux'
//import { allUsers, clearErrors } from '../../../../../web drink/Nhom3_IVS_ThucTapChuyenNganh/frontend/src/actions/userActions'
//import { DELETE_USER_RESET } from '../../../../../web drink/Nhom3_IVS_ThucTapChuyenNganh/frontend/src/constants/userConstants'
import axios from 'axios'
import Cookies from 'js-cookie'
import { useState } from 'react'

const OrderList = ({ history }) => {

    const alert = useAlert();
    const dispatch = useDispatch();

    //const { loading, error, users } = useSelector(state => state.allUsers);
    //const { isDeleted } = useSelector(state => state.user)
    const [orders,setOrders] = useState([]);
    const [loading,setLoad] = useState(true);

    useEffect(() => {
        axios.get('/api/admin/cart/order',{
            headers:{
                Authorization: `Bearer ${Cookies.get('authToken')}`,
            }
        }).then(res=>{
            if(res.status==200){
                setOrders(res.data);
                setLoad(false)
            }
        })

    }, [])


    const setOrder = () => {
        const data = {
            columns: [
                {
                    label: 'Mã đơn hàng',
                    field: 'orderId',
                    sort: 'asc'
                },
                {
                    label: 'Tên người dùng',
                    field: 'username',
                    sort: 'asc'
                },
                {
                    label: 'Tổng tiền',
                    field: 'totalPrice',
                    sort: 'asc'
                },
                {
                    label: 'Trạng thái',
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

        orders.forEach(order => {
            if (order.status === "Đã thanh toán") {
                order.status = "Đã thanh toán"
            }
            if (order.status === "Chưa thanh toán") {
                order.status = "Chưa thanh toán"
            }
            

            data.rows.push({
                orderId: order.orderId,
                username: order.username,
                totalPrice: order.totalPrice.toLocaleString()+" VNĐ",
                // status: order.status,
                status: order.status && String(order.status).includes('Chưa thanh toán')
                    ? <p style={{ color: 'red' }}><i class="bi bi-key-fill"></i> {order.status}</p>
                    : <p style={{ color: 'green' }}><i class="bi bi-activity"></i> {order.status}</p>,
                actions: <Fragment>
                    &emsp;
                    <Link to={`/admin/orders/${order.orderId}`} state={{order: order}} className="btn btn-primary py-1 px-2">
                    <i class="bi bi-pencil-square"></i>
                    </Link>

                </Fragment>
            })
        })

        return data;
    }


    return (
        <Fragment>
            <div className="row">
                <div className="col-12 col-md-2">
                    <Sidebar />
                </div>

                <div className="col-12 col-md-10">
                    <Fragment>
                        <h1 className="my-5">Danh sách đơn hàng</h1>

                        {loading ? <Loader /> : (
                            <MDBDataTable
                                data={setOrder()}
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

export default OrderList;
