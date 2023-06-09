import React, { Fragment, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { MDBDataTable } from 'mdbreact'

import MetaData from '../layout/MetaData'
import Loader from '../layout/Loader'
import Sidebar from './Sidebar'

import { useAlert } from 'react-alert'
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios'
import Cookies from 'js-cookie'

const ProductsList = ({ history }) => {

    const alert = useAlert();
    const dispatch = useDispatch();

    //const { loading, error, products } = useSelector(state => state.products);
    //const { error: deleteError, isDeleted } = useSelector(state => state.product);

    const [productList,setProductList] = useState([])
    const [loading,setLoad] =useState(true);

    useEffect(() => {
        axios.get('/api/admin/product',{
            headers:{
                Authorization: `Bearer ${Cookies.get('authToken')}`,
            }
        }).then(res=>{
            if(res.status==200){
                setProductList(res.data);
                console.log(res.data);
                setLoad(false);
            }
        })

        // if (error) {
        //     alert.error(error);
        //     dispatch(clearErrors())
        // }

        // if (deleteError) {
        //     alert.error(deleteError);
        //     dispatch(clearErrors())
        // }

        // if (isDeleted) {
        //     alert.success('Product deleted successfully');
        //     history.push('/admin/products');
        //     dispatch({ type: DELETE_PRODUCT_RESET })
        // }

    }, [/*dispatch, alert, error, deleteError, isDeleted, history*/])

    const setProducts = () => {
        const data = {
            columns: [
                {
                    label: 'ID',
                    field: 'id',
                    sort: 'asc'
                },
                {
                    label: 'Tên sản phẩm',
                    field: 'name',
                    sort: 'asc'
                },
                {
                    label: 'Giá',
                    field: 'price',
                    sort: 'asc'
                },
                {
                    label: 'Số lượng còn lại',
                    field: 'stock',
                    sort: 'asc'
                },
                {
                    label: 'Hành động',
                    field: 'actions',
                },
            ],
            rows: []
        }

        productList.forEach(product => {
            data.rows.push({
                id: product.productId,
                name: product.productName,
                price: `${(product.productPrice).toLocaleString()} VNĐ`,
                stock: product.productStock,
                actions: <Fragment>
                    <Link to={`/admin/product/modify/${product.productId}`} className="btn btn-primary py-1 px-2">
                    <i class="bi bi-pencil-square"></i>
                    </Link>
                    <button className="btn btn-danger py-1 px-2 ml-2" data-toggle="modal" data-target="#exampleModal" >
                        <i className="fa fa-trash"></i>
                    </button>
                    {/* model delete */}
                    <div>
                        <div className="modal fade" id="exampleModal" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div className="modal-dialog" role="document">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title" id="exampleModalLabel">Thông báo!</h5>
                                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">×</span>
                                        </button>
                                    </div>
                                    <div class="modal-body">
                                        Bạn có muốn xóa không
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Hủy</button>
                                        <button type="button" className="btn btn-danger"  data-dismiss="modal">Xóa</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Fragment>
            })
        })

        return data;
    }

    // const deleteProductHandler = (id) => {
    //     dispatch(deleteProduct(id))
    // }

    return (
        <Fragment>
            <MetaData title={'Tất cả sản phẩm'} />

            <div className="row">
                <div className="col-12 col-md-2">
                    <Sidebar />
                </div>

                <div className="col-12 col-md-10">
                    <Fragment>
                        <h1 className="my-5">Tất cả sản phẩm</h1>
                        <Link to='/admin/product/new'><button type="button" className="btn btn-primary">Thêm sản phẩm mới</button></Link>

                        {loading ? <Loader /> : (
                            <MDBDataTable
                                data={setProducts()}
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

export default ProductsList
