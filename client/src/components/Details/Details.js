import React, { useState, useEffect, useRef } from 'react';
import '../Details/Details.css';
import SoldIcon from '../../images/sold.png';
import { useParams } from "react-router-dom";
import CardProduct from '../Card/CardProduct';

import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import ProductServices from "../../services/Product"
import axios from 'axios';
import Cookies from 'js-cookie';
import Cart from '../Cart/Cart';
import Popup from 'reactjs-popup';
import Loader from '../layout/Loader';
import { useAlert } from 'react-alert';
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { useSelector } from 'react-redux';
import AlertTemplate from 'react-alert-template-basic';
import { current } from '@reduxjs/toolkit';

const Details = () => {
  const alert = useAlert();

  const [slideIndex, setSlideIndex] = useState(1);

  const [width, setWidth] = useState(0);

  const [start, setStart] = useState(0);

  const [change, setChange] = useState(9);

  const { id } = useParams();

  const [loading, setLoad] = useState(true);

  // const [selectedColor, setSelectedColor] = useState(product.colors[0]);

  const [infoTitle, setInfoTitle] = useState('Cấu hình');

  const slideRef = useRef();
  //
  const moneyFormat = new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND'
  })


  const [Product, setProduct] = useState({
    // productId: null,
    productName: "",
    productPrice: null,
    productSale: null,
    productIcon: "",
    productVersion: "",
    productRating: null,
    productSold: null,
    productStock: null,
    productStatus: "",
    company: "",
    category: "",
    assets: [],
    specs: []
  });
  const getProduct = id => {
    ProductServices.getProductById(id)
      .then(response => {
        setProduct(response.data);
        setListAsset(response.data.assets);
        setCompany(response.data.company);
        setCategory(response.data.category);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  const params = useParams();
  useEffect(() => {
    getProduct(params.id)
  }, [params.id]);


  //list
  const [listProduct, setListProduct] = useState([]);
  const [loadingList, setLoadList] = useState(false);
  const [company, setCompany] = useState('');
  const [category, setCategory] = useState('');

  useEffect(() => {
    getListProduct();
  }, [Product]);

  const getListProduct = () => {
    setLoadList(true);
    axios.get(`/api/v1/product/${category}?limit=8&company=${company}`)
      .then(res => {
        setListProduct(res.data);
        setLoadList(false);
        console.log(res.data);
      }).catch(e => {
        console.log(e);
      })
  }
  const [listReview, setListReview] = useState([]);
  const [loadingReview, setLoadReview] = useState(false);
  const [isRVSubmit, setRVSubmit] = useState(false);

  useEffect(() => {
    getListReview();
  }, [Product]);

  const getListReview = () => {
    setLoadReview(true);
    axios.get(`/api/v1/product/${params.id}/review`)
      .then(res => {
        setListReview(res.data.reverse());
        setLoadReview(false);
        setRVSubmit(true);
        console.log(res.data);
      }).catch(e => {
        setRVSubmit(false);
        setLoadReview(false);
        console.log(e);
      })
  }

  useEffect(() => {
    if (!slideRef.current) return;
    const scrollWidth = slideRef.current.scrollWidth;
    const childElementCount = slideRef.current.childElementCount;
    const width = scrollWidth / childElementCount;
    setWidth(width)
  }, [])
  function plusSlides(n) {
    setSlideIndex(prev => prev + n);
    slideShow(slideIndex + n);
  }

  function slideShow(n) {
    if (n > listAsset.length) { setSlideIndex(1) };
    if (n < 1) { setSlideIndex(listAsset.length) };
  }

  function dragStart(e) {
    setStart(e.clientX)
  }

  function dragOver(e) {
    let touch = e.clientX;
    setChange(start - touch);
  }

  function dragEnd(e) {
    if (change > 0) {
      slideRef.current.scrollLeft += width;
    } else {
      slideRef.current.scrollLeft -= width;
    }
  }

  useEffect(() => {
    if (!slideRef.current || !width) return;
    let numOfThumb = Math.round(slideRef.current.offsetWidth / width);
    slideRef.current.scrollLeft = slideIndex > numOfThumb ? (slideIndex - 1) * width : 0;
  }, [width, slideIndex])

  const handleAddToCart = () => {
    // console.log(id);
    const payload = {
      productId: id,
    }
    axios.post('/api/cart/add', payload, {
      headers: {
        Authorization: `Bearer ${Cookies.get('authToken')}`,
      }
    }).then(res => {
      if (res.status === 200) {
        setLoad(false);
        alert.success("Thêm vào giỏ hàng thành công");
      }
    }).catch(e => {
      console.log(e);
      alert.error("Đã xảy ra lỗi");
    })
  }

  const [listAsset, setListAsset] = useState([]);


  useEffect(() => {
    const getListAsset = () => {
      setListAsset(listAsset.filter((item) => item.assetRole !== 'icon'));
      // console.log(listAsset);
    }
    getListAsset();
  }, [Product])

  // console.log(listAsset);

  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false)
    setreviewContent('');
    setreviewRating('');
    setReviewId(0);
    setEdit(false);
  };
  const handleShow = () => setShow(true);

  const [reviewContent, setreviewContent] = useState('');
  const [reviewRating, setreviewRating] = useState('');

  function reviewContentchane(event) {
    setreviewContent(event.target.value);
  }

  useEffect(() => {
    const getreviewRating = () => {
      if (parseInt(reviewRating) > 5 || parseInt(reviewRating) < 1)
        setreviewRating('');
    }
    getreviewRating();
  }, [reviewRating])

  function reviewRatingchane(event) {
    setreviewRating(event.target.value);
  }

  const userState = useSelector(state => state.user);

  function addReview() {
    if (reviewRating === "" || reviewContent === '') {
      window.alert("Vui lòng nhập đủ thông tin!!!");
    }
    else {
      if (edit === false) {
        const review = ({
          productId: parseInt(params.id),
          userId: userState.userId,
          reviewRating: parseInt(reviewRating),
          reviewContent: reviewContent,
        })
        // console.log(review);
        axios.post('/api/v1/product/addreview', review)
          .then(res => {
            if (res.status == 200) {
              // setSubmitted(true);
              // console.log(res.data);
              // setLoad(false);
              setreviewContent('');
              setreviewRating('');

              getListReview();

              setShow(false);
            }
          })
          .catch(e => {
            // setLoad(false);
            console.log(e);
          })
      }
      else {
        const reviewEdit = {
          reviewRating: parseInt(reviewRating),
          reviewContent: reviewContent,
          reviewId: reviewId
        }

        axios.put('/api/v1/product/updatereview', reviewEdit)
          .then(res => {
            if (res.status == 200) {
              // setSubmitted(true);
              // console.log(res.data);
              // setLoad(false);
              setreviewContent('');
              setreviewRating('');
              setReviewId(0);

              getListReview();

              setShow(false);
            }
          })
          .catch(e => {
            // setLoad(false);
            console.log(e);
          })
      }
    }

  }

  function removeReview(reviewId) {
    const confirmDelete = window.confirm(`Bạn có chắc muốn xóa sản phẩm này khỏi giỏ hàng?`);
    console.log(reviewId);
    if (confirmDelete) {
      const id = reviewId;
      axios.delete('/api/v1/product/deletereview/' + id)
        .then(res => {
          if (res.status == 200) {
            // setSubmitted(true);
            // console.log(res.data);
            // setLoad(false);
            getListReview();
          }
        })
        .catch(e => {
          // setLoad(false);
          console.log(e);
        })
    }
  }
  const [edit, setEdit] = useState(false);
  const [reviewId, setReviewId] = useState(0);

  function updateReview(review) {
    setreviewContent(review.reviewContent);
    setreviewRating(review.reviewRating);
    setShow(true);
    setEdit(true);
    setReviewId(review.reviewId);
  }

  const handleFavorite = ()=>{
    const payload = {
      productId: id,
      userId: "",
    }
    axios.post('/api/favorite',payload,{
      headers: {
        Authorization: `Bearer ${Cookies.get('authToken')}`,
      }
    }).then(res=>{
      if(res.status === 200){
        alert.success("Đã thêm sản phẩm vào yêu thích");
      }
      else{
        alert.info("Sản phẩm đã nằm trong yêu thích");
      }
    }).catch(e=>{
      console.log(e);
      alert.error("Đã xảy ra lỗi");
    })
  }

  // console.log(listProduct);

  return (
    <div className='container'>
      <React.Fragment>
        <section className='product-details'>
          <div className='product-page-img' >
            {
              listAsset.map((image, index) => (
                <div key={index} className='mySlides'
                  style={{ display: (index + 1) === slideIndex ? "block" : "none" }}>
                  <div className='numbertext'>{index + 1} / {Product.assets.length}</div>
                  <img src={image.assetPath} alt="" width={200} height={2}></img>
                </div>
              ))
            }

            <a href="#" className='prev' onClick={() => plusSlides(-1)}>&#10094;</a>
            <a href="#" className='next' onClick={() => plusSlides(1)}>&#10095;</a>
            <div className='slider-img' draggable={true} ref={slideRef}
              onDragStart={dragStart} onDragOver={dragOver} onDragEnd={dragEnd}>
              {
                listAsset.map((image, index) => (
                  <div key={index} className={`slider-box ${index + 1 === slideIndex ? 'active' : ''}`}
                    onClick={() => setSlideIndex(index + 1)}>
                    <img src={image.assetPath} alt=""></img>
                  </div>
                ))
              }
            </div>
          </div>

          <div className='product-page-details'>
            <strong>{Product.productName} - {Product.productVersion}</strong>

            <p className='product-category'>
              {Product.company} - {Product.category}
            </p>

            <p className='product-price'> {moneyFormat.format(Product.productPrice)}
              {/* ${Math.round(Product.productPrice - product.price * product.discount / 100)} <del>{product.price}$</del> */}
            </p>

            <div className='product-sold'>

              {/* <div className='product-page-offer'>
              <i className="fa-solid fa-tag"></i> {product.discount}% discount
               </div> */}

              <div className='product-sold'>
                <img src={SoldIcon} alt="SoldIcon" />
                <strong><span>Đã bán: </span> {Product.productSold}</strong>
              </div>

              <div className='product-sold'>
                <strong><span>Còn lại: </span> {Product.productStock}</strong>
              </div>

              <div className='product-rating'>
                {Array.from({ length: 5 }).map((_, idx) => (
                  idx < Product.productRating ? <i class="bi bi-star-fill"></i> : <i class="bi bi-star"></i>
                ))}
              </div>

              <div className='cart-btns'>
                <button className='add-cart' onClick={handleAddToCart}>Thêm vào giỏ hàng</button>
                {/* {loading ? <Loader /> : <Cart />} */}
                {/* <button className='add-cart' onClick={handleAddToCart}>Thêm vào giỏ hàng</button> */}
                {/* <a href="#" className='add-cart buy-now'>Buy Now</a> */}
                &emsp;
                <button className='btn-danger btn-favorite' onClick={handleFavorite}>Yêu thích</button>
              </div>
            </div>
          </div>
        </section>

        <section className='product-all-info'>
          <ul className='product-info-menu'>
            <li key='Thông tin sản phẩm' onClick={() => setInfoTitle('Thông tin sản phẩm')}
              className={`p-info-list ${'Thông tin sản phẩm' === infoTitle ? 'active' : ''}`}>
              Thông tin sản phẩm
            </li>

            <li key='Cấu hình' onClick={() => setInfoTitle('Cấu hình')}
              className={`p-info-list ${'Cấu hình' === infoTitle ? 'active' : ''}`}>
              Cấu hình
            </li>

            <li key='Đánh giá sản phẩm' onClick={() => setInfoTitle('Đánh giá sản phẩm')}
              className={`p-info-list ${'Đánh giá sản phẩm' === infoTitle ? 'active' : ''}`}>
              Đánh giá sản phẩm
            </li>

            <li key='Câu hỏi thường gặp' onClick={() => setInfoTitle('Câu hỏi thường gặp')}
              className={`p-info-list ${'Câu hỏi thường gặp' === infoTitle ? 'active' : ''}`}>
              Câu hỏi thường gặp
            </li>
          </ul>

          <div key='Thông tin sản phẩm'
            className={`info-container ${'Thông tin sản phẩm' === infoTitle ? 'active' : ''}`}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque consectetur vero asperiores quis animi explicabo accusamus nemo cupiditate harum pariatur! Provident sit tenetur totam mollitia consectetur nesciunt, recusandae obcaecati itaque
          </div>

          <div key='Cấu hình'
            className={`info-container ${'Cấu hình' === infoTitle ? 'active' : ''}`}>
            <div className='infotext'>Cấu hình chi tiết:</div>
            <br />
            <div className='spec'>
              <Table striped bordered hover responsive="sm" size="sm" >
                <tr>
                  <th>Cấu hình</th>
                  <th>Giá trị</th>
                </tr>
                <tbody>
                  {
                    Product.specs.map((spec) => (
                      <tr key={spec.specDetail}>
                        <td>{spec.specDetail} </td>
                        <td>{spec.specValue}</td>
                      </tr>
                    ))
                  }</tbody>
              </Table>
            </div>

          </div>

          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              {
                edit === true ?
                  <Modal.Title>Sửa đánh giá</Modal.Title> :
                  <Modal.Title>Thêm đánh giá</Modal.Title>
              }

            </Modal.Header>
            <Modal.Body>
              <Form>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label>Dánh giá:</Form.Label>
                  <Form.Control type="number" max={5} placeholder="Tên thông số" value={reviewRating} onChange={reviewRatingchane} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label>Nội dung:</Form.Label>
                  <Form.Control type="text" placeholder="Chi tiết thông số" onChange={reviewContentchane} value={reviewContent} />
                </Form.Group>
              </Form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Đóng
              </Button>
              <Button variant="primary" onClick={() => addReview()}>
                {
                  edit === true ? 'Sửa': 'Thêm'
                }
              </Button>
            </Modal.Footer>
          </Modal>

          <div key='Đánh giá sản phẩm'
            className={`info-container ${'Đánh giá sản phẩm' === infoTitle ? 'active' : ''}`}>
            <Row xs={1}>
              <Col md={4}>
                <div className='infotext'>Đánh giá sản phẩm:</div>
              </Col>
              {
                userState.userId !== -1 ?
                  <Col md={{ span: 4, offset: 4 }}>
                    <Button variant="success" size='lg' onClick={handleShow}>Đánh giá</Button>
                  </Col> : <Col></Col>
              }

            </Row>

            <br />

            {
              loadingReview === 'true' ?
                <div className="home-btn">
                  <Loader></Loader>
                </div> :
                isRVSubmit === 'false' || listReview.length === 0 ?
                  <div className="home-btn">
                    <div className=''>
                      <h3>Không có đánh giá</h3>
                    </div>
                  </div> :
                  listReview.map((review, index) => {
                    if (index >= 10) return (<div />);
                    return (
                      <div>
                        <Row>
                          <Col xs="auto">
                            <div><i class="bi bi-person-circle" ></i> </div>
                          </Col>
                          <Col xs="auto">
                            <h5><strong>{review.userName}</strong></h5>
                            <div className='product-rating'>
                              {Array.from({ length: 5 }).map((_, idx) => (
                                idx < review.reviewRating ? <i class="bi bi-star-fill"></i> : <i class="bi bi-star"></i>
                              ))}
                            </div>
                            <div>{review.reviewContent}</div>
                            <br></br>
                          </Col>

                          {
                            parseInt(userState.userId) === parseInt(review.userId) ?
                              <Col xs="auto">
                                {/* <Button variant="danger" size="sm" onClick={() => assetRemove(Asset.assetName)}>
                              <i class="bi bi-trash"></i>
                            </Button> */}
                                <Button variant="warning" size="sm" onClick={() => updateReview(review)}>
                                  <i class="bi bi-pencil-square"></i>
                                </Button>
                                <Button variant="danger" size="sm" onClick={() => removeReview(review.reviewId)}>
                                  <i class="bi bi-trash"></i>
                                </Button>
                              </Col> : <Col></Col>
                          }

                        </Row>
                      </div>
                    );
                  })
            }
          </div>
          <div key='Câu hỏi thường gặp'
            className={`info-container ${'Câu hỏi thường gặp' === infoTitle ? 'active' : ''}`}>
            Câu hỏi thường gặp
          </div>
        </section>

        <div className="container div-list">
          <div >
            <h2>SẢN PHẨM CÙNG HÃNG</h2>

          </div>
          {
            loadingList === true ?
              <div className="home-btn">
                <Loader></Loader>
              </div>
              :
              <Row xs={1} md={4} sm={2} className="g-4">
                {listProduct?.map((product) => {

                  return (
                    parseInt(product.productId) !== parseInt(params.id) ?
                      <Col >
                        <CardProduct product={product}></CardProduct>
                      </Col> : <br></br>
                  );
                })}
              </Row>
          }
        </div>
      </React.Fragment>
    </div>
  )
}

export default Details