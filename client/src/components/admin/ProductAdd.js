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
    const [listSpecGroup, setListSpecGroup] = useState([]);

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
                    setListcompany(response.data);
                    // setLoadPhone(true);
                })
                .catch(e => {
                    console.log(e);
                });
        }

        getListCompany();
    }, [])

    useEffect(() => {
        const getListSpecGroup = () => {
            axios.get(`/api/v1/getlistspecgroup`)
                .then(response => {
                    setListSpecGroup(response.data);
                })
                .catch(e => {
                    console.log(e);
                });
        }

        getListSpecGroup();
    }, [])

    //get data spect
    const [listProductSpec, setListProductSpec] = useState([]);
    const [specName, setSpecName] = useState("");
    const [specDetail, setSpecDetail] = useState("");
    const [specValue, setSpecValue] = useState("");
    const [groupId, setGroupId] = useState(1);


    const [spec, setSpec] = useState({
        specName: "",
        specDetail: "",
        specValue: "",
        groupId: 1,
    })

    function specNameChange(event) {
        setSpecName(event.target.value);
    }
    function specDetailChange(event) {
        setSpecDetail(event.target.value);
    }
    function specValueChange(event) {
        setSpecValue(event.target.value);
    }
    function groupIdChange(event) {
        setGroupId(event.target.value);
    }

    function specAdd() {
        if (specName === '' || specDetail === "" || specValue === "")
            alert("Vui lòng nhập đủ thông tin!!!");
        else {
            // setSpec({ specName, specDetail, specValue, groupId });
            const newList = listProductSpec.concat({ specName, specDetail, specValue, groupId });
            // const newList = listProductSpec.concat(spec);

            setListProductSpec(newList);
            console.log(listProductSpec);
            setSpecName('');
            setSpecDetail('');
            setSpecValue('');
            setGroupId(1);

            setShowspec(false);
        }
    }


    function specRemove(specName) {
        const newList = listProductSpec.filter((spec) => spec.specName !== specName);

        setListProductSpec(newList);
    }

    //get list asset
    const [listProductAsset, setListProductAsset] = useState([]);
    const [assetName, setassetName] = useState('');
    const [assetPath, setassetPath] = useState('');
    const [assetType, setassetType] = useState("image");
    const [assetRole, setassetRole] = useState("image");

    const [Asset, setAsset] = useState({
        assetName: "",
        assetPath: "",
        assetType: "image",
        assetRole: "icon",
    })

    function assetNameChange(event) {
        setassetName(event.target.value);
    }
    function assetPathChange(event) {
        setassetPath(event.target.value);
    }
    function assetTypeChange(event) {
        setassetType(event.target.value);
    }
    function assetRoleChange(event) {
        setassetRole(event.target.value);
    }

    function assetAdd() {
        if (assetName === "" || assetPath === "" || assetType === "" || assetRole === "")
            alert("Vui lòng nhập đủ thông tin!!!");
        else {
            const newList = listProductAsset.concat({ assetName, assetPath, assetType, assetRole });

            setListProductAsset(newList);
            console.log(listProductAsset);
            setassetName('');
            setassetPath('');
            setassetType("image");
            setassetRole("icon");

            setShowAsset(false);
        }


    }

    function assetRemove(assetName) {
        const newList = listProductAsset.filter((asset) => asset.assetName !== assetName);

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
    const [productName, setproductName] = useState('');
    const [productPrice, setproductPrice] = useState(null);
    const [productVersion, setproductVersion] = useState('');
    const [productStock, setproductStock] = useState(null);
    const [companyId, setcompanyId] = useState(1);
    const [categoryId, setcategoryId] = useState(1);
    const [assets, setassets] = useState([]);
    const [specs, setspecs] = useState([]);

    function NameChange(event) {
        setproductName(event.target.value);
    }

    function categoryIdChange(event) {
        setcategoryId(event.target.value);
        // console.log(Product.categoryId);
    }
    function companyIdChange(event) {
        setcompanyId(event.target.value);
    }
    function productVersionChange(event) {
        setproductVersion(event.target.value);
    }

    function productStockChange(event) {
        setproductStock(event.target.value);
        // console.log(Product.productStock);
    }
    function productPriceChange(event) {
        setproductPrice(event.target.value);
    }

    // api post
    const [submitted, setSubmitted] = useState(false);
    const [isLoaded, setLoad] = useState(false);

    function addProduct() {


        if (productName == "" || productPrice == null || productVersion == "" || companyId == null || categoryId == null || productStock == null || assets == null || specs == null)
            alert("Vui lòng nhập đủ thông tin!!!");
        else {
            setShow(true);
            setLoad(true);
            setassets(listProductAsset);
            setspecs(listProductSpec);
            setProduct({ productName, productPrice, productVersion, productStock, companyId, categoryId, listProductAsset, listProductSpec })
            axios.post('/api/admin/product/add', Product, {
                headers: {
                    Authorization: `Bearer ${Cookies.get('authToken')}`,
                }
            }).then(res => {
                if (res.status == 200) {
                    setSubmitted(true);
                    // console.log(res.data);
                    setLoad(false);
                    console.log(Product);

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

                                                <Button variant="primary">
                                                    <Link to={"/admin/product"}>
                                                        Hoàn tất
                                                    </Link>
                                                </Button>
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
                                            <Form.Control type="text" placeholder="Tên sản phẩm" value={productName} onChange={NameChange} />
                                        </Form.Group>

                                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                            <Form.Label>Danh mục:</Form.Label>

                                            <Form.Select aria-label="Default select example" value={categoryId} onChange={categoryIdChange}>
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

                                            <Form.Select aria-label="Default select example" value={companyId} onChange={companyIdChange}>
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
                                            <Form.Control as="textarea" rows={3} value={productVersion} onChange={productVersionChange} />
                                        </Form.Group>

                                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                            <Form.Label>Số lượng:</Form.Label>
                                            <Form.Control type='number' placeholder="Số lượng" value={productStock} onChange={productStockChange} />
                                        </Form.Group>

                                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                            <Form.Label>Giá:</Form.Label>
                                            <Form.Control type="number" placeholder="Giá" value={productPrice} onChange={productPriceChange} />
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
                                                        <th>Nhóm</th>
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
                                                                {
                                                                    listSpecGroup.map((SpecGroup) => {
                                                                        if (parseInt(SpecGroup.groupId) == parseInt(spec.groupId))
                                                                            return (
                                                                                <td>{SpecGroup.groupName}</td>
                                                                            )
                                                                    })

                                                                }
                                                                <td> <Button variant="danger" size="sm" onClick={() => specRemove(spec.specName)}>
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
                                                            <Form.Control type="text" placeholder="Tên thông số" value={specName} onChange={specNameChange} />
                                                        </Form.Group>

                                                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                                            <Form.Label>Chi tiết thông số:</Form.Label>
                                                            <Form.Control type="text" placeholder="Chi tiết thông số" onChange={specDetailChange} value={specDetail} />
                                                        </Form.Group>

                                                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                                            <Form.Label>Giá trị:</Form.Label>
                                                            <Form.Control type="text" placeholder="Giá trị" onChange={specValueChange} value={specValue} />
                                                        </Form.Group>

                                                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                                            <Form.Label>Nhóm:</Form.Label>

                                                            <Form.Select aria-label="Default select example" value={groupId} onChange={groupIdChange}>
                                                                {
                                                                    listSpecGroup.map((SpecGroup) => {
                                                                        return (
                                                                            <option value={SpecGroup.groupId}>{SpecGroup.groupName}</option>
                                                                        )
                                                                    })
                                                                }
                                                            </Form.Select>
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
                                                                <td> <Button variant="danger" size="sm" onClick={() => assetRemove(Asset.assetName)}>
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
                                                            <Form.Control type="email" placeholder="Tên ảnh" value={assetName} onChange={assetNameChange} />
                                                        </Form.Group>

                                                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                                            <Form.Label>Đường dẩn:</Form.Label>
                                                            <Form.Control as="textarea" rows={3} value={assetPath} onChange={assetPathChange} />
                                                        </Form.Group>

                                                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                                            <Form.Label>Loại:</Form.Label>

                                                            <Form.Select aria-label="Default select example" value={assetType} onChange={assetTypeChange}>
                                                                <option value='image'>image</option>
                                                                <option value='video'>video</option>
                                                            </Form.Select>
                                                        </Form.Group>


                                                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                                            <Form.Label>Vai trò:</Form.Label>

                                                            <Form.Select aria-label="Default select example" value={assetRole} onChange={assetRoleChange}>
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

