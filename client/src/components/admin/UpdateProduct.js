import React, { useState, useEffect } from 'react';
import MetaData from '../layout/MetaData';
import { useAlert } from 'react-alert'
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import './UpdateProduct.css';
import Table from 'react-bootstrap/Table';
//import ProductServices from '../../services';
import { Button, FormControl, FormGroup, FormLabel, FormSelect, Row } from 'react-bootstrap';
import { Form, useParams } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import { Modal } from 'react-bootstrap';
import ProductServices from "../../services/Product";
export default function UpdateProduct() {
    let { productid } = useParams();
    const userState = useSelector(state => state.user);
    const [name, setName] = useState('');
    const [price, setPrice] = useState(0);
    const [stock, setStock] = useState(0);
    const [version, setVersion] = useState('');
    const [status, setStatus] = useState('');
    const [sold, setSold] = useState(0);
    const alert = useAlert();
    const [companyId, setCompanyId] = useState(0);
    const [cagetoryId, setCagetoryId] = useState(0);
    const [listCategory, setListCategory] = useState([]);
    const [listCompany, setListCompany] = useState([]);
    const [showspec, setShowspec] = useState(false);

    const handleClosespec = () => setShowspec(false);
    const handleShowspec = () => setShowspec(true);

    const [showAsset, setShowAsset] = useState(false);

    const handleCloseAsset = () => setShowAsset(false);
    const handleShowAsset = () => setShowAsset(true);
    /*useEffect(() => {
        const getListCategory = () => {
            axios.get(`/api/v1/getlistcategory`)
                .then(response => {
                    setListCategory(response.data);
                })
                .catch(e => {
                    console.log(e);
                })
        }
        getListCategory();
    })*/
    /* useEffect(() => {
         const getListCompany = () => {
             axios.get(`/api/v1/getlistcompany`)
                 .then(response => {
                     setListCompany(response.data);
                 })
                 .catch(e => {
                     console.log(e);
                 })
         }
         getListCompany();
     },([]))*/

    const getProduct = id => {
        ProductServices.getProductById(id)
            .then(response => {

                setName(response.data.productName);
                setPrice(response.data.productPrice);
                setVersion(response.data.productVersion);
                setStock(response.data.productStock);
                setCompanyId(response.data.companyId);
                setCagetoryId(response.data.cagetoryId);
                setStatus(response.data.productStatus);
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    }
    useEffect(() => {
        getProduct(productid);
        /*
        const getProductById = () => {
            axios.get(`/api/v1/product?productId=${productid}`)
                .then(response => {
                    setName(response.data.productName);
                    setPrice(response.data.productPrice);
                    setVersion(response.data.productVersion);
                    setStock(response.data.productStock);
                    setCompanyId(response.data.companyId);
                    setCagetoryId(response.data.cagetoryId);
                    console.log(response.data.name);
                }
                ).catch(e => { console.log(e) })
            getProductById({ productid });*/

    }
        , ([]));
    /*const [name, setName] = useState('');
    const [price, setPrice] = useState(0);
    const [stock, setStock] = useState(0);
    const alert = useAlert();
    const [version, setVersion] = useState('');
    const [sold, setSold] = useState(0);
    const [companyId, setCompanyId] = (0);
    const [cagetoryId, setCagetoryId] =(0);
    let { id } = useParam();
    const dispatch = useDispatch();
    const { error, product } = useSelector(state => state.productDetails)
    const { loading, error: updateError, isUpdated } = useSelector(state => state.product);
    const productId = id;
    useEffect(() => {
        axios.get(`api/v1/product?productId=${id}`);
        axios.put('/api/admin/product/modify',{
            headers:{
                Authorization: `Bearer ${Cookies.get('authToken')}`,
            }
        }).then(res=>{
            if(res.status==200){
                ProductServices.getProductById(id);
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

    }, [/*dispatch, alert, error, deleteError, isDeleted, history*/ //])
    /*useEffect(() => {
    if (product && product._id !== productId) {
        dispatch(getProductDetails(productId));
    } else {
        setName(product.name);
        setPrice(product.price);
        setStock(product.stock);
        setCategory(product.category);
        setSold(product.companyId);
        setVersion(product.version);
        setCagetoryId(product.cagetoryId);
        setCompanyId(product.companyId);     
    }

    if (error) {
        alert.error(error);
        dispatch(clearErrors())
    }

    if (updateError) {
        alert.error(updateError);
        dispatch(clearErrors())
    }


    if (isUpdated) {
        history.push('/admin/products');
        alert.success('Product updated successfully');
        dispatch({ type: UPDATE_PRODUCT_RESET })
    }

}, [dispatch, alert, error, isUpdated, history, updateError, product, productId])


const submitHandler = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.set('name', name);
    formData.set('price', price);
    formData.set('description', description);
    formData.set('category', category);
    formData.set('stock', stock);
    formData.set('seller', seller);

    images.forEach(image => {
        formData.append('images', image)
    })

    dispatch(updateProduct(product._id, formData))
}

const onChange = e => {

    const files = Array.from(e.target.files)

    setImagesPreview([]);
    setImages([])
    setOldImages([])

    files.forEach(file => {
        const reader = new FileReader();

        reader.onload = () => {
            if (reader.readyState === 2) {
                setImagesPreview(oldArray => [...oldArray, reader.result])
                setImages(oldArray => [...oldArray, reader.result])
            }
        }

        reader.readAsDataURL(file)
    })
}

*/

    return (
        <div className="bg-light">
            <section className="section-content padding-y">
                <div className="container">

                    <div className=' container div-list'>
                        <h1>Sửa sản phẩm</h1>
                        {console.log({ productid })}
                        <Container>
                            <Row>
                                <Col>
                                    <FormGroup>
                                        <Form>
                                            <FormLabel>Tên sản phẩm</FormLabel>
                                            <FormControl type='text' placeholder={name}></FormControl>
                                        </Form>
                                    </FormGroup>
                                    <FormGroup>
                                        <FormLabel>Giá:</FormLabel>
                                        <FormControl type='text' placeholder={price}></FormControl>
                                    </FormGroup>
                                    <FormGroup>
                                        <FormLabel>Phiên bản:</FormLabel>
                                        <FormControl type='text' placeholder={version}></FormControl>
                                    </FormGroup>
                                    <FormGroup>
                                        <FormLabel>Số lượng:</FormLabel>
                                        <FormControl type='text' placeholder={stock}></FormControl>
                                    </FormGroup>
                                    <FormGroup>
                                        <FormLabel>Trạng thái:</FormLabel>
                                        <FormControl type='text' placeholder={status}></FormControl>
                                    </FormGroup>
                                </Col>
                            </Row>
                        </Container>

                    </div>

                </div>
            </section>
        </div>
    );
}


