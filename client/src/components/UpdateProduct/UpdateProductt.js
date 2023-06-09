import React, { Fragment, useState, useEffect } from 'react';
import MetaData from '../layout/MetaData';
import { useAlert } from 'react-alert'
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
//import ProductServices from '../../services';
import { Button, FormControl, FormGroup, FormLabel, FormSelect, Row } from 'react-bootstrap';
import { Form, useParams } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
const UpdateProductt = ({ match, history }) => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState(0);
    const [stock, setStock] = useState(0);
    const [version, setVersion] = useState('');
    const [sold, setSold] = useState(0);
    const alert = useAlert();
    const [companyId, setCompanyId] = useState(0);
    const [cagetoryId, setCagetoryId] = useState(0);
    const [listCategory, setListCategory] = useState([]);
    const [listCompany, setListCompany] = useState([]);
    useEffect(() => {
        const getListCategory = ()=>{
        axios.get(`/api/v1/getlistcategory`)
        .then(response => {
            setListCategory(response.data);
        })
        .catch(e => {
            console.log(e);
        })
    }
    getListCategory();})
    useEffect(() => {
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
    })
    let {id} = useParams();
    useEffect(() => {
        const getProductById = (id) => {
            axios.get(`api/v1/product?productId=${id}`)
            .then(response => {
                setName(response.data.name);
                setPrice(response.data.productPrice);
                setVersion(response.data.productVersion);
                setStock(response.data.productStock);
                setCompanyId(response.data.companyId);
                setCagetoryId(respond.data.cagetoryId);
                
            }
            ).catch(e => {console.log(e)})
            
        }
    }, []);
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
                            <h1>Thêm Sản Phẩm Mới</h1>
    
                            <Container>
                                <Row>
                                    <Col>
                                        <Form>
                                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                                <Form.Label>Tên Sản Phẩm:</Form.Label>
                                                <Form.Control type="text" placeholder={name} />
                                            </Form.Group>
    
                                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                                <Form.Label>Danh mục:</Form.Label>
    
                                                <Form.Select aria-label="Default select example">
                                                    {
                                                        listCategory.map((category) => {
                                                            return (
                                                                <option defaultValue={cagetoryId} value={category.categoryId}>{category.categoryName}</option>
                                                            )
                                                        })
                                                    }
                                                </Form.Select>
                                            </Form.Group>
    
                                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                                <Form.Label>Công ty:</Form.Label>
    
                                                <Form.Select aria-label="Default select example">
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
                                                <Form.Control placeholder={version} as="textarea" rows={3} />
                                            </Form.Group>
    
                                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                                <Form.Label>Số lượng:</Form.Label>
                                                <Form.Control type='number' placeholder={stock} />
                                            </Form.Group>
    
                                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                                <Form.Label>Giá:</Form.Label>
                                                <Form.Control type="number" placeholder={price} />
                                            </Form.Group>
                                        </Form>
                                    </Col>
    
                                    <Col>
                                        <Form>
                                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                                <Form.Label>Thông số:</Form.Label>
                                                <Table striped bordered hover size="sm">
                                                    <thead>
                                                        <tr>
                                                            <th>Tên thông số</th>
                                                            <th>Chi tiết thông số</th>
                                                            <th>Giá trị</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>1</td>
                                                            <td>Mark</td>
                                                            <td>Otto</td>
                                                        </tr>
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
                                                                <Form.Control type="text" placeholder="Tên thông số" />
                                                            </Form.Group>
    
                                                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                                                <Form.Label>Chi tiết thông số:</Form.Label>
                                                                <Form.Control type="text" placeholder="Chi tiết thông số" />
                                                            </Form.Group>
    
                                                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                                                <Form.Label>Giá trị:</Form.Label>
                                                                <Form.Control type="text" placeholder="Giá trị" />
                                                            </Form.Group>
    
                                                        </Form>
                                                    </Modal.Body>
    
                                                    <Modal.Footer>
                                                        <Button variant="secondary" onClick={handleClosespec}>
                                                            Đóng
                                                        </Button>
                                                        <Button variant="primary" onClick={handleClosespec}>
                                                            Thêm
                                                        </Button>
                                                    </Modal.Footer>
                                                </Modal>
    
    
                                            </Form.Group>
    
                                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                                <Form.Label>Hình ảnh:</Form.Label>
                                                <Table striped bordered hover size="sm">
                                                    <thead>
                                                        <tr>
                                                            <th>Tên ảnh</th>
                                                            <th>Đường dẩn</th>
                                                            <th>Loại</th>
                                                            <th>Vai trò</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>1</td>
                                                            <td>Mark</td>
                                                            <td>Otto</td>
                                                            <td>Otto</td>
                                                        </tr>
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
                                                                <Form.Control type="email" placeholder="Tên ảnh" />
                                                            </Form.Group>
    
                                                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                                                <Form.Label>Đường dẩn:</Form.Label>
                                                                <Form.Control as="textarea" rows={3} />
                                                            </Form.Group>
    
                                                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                                                <Form.Label>Loại:</Form.Label>
    
                                                                <Form.Select aria-label="Default select example">
                                                                    <option value='image'>image</option>
                                                                    <option value='video'>video</option>
                                                                </Form.Select>
                                                            </Form.Group>
    
    
                                                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                                                <Form.Label>Vai trò:</Form.Label>
    
                                                                <Form.Select aria-label="Default select example">
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
                                                        <Button variant="primary" onClick={handleCloseAsset}>
                                                            Thêm
                                                        </Button>
                                                    </Modal.Footer>
                                                </Modal>
    
                                            </Form.Group>
                                        </Form>
                                    </Col>
                                </Row>
                            </Container>
    
                        </div>
    
                    </div>
                </section>
            </div>
        );
    }
        {/*<div>
            <MetaData title={'Update Product'} />
            <div className='bg-light'>  
                <section className='section-content py'>
                    <div className='container'>
                        <h1 className="mb-4">Cập nhật sản phẩm</h1>
                        <Container>
                            <Row>
                                <Col><FormGroup className='shadow-lg' >
                            <FormGroup>
                                <FormLabel className='text-center control-label'>Tên sản phẩm</FormLabel>
                                <Form className=''><FormControl type='text'></FormControl></Form>
                            </FormGroup>
                            <FormGroup>
                                <FormLabel className='text-center control-label'>Phiên bản</FormLabel>
                                <Form className=''><FormControl type='text'></FormControl></Form>
                            </FormGroup>
                            <FormGroup>
                                <FormLabel className='text-center control-label'>Số lượng hàng tồn</FormLabel>
                                <Form className=''><FormControl type='text'></FormControl></Form>
                            </FormGroup>
                            <FormGroup>
                                <FormLabel className='col-md-4 text-center control-label'>Đã bán</FormLabel>
                                <Form className='col-md-4'><FormControl type='text'></FormControl></Form>
                            </FormGroup>
                            <FormGroup>
                                <FormLabel className='col-md-4 text-center control-label'>Giá sản phẩm</FormLabel>
                                <Form className='col-md-4'><FormControl type='text'></FormControl></Form>
                            </FormGroup>
                            <FormGroup>
                                <FormLabel className='col-md-4 text-center control-label'>Trạng thái</FormLabel>
                                <Form className='col-md-4'><FormControl type='text'></FormControl></Form>
                            </FormGroup>
                            <FormGroup>
                                <FormLabel className='text-center col-md-4 control-label'>Tên Công Ty</FormLabel>
                                <Form col-md-12><FormSelect className='col-md-4 text-center'>
                                    <option>Apple</option>
                                    <option>Samsung</option>
                                    <option>Oppo</option>
                                    <option>Xiaomi</option>
                                </FormSelect>
                                </Form>
                            </FormGroup>
                            <FormGroup>
                                <FormLabel className='text-center col-md-4 control-label'>Danh mục</FormLabel>
                                <Form className='col-md-12'><FormSelect className='col-md-4 text-center'>
                                    <option>Accessories</option>
                                    <option>Điện thoại</option>
                                    <option>Laptop</option>
                                    <option>Tablet</option>
                                </FormSelect>
                                </Form>
                            </FormGroup>
                            <FormGroup>
                                <Button className='btn btn-block py-3'>Cập nhật</Button>
    </FormGroup>*/}
                            
                            {/*<div className="row">
            <div className="col-12 col-md-2">
                <Sidebar />
            </div>

            <div className="col-12 col-md-10">
                <Fragment>
                    <div className="wrapper my-5">
                        <form className="shadow-lg" onSubmit={submitHandler} encType='multipart/form-data'>
                            <h1 className="mb-4">Cập nhật sản phẩm</h1>

                            <div className="form-group">
                                <label htmlFor="name_field">Tên sản phẩm</label>
                                <input
                                    type="text"
                                    id="name_field"
                                    className="form-control"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="price_field">Giá</label>
                                <input
                                    type="text"
                                    id="price_field"
                                    className="form-control"
                                    value={price}
                                    onChange={(e) => setPrice(e.target.value)}
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="description_field">Mô tả</label>
                                <textarea className="form-control" id="description_field" rows="8" value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
                            </div>

                            <div className="form-group">
                                <label htmlFor="category_field">Danh mục</label>
                                <select className="form-control" id="category_field" value={category} onChange={(e) => setCategory(e.target.value)}>
                                    {categories.map(category => (
                                        <option key={category} value={category} >{category}</option>
                                    ))}

                                </select>
                            </div>
                            <div className="form-group">
                                <label htmlFor="stock_field">Số lượng</label>
                                <input
                                    type="number"
                                    id="stock_field"
                                    className="form-control"
                                    value={stock}
                                    onChange={(e) => setStock(e.target.value)}
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="seller_field">Xuất xứ</label>
                                <input
                                    type="text"
                                    id="seller_field"
                                    className="form-control"
                                    value={seller}
                                    onChange={(e) => setSeller(e.target.value)}
                                />
                            </div>

                            <div className='form-group'>
                                <label>Ảnh</label>

                                <div className='custom-file'>
                                    <input
                                        type='file'
                                        name='product_images'
                                        className='custom-file-input'
                                        id='customFile'
                                        onChange={onChange}
                                        multiple
                                    />
                                    <label className='custom-file-label' htmlFor='customFile'>
                                        Chọn hình
                                    </label>
                                </div>

                                {oldImages && oldImages.map(img => (
                                    <img key={img} src={img.url} alt={img.url} className="mt-3 mr-2" width="55" height="52" />
                                ))}

                                {imagesPreview.map(img => (
                                    <img src={img} key={img} alt="Images Preview" className="mt-3 mr-2" width="55" height="52" />
                                ))}

                            </div>


                            <button
                                id="login_button"
                                type="submit"
                                className="btn btn-block py-3"
                                disabled={loading ? true : false}
                            >
                                Cập nhật
                            </button>

                        </form>
                    </div>
                </Fragment>
            </div>
                                </div>*/}
                       {/*} </FormGroup></Col>
                            </Row>
                        
                        </Container>
                    </div>

                    </section> 
            </div>
            
                            </div>*/}

                        

export default UpdateProductt;
