import React, { useState, useEffect, } from 'react';
import { useParams } from "react-router-dom";
import ProductServices from "../../services/Product"
import { Link } from "react-router-dom";
import Loader from '../Loader/Loader';
import '../Category/Category.css';
import axios from 'axios';

import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Pagination from 'react-bootstrap/Pagination';
import Checkbox from '../Category/Checkbox';
import Stack from 'react-bootstrap/Stack';
import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image';

const Category = props => {

    const [product, setproduct] = useState([]);
    const [isLoaded, setLoad] = useState(false);
    const [countProduct, setcountProduct] = useState(0);
    const [currentPage, setCurrentPage] = useState(1)
    const [countPage, setCountPage] = useState(0);


    const moneyFormat = new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND'
    })

    const params = useParams();

    useEffect(() => {
        const getCurrentPage = () => {
            if (params.page != null)
                setCurrentPage(params.page);
        }

        getCurrentPage();
    }, [])

    console.log(currentPage);

    useEffect(() => {
        const getCountProduct = () => {
            ProductServices.countProduct(params.category)
                .then((response) => {
                    console.log(response.data);
                    setcountProduct(response.data);
                })
                .catch(e => {
                    console.log(e);
                });
        }
        getCountProduct();

    }, [params])
    console.log(countProduct);

    useEffect(() => {
        const getCountPage = () => {
            let count = parseInt(countProduct / 12 + 1);
            setCountPage(count)
        }

        getCountPage();
    }, [countProduct])


    console.log(countPage);

    useEffect(() => {
        getProduct();
    }, [currentPage,params]);

    const getProduct = () => {
        const page = currentPage;
        console.log(page);
        console.log('/api/v1/product/'+params.category+"?page="+currentPage+(params.company?`&company=${params.company}`:''))
        axios.get('/api/v1/product/'+params.category+"?page="+currentPage+(params.company?`&company=${params.company}`:''))
        .then(res=>{
            setproduct(res.data);
            setLoad(true);
        }).catch(e=>{
            console.log(e);
        })
    }


    const add = parseInt(currentPage) + 1;

    useEffect(()=>{
        setLoad(false);
    },[params])

    return (

        <div className="bg-light">
            <section className="section-content padding-y">
                <div className="container">
                <Carousel variant="dark" >
                    <Carousel.Item interval={1000}>
                        <img
                            width='100%' 
                            height={300}
                            className="d-block w-100"
                            src="https://images.fpt.shop/unsafe/fit-in/800x300/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/5/11/638193959218106497_F-H1_800x300.png"
                            alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item interval={500}>
                        <img
                            width={800} 
                            height={300}
                            className="d-block w-100"
                            src="https://images.fpt.shop/unsafe/fit-in/800x300/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/5/18/638200327011939557_F-H1_800x300.png"
                            alt="Second slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            width={800} 
                            height={300}
                            className="d-block w-100"
                            src="https://images.fpt.shop/unsafe/fit-in/800x300/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/5/6/638189536497232738_F-H1_800x300.png"
                            // src="holder.js/800x400?text=Third slide&bg=20232a"
                            alt="Third slide"
                        />
                    </Carousel.Item>
                </Carousel>
                <br/>
                <Row>
                    <Col xs lg="2">
                        <Checkbox />
                    </Col>
                    <Col>
                        <div className="container div-list">
                            <div >
                                {
                                    params.category === 'phone' ?
                                        <h2>ĐIỆN THOẠI</h2> :
                                        params.category === 'laptop' ?
                                            <h2>LAPTOP</h2> :
                                            params.category === 'tablet' ?
                                                <h2>MÁY TÍNH BẢNG</h2> :
                                                <h2>PHỤ KIỆN</h2>
                                    // params.category ==='accessories'
                                }
                                <br />

                            </div>
                            {
                                isLoaded === false ?
                                    <div className="home-btn">
                                        <Loader className='mx-auto'></Loader>
                                    </div>
                                    :
                                    <Row xs='auto' sm={1} md={2} lg={4} className="g-4 ">


                                            {product?.map((product) => {
                                                return (
                                                    //console.log(product.productName),
                                                    <Col >
                                                        <Card className='card'>
                                                            <Link to={"/product/" + product.category+"/"+product.productId}>
                                                                <Card.Img className='card-img' variant="top" src={product.productIcon} height={230} /></Link>
                                                            <Card.Body>
                                                                <Link to={"/product/" + product.category+"/"+product.productId}>
                                                                    <Card.Title>{product.productName} - {product.productVersion}</Card.Title></Link>

                                                            <Card.Text className='fontPrice'>
                                                                {moneyFormat.format(product.productPrice)}
                                                            </Card.Text>

                                                            <Card.Text className='pro-rating'>{product.productRating} <i class="bi bi-star-fill"></i></Card.Text>

                                                             <div className='div-spec'>
                                                                <span ><i className='bi icon-screen-size'></i> spec</span>
                                                            </div>
                                                                 {/*<Link to={"/1"}>View Reviews</Link> */}
                                                            <div className='card-btn'>
                                                                <Button variant="danger" size="lg" >
                                                                        <Link to={"/product/" + product.category+"/"+product.productId}>
                                                                            <strong>Mua Ngay</strong>
                                                                        </Link>
                                                                    </Button>{' '}
                                                            </div>

                                                            </Card.Body>
                                                        </Card>
                                                    </Col>
                                                );
                                            })}

                                    </Row>
                            }
                            <br />

                            <div className="container div-list">

                                <div className="center">
                                    <Pagination >
                                        <Pagination.First disabled={parseInt(currentPage) === 1}
                                            onClick={() => setCurrentPage(1)} />
                                        <Pagination.Prev disabled={parseInt(currentPage) === 1}
                                            onClick={() => setCurrentPage(parseInt(currentPage) - 1)} />

                                        {Array.from({ length: countPage }).map((_, idx) => (
                                            <Pagination.Item key={idx + 1} active={(idx + 1) === parseInt(currentPage)}
                                                onClick={() => setCurrentPage(idx + 1)}>
                                                {idx + 1}
                                            </Pagination.Item>
                                        ))}

                                        <Pagination.Next disabled={parseInt(currentPage) === countPage}
                                            onClick={() => setCurrentPage(parseInt(currentPage) + 1)} />
                                        <Pagination.Last disabled={parseInt(currentPage) === countPage}
                                            onClick={() => setCurrentPage(parseInt(countPage))} />
                                    </Pagination>
                                </div>
                            </div>

                        </div>
                    </Col>

                </Row>
        </div>
        </section >
        </div >
    );

}

export default Category;

