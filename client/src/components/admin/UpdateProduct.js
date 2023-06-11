import React, { useState, useEffect } from 'react';
import MetaData from '../layout/MetaData';
import { useAlert } from 'react-alert'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Loader from '../Loader/Loader';
import Popup from "reactjs-popup";
import axios from 'axios';
import './UpdateProduct.css';
import Cookies from "js-cookie";
import Table from 'react-bootstrap/Table';
//import ProductServices from '../../services';
import { Button, FormControl, FormGroup, FormLabel, FormSelect, Row } from 'react-bootstrap';
import { Form, useParams } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import { Modal } from 'react-bootstrap';
import ProductServices from "../../services/Product";
import SpecModify from './SpecModify';
import AssetModify from './AssetModify';
export default function UpdateProduct() {
    let { productid } = useParams();
    const userState = useSelector(state => state.user);
    const [name, setName] = useState('');
    const [price, setPrice] = useState(0);
    const [stock, setStock] = useState(0);
    const [version, setVersion] = useState('');
    const [status, setStatus] = useState('');
    const alert = useAlert();
    const [show, setShow] = useState(false);
    const [companyId, setCompanyId] = useState(0);
    const [categoryId, setCategoryId] = useState(0);
    const [listCategory, setListCategory] = useState([]);
    const [listCompany, setListCompany] = useState([]);
    const [showspec, setShowspec] = useState(false);
    const [spec, setSpec] = useState([]);
    const [asset, setAsset] = useState([]);
    const [isLoaded, setLoad] = useState(false);
    const handleClosespec = () => setShowspec(false);
    const [submitted, setSubmitted] = useState(false);
    const [product, setProduct] = useState([]);
    const [showAsset, setShowAsset] = useState(false);
    const [category, setCagetory] = useState('');
    const [company, setCompany] = useState('');
    const [id, setId] = useState(parseInt(productid));
    const getProduct = id => {
        ProductServices.getProductById(id)
            .then(response => {
                setName(response.data.productName);
                setPrice(response.data.productPrice);
                setVersion(response.data.productVersion);
                setStock(response.data.productStock);
                setCompanyId(response.data.companyId);
                setCategoryId(response.data.categoryId);
                setStatus(response.data.productStatus);
                setSpec(response.data.specs);
                setAsset(response.data.assets);
                setCompany(response.data.company);
                setCagetory(response.data.category);
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    }
    const getSpec = id => {
        ProductServices.getProductById(id)
            .then(response => {
                
                setSpec(response.data.specs);
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    }
    const getAsset = id => {
        ProductServices.getProductById(id)
            .then(response => {
                setAsset(response.data.assets);
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    }
    const handleClose = () => {
        setShow(false);
    }
    const handleContinue = () => {
        setShow(false);
        setProduct({
            productName: { name },
            productPrice: { price },
            productVersion: { version },
            productStock: { stock },
            companyId: { companyId },
            categoryId: { categoryId },
            assets: { asset },
            specs: { spec },
            status: { status }

        })
    }
    function deleteAsset(asseId){
        console.log(asseId);
        const assetdelete = ({
            assetId: asseId
        });
        axios.post('/api/v1/delete/asset',assetdelete)
        .then(res => {
            if (res.status == 200) {
                // setSubmitted(true);
                // setLoad(false);
            }
        })
        .catch(e => {
            // setLoad(false);
            console.log(e);
        });
     }
     function deleteSpec(specId){
        console.log(specId);
        const specdelete = ({
            specId: specId
        });
        axios.post('/api/v1/delete/spec',specdelete)
        .then(res => {
            if (res.status == 200) {
                // setSubmitted(true);
                // setLoad(false);
            }
        })
        .catch(e => {
            // setLoad(false);
            console.log(e);
        });
     }
    function modifyProduct() {
        const prod = ({
            productId: id,
            productName: name,
            productPrice: price,
            productVersion: version,
            productStock: stock,
            productStatus: status,
            companyId: parseInt(companyId),
            categoryId: parseInt(categoryId),

        })
        console.log(prod);
        setShow(true);
        setLoad(true);
        axios.post('/api/v1/modify/product', prod, {
            headers: {
                Authorization: `Bearer ${Cookies.get('authToken')}`,
            }
        })
            .then(res => {
                if (res.status == 200) {
                    setSubmitted(true);
                    setLoad(false);
                }
            })
            .catch(e => {
                setLoad(false);
                console.log(e);
            });

    }
    useEffect(() => {
        const getListCategory = () => {
            axios.get(`/api/v1/getlistcategory`)
                .then(response => {
                    //console.log(response.data);
                    setListCategory(response.data);
                    // setLoadPhone(true);
                })
                .catch(e => {
                    console.log(e);
                });
        }

        getListCategory();
    }, [])
    useEffect(() => {
        const getListCompany = () => {
            axios.get(`/api/v1/getlistcompany`)
                .then(response => {
                    //console.log(response.data);
                    setListCompany(response.data);
                    // setLoadPhone(true);
                })
                .catch(e => {
                    console.log(e);
                });
        }

        getListCompany();
    }, [])
    useEffect(() => {
        getProduct(productid);
    }, ([]));
    useEffect(()=> {})
    useEffect(() => {getSpec(productid)}, ([spec]));
    useEffect(() => {getAsset(productid)}, ([asset]));
    return (
        <div className="bg-light">
            <MetaData title={'Sửa sản phẩm'} />
            <section className="section-content padding-y">
                <div className="container">

                    <div className=' container div-list'>
                        <h1>Sửa sản phẩm</h1>
                        <Modal show={show} onHide={handleClose}>
                            <Modal.Header closeButton>
                                <Modal.Title>Thông Báo</Modal.Title>
                            </Modal.Header>
                            {
                                isLoaded ?
                                    <div className="home-btn">
                                        <Loader className='mx-auto'></Loader>
                                    </div> :
                                    submitted ?
                                        <div>
                                            <Modal.Body>Thay đổi sản phẩm thành công.</Modal.Body>
                                            <Modal.Footer>
                                                <Button variant="secondary" onClick={handleContinue}>
                                                    Tiếp tục
                                                </Button>
                                                <Link to={"/admin/product"}>
                                                    <Button variant="primary" onClick={handleClose}>
                                                        Hoàn tất
                                                    </Button></Link>
                                            </Modal.Footer>
                                        </div> :
                                        <div>
                                            <Modal.Body>Thêm sản phẩm thất bại.</Modal.Body>
                                            <Modal.Footer>
                                                <Button variant="secondary" onClick={handleClose}>
                                                    Đóng
                                                </Button>
                                            </Modal.Footer>
                                        </div>
                            }
                        </Modal>
                        <Container>
                            <div className='row'>
                                <div className='col-xl-4'>
                                    <FormGroup className="mb-3">
                                        <Form>
                                            <FormLabel>Tên sản phẩm</FormLabel>
                                            <FormControl onChange={e => setName(e.target.value)} type='text' defaultValue={name}></FormControl>
                                        </Form>
                                    </FormGroup>
                                    <FormGroup className="mb-3">
                                        <FormLabel>Giá:</FormLabel>
                                        <FormControl type='number' onChange={e => setPrice(e.target.value)} value={price}></FormControl>
                                    </FormGroup>
                                    <FormGroup className="mb-3">
                                        <FormLabel>Phiên bản:</FormLabel>
                                        <FormControl type='text' onChange={e => setVersion
                                            (e.target.value)} defaultValue={version}></FormControl>
                                    </FormGroup>
                                    <FormGroup className="mb-3">
                                        <FormLabel>Số lượng trong kho:</FormLabel>
                                        <FormControl onChange={e => setStock(e.target.value)} type='number' value={stock}></FormControl>
                                    </FormGroup>
                                    <FormGroup className="mb-3">
                                        <FormLabel>Trạng thái:</FormLabel>
                                        <FormControl type='text' onChange={e => setStatus(e.target.value)} defaultValue={status}></FormControl>
                                    </FormGroup>
                                    <FormGroup className="mb-3">
                                        <FormLabel>Danh mục</FormLabel>
                                        <FormSelect onChange={e => {
                                            setCagetory(e.target.value);
                                            setCategoryId(e.target.value)
                                        }} value={categoryId} >
                                            {
                                                listCategory.map((category) => (
                                                    <option value={category.categoryId}>{category.categoryName}</option>)
                                                )
                                            }
                                            <option></option>
                                        </FormSelect>
                                    </FormGroup>
                                    <FormGroup className="mb-3">
                                        <FormLabel>Công ty</FormLabel>
                                        <FormSelect onChange={e => {
                                            setCompany(e.target.value)
                                            setCompanyId(e.target.value)
                                        }} value={companyId}>
                                            {
                                                listCompany.map((company) => (
                                                    <option value={company.companyId} key={company.companyId}>{company.companyName}</option>)
                                                )


                                            }
                                        </FormSelect>
                                    </FormGroup>
                                    <Button onClick={modifyProduct}>Thay đổi sản phẩm</Button>
                                    {/** 
                                    <FormGroup controlId="exampleForm.ControlInput1">
                                        <FormLabel>Danh mục: </FormLabel>
                                        <Form.Select aria-label="Default select example" controlId="exampleForm.ControlInput1" value={categoryId} >
                                                {
                                                    listCategory.map((category) => {
                                                        return (
                                                            <option value={category.categoryId}>{category.categoryName}</option>
                                                        )
                                                    })
                                                }
                                            </Form.Select>
                                    </FormGroup>
                                    <FormGroup controlId="exampleForm.ControlInput1">
                                            <Form.Label>Công ty:</Form.Label>

                                            <Form.Select aria-label="Default select example" value={companyId}>
                                                {
                                                    listCompany.map((company) => {
                                                        return (
                                                            <option value={company.companyId}>{company.companyName}</option>
                                                        )
                                                    })
                                                }
                                            </Form.Select>
                                        </FormGroup>
                                        */}
                                </div>
                                <div className='col-xl-8'>
                                    <Form>
                                        <FormGroup className="mb-3" controlId="exampleForm.ControlInput1">
                                            <FormLabel>Thông số:</FormLabel>
                                            <Table striped bordered hover size='sm' responsive>
                                                <thead>
                                                    <tr>
                                                        <th>Tên thông số</th>
                                                        <th>Chi tiết thông số</th>
                                                        <th>Giá trị</th>
                                                        <th>Hành động</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {spec.map((spec) => (
                                                        <tr>
                                                            <td>{spec.specName}</td>
                                                            <td>{spec.specDetail}</td>
                                                            <td>{spec.specValue}</td>
                                                            <td>
                                                                
                                                                <Popup modal trigger={<Button><i className="bi bi-pencil-square"></i></Button>}>
                                                                    <SpecModify spec={spec}></SpecModify>
                                                               </Popup>
                                                               <Button onClick={() => deleteSpec(spec.specId)} value={spec.specId} className='btn-danger'><i className="bi bi-trash"></i></Button>
                                                                {/*<Popup modal trigger={<Button className='btn-danger'><i className="bi bi-trash"></i></Button>}>
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
                                                                                        <button type="button" className="btn btn-danger" data-dismiss="modal">Xóa</button>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                    </Popup>*/}

                                                            </td>
                                                        </tr>
                                                    )
                                                    )}

                                                </tbody>

                                            </Table>
                                        </FormGroup>
                                        <FormGroup className="mb-3" controlId="exampleForm.ControlInput1">
                                            <FormLabel>Hình ảnh:</FormLabel>
                                            <Table striped bordered hover size='sm' responsive>
                                                <thead>
                                                    <tr>
                                                        <th>Tên ảnh</th>
                                                        <th>Đường dẫn</th>
                                                        <th>Loại</th>
                                                        <th>Vai trò</th>
                                                        <th>Hành động</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {asset.map((asset) => (
                                                        <tr>
                                                            <td>{asset.assetName}</td>
                                                            <td >{asset.assetPath}</td>
                                                            <td>{asset.assetType}</td>
                                                            <td>{asset.assetRole}</td>
                                                            <td>
                                                                <Popup modal trigger={<Button><i className="bi bi-pencil-square"></i></Button>}>
                                                                    <AssetModify asset={asset}></AssetModify>
                                                                </Popup>
                                                                <Button onClick={() => deleteAsset(asset.assetId)} asset={asset} className='btn-danger'><i className="bi bi-trash"></i></Button>
                                                                {/* <Popup modal trigger={<Button className='btn-danger'><i className="bi bi-trash"></i></Button>}>

                                                                </Popup>*/}
                                                            </td>
                                                        </tr>
                                                    )
                                                    )}

                                                </tbody>
                                            </Table>
                                        </FormGroup>
                                    </Form>
                                </div>
                            </div>

                        </Container>

                    </div>

                </div>
            </section>
        </div>
    );
}



