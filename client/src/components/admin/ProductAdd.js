import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import '../admin/ProductAdd.css'
import Cookies from "js-cookie";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Loader from '../Loader/Loader';
import { Link } from 'react-router-dom';

const ProductAdd = () => {
    //
    const [listCategory, setListCategory] = useState([]);
    const [listCompany, setListcompany] = useState([]);

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
    })

    useEffect(() => {
        const getListCompany = () => {
            axios.get(`/api/v1/getlistcompany`)
                .then(response => {
                    //console.log(response.data);
                    setListcompany(response.data);
                    // setLoadPhone(true);
                })
                .catch(e => {
                    console.log(e);
                });
        }

        getListCompany();
    })

    //get data
    const [listProductSpec, setListProductSpec] = useState([]);
    const [spec, setSpec] = useState({
        specName: "",
        specDetail: "",
        specValue: "",
        groupId: 1,
    })

    function specNameChange(event) {
        spec.specName = event.target.value;
    }
    function specDetailChange(event) {
        spec.specDetail = event.target.value;
    }
    function specValueChange(event) {
        spec.specValue = event.target.value;
    }

    function specAdd() {
        if (spec.specName === '' || spec.specDetail === "" || spec.specValue === "")
            alert("Vui lòng nhập đủ thông tin!!!");
        else {
            const newList = listProductSpec.concat({ specName: spec.specName, specDetail: spec.specDetail, specValue: spec.specValue, groupId: 1 });

            setListProductSpec(newList);
            console.log(listProductSpec);
            spec.specName = '';
            spec.specDetail = "";
            spec.specValue = "";
            setShowspec(false);
        }
    }

    function specRemove(specName) {
        const newList = listProductSpec.filter((spec) => spec.specName !==specName);

        setListProductSpec(newList);
    }


    const [listProductAsset, setListProductAsset] = useState([]);
    const [Asset, setAsset] = useState({
        assetName: "",
        assetPath: "",
        assetType: "image",
        assetRole: "icon",
    })

    function assetNameChange(event) {
        Asset.assetName = event.target.value;
    }
    function assetPathChange(event) {
        Asset.assetPath = event.target.value;
    }
    function assetTypeChange(event) {
        Asset.assetType = event.target.value;
    }
    function assetRoleChange(event) {
        Asset.assetRole = event.target.value;
    }

    function assetAdd() {
        if (Asset.assetName === "" || Asset.assetPath === "" || Asset.assetType === "" || Asset.assetRole === "")
            alert("Vui lòng nhập đủ thông tin!!!");
        else {
            const newList = listProductAsset.concat({ assetName: Asset.assetName, assetPath: Asset.assetPath, assetType: Asset.assetType, assetRole: Asset.assetRole });

            setListProductAsset(newList);
            console.log(listProductAsset);
            Asset.assetName = "";
            Asset.assetPath = "";
            Asset.assetType = "image";
            Asset.assetRole = "icon";
            setShowAsset(false);
        }


    }

    function assetRemove(assetName) {
        const newList = listProductSpec.filter((asset) => asset.assetName !==assetName);

        setListProductAsset(newList);
    }

    // add  
    const [Product, setProduct] = useState({
        productName: "",
        productPrice: null,
        productVersion: "",
        productStock: null,
        companyId: 1,
        categoryId: 1,
        assets: [],
        specs: []
    });

    function NameChange(event) {
        Product.productName = event.target.value;
    }

    function categoryIdChange(event) {
        Product.categoryId = event.target.value;
        console.log(Product.categoryId);
    }
    function companyIdChange(event) {
        Product.companyId = event.target.value;
    }
    function productVersionChange(event) {
        Product.productVersion = event.target.value;
    }

    function productStockChange(event) {
        Product.productStock = event.target.value;
        console.log(Product.productStock);
    }
    function productPriceChange(event) {
        Product.productPrice = event.target.value;
    }

    // api post
    const [submitted, setSubmitted] = useState(false);
    const [isLoaded, setLoad] = useState(false);

    function addProduct() {

        Product.assets = listProductAsset;
        Product.specs = listProductSpec;
        if (Product.productName == "" || Product.productPrice == null || Product.productVersion == "" || Product.productStock == null || Product.assets == null || Product.specs == null)
            alert("Vui lòng nhập đủ thông tin!!!");
        else {
            setShow(true);
            setLoad(true);
            axios.post('/api/admin/product/add', Product, {
                headers: {
                    Authorization: `Bearer ${Cookies.get('authToken')}`,
                }
            }).then(res => {
                if (res.status == 200) {
                    setSubmitted(true);
                    // console.log(res.data);
                    setLoad(false);

                }
            })
                .catch(e => {
                    setLoad(false);
                    console.log(e);
                });

        }
    }
    // console.log(submitted);
    // console.log(Product);

    // popup

    const [showspec, setShowspec] = useState(false);

    const handleClosespec = () => setShowspec(false);
    const handleShowspec = () => setShowspec(true);

    const [showAsset, setShowAsset] = useState(false);

    const handleCloseAsset = () => setShowAsset(false);
    const handleShowAsset = () => setShowAsset(true);

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    // const handleShow = () => setShow(true);
    const handleContinue = () => {
        setShow(false);
        setProduct({
            productName: "",
            productPrice: "",
            productVersion: "",
            productStock: "",
            companyId: 1,
            categoryId: 1,
            assets: [],
            specs: []
        })
        setListProductSpec([]);
        setListProductAsset([]);
    }

    const userState = useSelector(state => state.user);

    if (userState.userId == -1) {
        return (
            <div className='centerText'>
                <h2>Bạn chưa đăng nhập</h2>
            </div>
        )
    }

    return (
        <div className="bg-light">
            <section className="section-content padding-y">
                <div className="container">

                    <div className=' container div-list'>
                        <h1>Thêm Sản Phẩm Mới</h1>

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
                                            <Modal.Body>Thêm sản phẩm thành công.</Modal.Body>
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
                            <Row>
                                <Col>
                                    <Form>
                                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                            <Form.Label>Tên Sản Phẩm:</Form.Label>
                                            <Form.Control type="text" placeholder="Tên sản phẩm" value={Product.productName} onChange={NameChange} />
                                        </Form.Group>

                                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                            <Form.Label>Danh mục:</Form.Label>

                                            <Form.Select aria-label="Default select example" value={Product.categoryId} onChange={categoryIdChange}>
                                                {
                                                    listCategory.map((category) => {
                                                        return (
                                                            <option value={category.categoryId}>{category.categoryName}</option>
                                                        )
                                                    })
                                                }
                                            </Form.Select>
                                        </Form.Group>

                                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                            <Form.Label>Công ty:</Form.Label>

                                            <Form.Select aria-label="Default select example" value={Product.companyId} onChange={companyIdChange}>
                                                {
                                                    listCompany.map((company) => {
                                                        return (
                                                            <option value={company.companyId}>{company.companyName}</option>
                                                        )
                                                    })
                                                }
                                            </Form.Select>
                                        </Form.Group>

                                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                            <Form.Label>Phiên bản:</Form.Label>
                                            <Form.Control as="textarea" rows={3} value={Product.productVersion} onChange={productVersionChange} />
                                        </Form.Group>

                                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                            <Form.Label>Số lượng:</Form.Label>
                                            <Form.Control type='number' placeholder="Số lượng" value={Product.productStock} onChange={productStockChange} />
                                        </Form.Group>

                                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                            <Form.Label>Giá:</Form.Label>
                                            <Form.Control type="number" placeholder="Giá" value={Product.productPrice} onChange={productPriceChange} />
                                        </Form.Group>
                                    </Form>
                                </Col>

                                <Col>
                                    <Form>
                                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                            <Form.Label>Thông số:</Form.Label>
                                            <Table striped bordered hover size="sm" responsive>
                                                <thead>
                                                    <tr>
                                                        <th>Tên thông số</th>
                                                        <th>Chi tiết thông số</th>
                                                        <th>Giá trị</th>
                                                        <th ></th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {
                                                        listProductSpec.map((spec) => (
                                                            <tr>
                                                                <td>{spec.specName}</td>
                                                                <td>{spec.specDetail}</td>
                                                                <td>{spec.specValue}</td>
                                                                <td> <Button variant="danger" size="sm" onClick={() =>specRemove(spec.specName)}>
                                                                    <i class="bi bi-trash"></i>
                                                                </Button></td>
                                                            </tr>
                                                        ))
                                                    }

                                                </tbody>
                                            </Table>

                                            <div className="center">
                                                <Button variant="primary" size="sm" onClick={handleShowspec}>
                                                    Thêm Thông Số
                                                </Button>
                                            </div>

                                            <Modal show={showspec} onHide={handleClosespec}>
                                                <Modal.Header closeButton>
                                                    <Modal.Title>Thêm Thông Số</Modal.Title>
                                                </Modal.Header>
                                                <Modal.Body>
                                                    <Form>
                                                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                                            <Form.Label>Tên thông số:</Form.Label>
                                                            <Form.Control type="text" placeholder="Tên thông số" value={spec.specName} onChange={specNameChange} />
                                                        </Form.Group>

                                                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                                            <Form.Label>Chi tiết thông số:</Form.Label>
                                                            <Form.Control type="text" placeholder="Chi tiết thông số" onChange={specDetailChange} value={spec.specDetail} />
                                                        </Form.Group>

                                                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                                            <Form.Label>Giá trị:</Form.Label>
                                                            <Form.Control type="text" placeholder="Giá trị" onChange={specValueChange} value={spec.specValue} />
                                                        </Form.Group>

                                                    </Form>
                                                </Modal.Body>

                                                <Modal.Footer>
                                                    <Button variant="secondary" onClick={handleClosespec}>
                                                        Đóng
                                                    </Button>
                                                    <Button variant="primary" onClick={specAdd}>
                                                        Thêm
                                                    </Button>
                                                </Modal.Footer>
                                            </Modal>


                                        </Form.Group>

                                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                            <Form.Label>Hình ảnh:</Form.Label>
                                            <Table striped bordered hover size="sm" responsive>
                                                <thead>
                                                    <tr>
                                                        <th>Tên ảnh</th>
                                                        <th>Đường dẩn</th>
                                                        <th>Loại</th>
                                                        <th>Vai trò</th>
                                                        <th ></th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {
                                                        listProductAsset.map((Asset) => (
                                                            <tr>
                                                                <td>{Asset.assetName}</td>
                                                                <td>{Asset.assetPath}</td>
                                                                <td>{Asset.assetType}</td>
                                                                <td>{Asset.assetRole}</td>
                                                                <td> <Button variant="danger" size="sm" onClick={() =>assetRemove(Asset.assetName)}>
                                                                    <i class="bi bi-trash"></i>
                                                                </Button></td>
                                                            </tr>
                                                        ))
                                                    }
                                                </tbody>
                                            </Table>

                                            <div className="center">
                                                <Button variant="primary" size="sm" onClick={handleShowAsset}>
                                                    Thêm ảnh
                                                </Button>
                                            </div>

                                            <Modal show={showAsset} onHide={handleCloseAsset}>
                                                <Modal.Header closeButton>
                                                    <Modal.Title>Thêm ảnh</Modal.Title>
                                                </Modal.Header>
                                                <Modal.Body>
                                                    <Form>
                                                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                                            <Form.Label>Tên ảnh:</Form.Label>
                                                            <Form.Control type="email" placeholder="Tên ảnh" value={Asset.assetName} onChange={assetNameChange} />
                                                        </Form.Group>

                                                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                                            <Form.Label>Đường dẩn:</Form.Label>
                                                            <Form.Control as="textarea" rows={3} value={Asset.assetPath} onChange={assetPathChange} />
                                                        </Form.Group>

                                                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                                            <Form.Label>Loại:</Form.Label>

                                                            <Form.Select aria-label="Default select example" value={Asset.assetType} onChange={assetTypeChange}>
                                                                <option value='image'>image</option>
                                                                <option value='video'>video</option>
                                                            </Form.Select>
                                                        </Form.Group>


                                                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                                            <Form.Label>Vai trò:</Form.Label>

                                                            <Form.Select aria-label="Default select example" value={Asset.assetRole} onChange={assetRoleChange}>
                                                                <option value='icon'>icon</option>
                                                                <option value='slide'>slide</option>
                                                            </Form.Select>
                                                        </Form.Group>
                                                    </Form>
                                                </Modal.Body>

                                                <Modal.Footer>
                                                    <Button variant="secondary" onClick={handleCloseAsset}>
                                                        Đóng
                                                    </Button>
                                                    <Button variant="primary" onClick={assetAdd}>
                                                        Thêm
                                                    </Button>
                                                </Modal.Footer>
                                            </Modal>

                                        </Form.Group>
                                    </Form>
                                </Col>
                            </Row>

                            <Row>
                                <div className="center">
                                    <Button variant="primary" size="lg" onClick={addProduct}>
                                        Thêm Sản Phẩm
                                    </Button>
                                </div>
                            </Row>
                        </Container>

                    </div>

                </div>
            </section>
        </div>
    );
}

export default ProductAdd;

