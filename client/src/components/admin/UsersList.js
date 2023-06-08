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

const UsersList = ({ history }) => {

    const alert = useAlert();
    const dispatch = useDispatch();

    //const { loading, error, users } = useSelector(state => state.allUsers);
    //const { isDeleted } = useSelector(state => state.user)
    const [users,setUser] = useState([]);
    const [loading,setLoad] = useState(true);

    useEffect(() => {
        axios.get('/api/user/admin',{
            headers:{
                Authorization: `Bearer ${Cookies.get('authToken')}`,
            }
        }).then(res=>{
            if(res.status==200){
                setUser(res.data);
                setLoad(false)
            }
        })

    }, [])


    const setUsers = () => {
        const data = {
            columns: [
                {
                    label: 'ID',
                    field: 'id',
                    sort: 'asc'
                },
                {
                    label: 'Tên người dùng',
                    field: 'name',
                    sort: 'asc'
                },
                {
                    label: 'Email',
                    field: 'email',
                    sort: 'asc'
                },
                {
                    label: 'Quyền',
                    field: 'role',
                    sort: 'asc'
                },
                {
                    label: 'Hành động',
                    field: 'actions',
                },
            ],
            rows: []
        }

        users.forEach(userr => {
            // let hoat_dong = '';
            // if (userr.role === "look") {
            //     userr.role = "Đã bị khóa"
            // }
            // if (userr.role === "user") {
            //     userr.role = "Người dùng"
            // }
            // if (userr.role === "admin") {
            //     userr.role = "Quản trị"
            // }
            // if (userr.role === "Người dùng" || "Quản trị") {
            //     hoat_dong = "Hoạt động"
            // }

            data.rows.push({
                id: userr.userId,
                name: userr.username,
                email: userr.email,
                role: userr.role,
                // status: userr.role && String(userr.role).includes('Đã bị khóa')
                //     ? <p style={{ color: 'red' }}><i class="bi bi-key-fill"></i> {userr.role}</p>
                //     : <p style={{ color: 'green' }}><i class="bi bi-activity"></i> {hoat_dong}</p>,
                actions: <Fragment>
                    &emsp;
                    <Link to={`/admin/user/${userr.userId}`} className="btn btn-primary py-1 px-2">
                    <i class="bi bi-pencil-square"></i>
                    </Link>&emsp;
                    <Link to={`/admin/look_user/${userr._id}`} className="btn btn-danger py-1 px-2">
                        <i class="bi bi-key-fill"></i>
                    </Link>

                </Fragment>
            })
        })

        return data;
    }


    return (
        <Fragment>
            <MetaData title={'All Users'} />
            <div className="row">
                <div className="col-12 col-md-2">
                    <Sidebar />
                </div>

                <div className="col-12 col-md-10">
                    <Fragment>
                        <h1 className="my-5">Tất cả người dùng</h1>

                        {loading ? <Loader /> : (
                            <MDBDataTable
                                data={setUsers()}
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

export default UsersList
