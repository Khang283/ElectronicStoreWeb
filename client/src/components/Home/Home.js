import React, { useState, useEffect } from 'react';
import ProductServices from "../../services/Product"
import { Link } from "react-router-dom";

import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Home/Home.css';
import Loader from '../Loader/Loader';
import Stack from 'react-bootstrap/Stack';
import CardProduct from '../Card/CardProduct';

const Home = props => {
    const [productPhone, setproductPhone] = useState([]);
    const [productLaptop, setproductLaptop] = useState([]);
    const [productAccessories, setproductAccessories] = useState([]);
    const [productTablet, setproductTablet] = useState([]);

    const [isLoadedPhone, setLoadPhone] = useState(false);
    const [isLoadedLaptop, setLaptop] = useState(false);
    const [isLoadedAccessories, setLoadAccessories] = useState(false);
    const [isLoadedTablet, setLoadTablet] = useState(false);

    const moneyFormat = new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND'
    })

    useEffect(() => {
        getProductPhone();
        getProductLaptop();
        // getProductAccessories();
        getProductTablet();
    }, []);

    const getProductPhone = () => {
        ProductServices.getType("phone", 8)
            .then(response => {
                //console.log(response.data);
                setproductPhone(response.data);
                //console.log(response.data);
                setLoadPhone(true);
            })
            .catch(e => {
                console.log(e);
            });
    }

    const getProductLaptop = () => {
        ProductServices.getType("laptop", 8)
            .then(response => {
                //console.log(response.data);
                setproductLaptop(response.data);
                setLaptop(true);
            })
            .catch(e => {
                console.log(e);
            });
    }

    // const getProductAccessories = () => {
    //     ProductServices.getType("accessories", 8)
    //         .then(response => {
    //             console.log(response.data);
    //             setproductAccessories(response.data);
    //             setLaptop(true);
    //         })
    //         .catch(e => {
    //             console.log(e);
    //         });
    // }

    const getProductTablet = () => {
        ProductServices.getType("tablet", 8)
            .then(response => {
                //console.log(response.data);
                setproductTablet(response.data);
                setLoadTablet(true);
            })
            .catch(e => {
                console.log(e);
            });
    }

    return (
        <div className="bg-light">
            <section className="section-content padding-y">
                <div className="container">
                    <Carousel variant="dark" >
                        <Carousel.Item interval={1000}>
                            <img
                                className="d-block w-100"
                                src="https://images.fpt.shop/unsafe/fit-in/800x300/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/5/11/638193959218106497_F-H1_800x300.png"
                                alt="First slide"
                            />
                            {/* <Carousel.Caption>
                                <h3>First slide label</h3>
                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            </Carousel.Caption> */}
                        </Carousel.Item>
                        <Carousel.Item interval={500}>
                            <img
                                className="d-block w-100"

                                src="https://images.fpt.shop/unsafe/fit-in/800x300/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/5/18/638200327011939557_F-H1_800x300.png"
                                alt="Second slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="https://images.fpt.shop/unsafe/fit-in/800x300/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/5/6/638189536497232738_F-H1_800x300.png"
                                // src="holder.js/800x400?text=Third slide&bg=20232a"
                                alt="Third slide"
                            />
                        </Carousel.Item>
                    </Carousel>

                    <br />

                    <div className="container div-home">
                        <Row xs={2} md={8} sm={4}>
                            <div className="cate-item">
                                <Link to='/phone' className='cate-item-name'>
                                    <div className="cate-img" >
                                        <img src="https://images.fpt.shop/unsafe/fit-in/60x60/filters:quality(90):fill(transparent)/fptshop.com.vn/Uploads/images/2015/img-dienthoai-desk.png"
                                            alt="Điện thoại"></img>
                                    </div>
                                    <div >Điện Thoại</div>
                                </Link>
                            </div>

                            <div className="cate-item">
                                <Link to='/laptop' className='cate-item-name'>
                                    <div className="cate-img" >
                                        <img src="https://images.fpt.shop/unsafe/fit-in/60x60/filters:quality(90):fill(transparent)/fptshop.com.vn/Uploads/images/2022/iconcate/icon-laptop.png"
                                            alt="Điện thoại"></img>
                                    </div>
                                    <div >Laptop</div>
                                </Link>
                            </div>

                            <div className="cate-item">
                                <Link to='/tablet' className='cate-item-name'>
                                    <div className="cate-img" >
                                        <img src="https://images.fpt.shop/unsafe/fit-in/60x60/filters:quality(90):fill(transparent)/fptshop.com.vn/Uploads/images/2015/icon-mtb-desk.png"
                                            alt="Điện thoại"></img>
                                    </div>
                                    <div >Máy Tính Bảng</div>
                                </Link>
                            </div>

                            <div className="cate-item">
                                <Link to='/accessories' className='cate-item-name'>
                                    <div className="cate-img" >
                                        <img src="https://images.fpt.shop/unsafe/fit-in/60x60/filters:quality(90):fill(transparent)/fptshop.com.vn/Uploads/images/2022/iconcate/icon-accessories.png"
                                            alt="Điện thoại"></img>
                                    </div>
                                    <div >Phụ Kiện</div>
                                </Link>
                            </div>
                        </Row>
                    </div>

                    <br />

                    <div className="container div-list">
                        <div >
                            <h2>ĐIỆN THOẠI NỔI BẬT</h2>

                        </div>
                        {
                            isLoadedPhone === false ?
                                <div className="home-btn">
                                    <Loader></Loader>
                                </div>
                                :
                                <Row xs={1} md={4} sm={2} className="g-4 ">


                                    {productPhone?.map((product) => {
                                        return (
                                            //console.log(product.productName),
                                            <Col >
                                                <CardProduct product={product}></CardProduct>
                                            </Col>
                                        );
                                    })}
                                </Row>
                        }
                        <br />

                        <div className="home-btn">
                            <Button variant="outline-secondary" size="sm" href="phone">Xem tất cả </Button>{' '}
                        </div>


                    </div>

                    <br />

                    <div className="container div-list">
                        <div >
                            <h2>LAPTOP NỔI BẬT</h2>

                        </div>
                        {
                            isLoadedLaptop === false ?
                                <div className="home-btn">
                                    <Loader></Loader>
                                </div>
                                :
                                <Row xs={1} md={4} sm={2} className="g-4">
                                    {productLaptop?.map((product) => {
                                        return (
                                            console.log(product.productName),
                                            <Col >
                                                <CardProduct product={product}></CardProduct>
                                            </Col>
                                        );
                                    })}
                                </Row>
                        }
                        <br />

                        <div className="home-btn">
                            <Button variant="outline-secondary" size="sm" href="laptop">Xem tất cả </Button>{' '}
                        </div>


                    </div>

                    <br />

                    <div className="container div-list">
                        <div >
                            <h2>TABLET NỔI BẬT</h2>

                        </div>
                        {
                            isLoadedTablet === false ?
                                <div className="home-btn">
                                    <Loader></Loader>
                                </div>
                                :
                                <Row xs={1} md={4} sm={2} className="g-4">
                                    {productTablet?.map((product) => {
                                        return (
                                            //console.log(product.productName),
                                            <Col >
                                                <CardProduct product={product}></CardProduct>
                                            </Col>
                                        );
                                    })}
                                </Row>
                        }
                        <br />

                        <div className="home-btn">
                            <Button variant="outline-secondary" size="sm" href="tablet">Xem tất cả </Button>{' '}
                        </div>


                    </div>
                </div>
            </section>
        </div>
    );
}


export default Home;
