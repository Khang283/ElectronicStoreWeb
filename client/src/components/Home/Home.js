import React, { useState, useEffect } from 'react';
import ProductServices from "../../services/Product"
import { Link } from "react-router-dom";
import '../Home/Home.css';
import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';

const Home = props => {
    const [productPhone, setproductPhone] = useState([]);
    const [productLaptop, setproductLaptop] = useState([]);
    const [productAccessories, setproductAccessories] = useState([]);
    const [productTablet, setproductTablet] = useState([]);

    useEffect(() => {
        getProductPhone();
        // getProductLaptop();
        // getProductAccessories();
        // getProductTablet();
    }, []);

    const getProductPhone = () => {
        ProductServices.getType("phone")
            .then(response => {
                //console.log(response.data);
                setproductPhone(response.data);
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
                                // src="holder.js/800x400?text=First slide&bg=373940"
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
                                <a href='#' className='cate-item-name'>
                                    <div className="cate-img" >
                                        <img src="https://images.fpt.shop/unsafe/fit-in/60x60/filters:quality(90):fill(transparent)/fptshop.com.vn/Uploads/images/2015/img-dienthoai-desk.png"
                                            alt="Điện thoại"></img>
                                    </div>
                                    <div >Điện Thoại</div>
                                </a>
                            </div>

                            <div className="cate-item">
                                <a href='#' className='cate-item-name'>
                                    <div className="cate-img" >
                                        <img src="https://images.fpt.shop/unsafe/fit-in/60x60/filters:quality(90):fill(transparent)/fptshop.com.vn/Uploads/images/2022/iconcate/icon-laptop.png"
                                            alt="Điện thoại"></img>
                                    </div>
                                    <div >Laptop</div>
                                </a>
                            </div>

                            <div className="cate-item">
                                <a href='#' className='cate-item-name'>
                                    <div className="cate-img" >
                                        <img src="https://images.fpt.shop/unsafe/fit-in/60x60/filters:quality(90):fill(transparent)/fptshop.com.vn/Uploads/images/2015/icon-mtb-desk.png"
                                            alt="Điện thoại"></img>
                                    </div>
                                    <div >Máy Tính Bảng</div>
                                </a>
                            </div>

                            <div className="cate-item">
                                <a href='#' className='cate-item-name'>
                                    <div className="cate-img" >
                                        <img src="https://images.fpt.shop/unsafe/fit-in/60x60/filters:quality(90):fill(transparent)/fptshop.com.vn/Uploads/images/2022/iconcate/icon-accessories.png"
                                            alt="Điện thoại"></img>
                                    </div>
                                    <div >Phụ Kiện</div>
                                </a>
                            </div>



                            <div className="cate-item">
                                <a href='#' className='cate-item-name'>
                                    <div className="cate-img" >
                                        <img src="https://images.fpt.shop/unsafe/fit-in/60x60/filters:quality(90):fill(transparent)/fptshop.com.vn/Uploads/images/2015/img-dienthoai-desk.png"
                                            alt="Điện thoại"></img>
                                    </div>
                                    <div >Điện thoại</div>
                                </a>
                            </div>

                            <div className="cate-item">
                                <a href='#' className='cate-item-name'>
                                    <div className="cate-img" >
                                        <img src="https://images.fpt.shop/unsafe/fit-in/60x60/filters:quality(90):fill(transparent)/fptshop.com.vn/Uploads/images/2015/img-dienthoai-desk.png"
                                            alt="Điện thoại"></img>
                                    </div>
                                    <div >Điện thoại</div>
                                </a>
                            </div>

                            <div className="cate-item">
                                <a href='#' className='cate-item-name'>
                                    <div className="cate-img" >
                                        <img src="https://images.fpt.shop/unsafe/fit-in/60x60/filters:quality(90):fill(transparent)/fptshop.com.vn/Uploads/images/2015/img-dienthoai-desk.png"
                                            alt="Điện thoại"></img>
                                    </div>
                                    <div >Điện thoại</div>
                                </a>
                            </div>

                            <div className="cate-item">
                                <a href='#' className='cate-item-name'>
                                    <div className="cate-img" >
                                        <img src="https://images.fpt.shop/unsafe/fit-in/60x60/filters:quality(90):fill(transparent)/fptshop.com.vn/Uploads/images/2015/img-dienthoai-desk.png"
                                            alt="Điện thoại"></img>
                                    </div>
                                    <div >Điện thoại</div>
                                </a>
                            </div>
                        </Row>
                    </div>

                    <br />

                    {/* <div className="container div-list">
                        <div >
                            <h2>SẢN PHẨM NỔI BẬT</h2>

                        </div>

                        <Row xs={1} md={4} sm={2} className="g-4">
                            {Array.from({ length: 8 }).map((_, idx) => (
                                <Col key={idx}>
                                    <Card>
                                        <Card.Img variant="top" src="https://images.fpt.shop/unsafe/fit-in/300x300/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/4/10/638167465484591506_samsung-galaxy-z-flip4-xanh-dd.jpg" />
                                        <Card.Body>
                                            <Card.Title>Card title</Card.Title>
                                            <Card.Text>
                                                This is a longer card with supporting text below as a natural
                                                lead-in to additional content. This content is a little bit
                                                longer.
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            ))}
                        </Row>
                        <br />

                        <div className="home-btn">
                            <Button variant="outline-secondary" size="sm" href="#">Xem tất cả </Button>{' '}
                        </div>


                    </div>

                    <br /> */}

                    

                    <div className="container div-list">
                        <div >
                            <h2>ĐIỆN THOẠI NỔI BẬT</h2>

                        </div>

                        <Row xs={1} md={4} sm={2} className="g-4">
                            {productPhone?.map((product) => {
                                return (
                                    //console.log(product.productName),
                                    <Col >
                                        <Card className='card'>
                                            <Card.Img className='card-img' variant="top" src={product.productIcon} />
                                            <Card.Body>
                                                <Card.Title>{product.productName}</Card.Title>
                                                <Card.Text className='fontPrice'>
                                                    {product.productPrice}  ₫
                                                </Card.Text>

                                                <Card.Text className='pro-rating'>{product.productRating} <i class="bi bi-star-fill"></i></Card.Text>

                                                <div className='div-spec'>
                                                    <span ><i className='bi icon-screen-size'></i> spec</span>
                                                </div>
                                                <div className='card-btn'>
                                                    <Button variant="danger" size="lg"><strong>Mua Ngay</strong></Button>{' '}
                                                </div>


                                                {/* <i class="bi bi-display"></i> */}
                                                <link to={""}></link>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                );
                            })}


                            {/* {Array.from({ length: 8 }).map((_, idx) => (
                                <Col key={idx}>
                                    <Card>
                                        <Card.Img variant="top" src="https://images.fpt.shop/unsafe/fit-in/300x300/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/4/10/638167465484591506_samsung-galaxy-z-flip4-xanh-dd.jpg" />
                                        <Card.Body>
                                            <Card.Title>Card title</Card.Title>
                                            <Card.Text>
                                                This is a longer card with supporting text below as a natural
                                                lead-in to additional content. This content is a little bit
                                                longer.
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            ))} */}
                        </Row>
                        <br />

                        <div className="home-btn">
                            <Button variant="outline-secondary" size="sm" href="#">Xem tất cả </Button>{' '}
                        </div>


                    </div>

                    <br />

                    <div className="container div-home home-btn">
                        <img src='https://images.fpt.shop/unsafe/fit-in/1200x200/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/5/12/638194816664696316_H5_1200X200.png'
                            height={200}></img>
                    </div>

                    <br />

                    <div className="container div-list">
                        <div >
                            <h2>LAPTOP NỔI BẬT</h2>

                        </div>

                        <Row xs={1} md={4} sm={2} className="g-4">
                            {Array.from({ length: 8 }).map((_, idx) => (
                                <Col key={idx}>
                                    <Card>
                                        <Card.Img variant="top" src="https://images.fpt.shop/unsafe/fit-in/300x300/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/4/10/638167465484591506_samsung-galaxy-z-flip4-xanh-dd.jpg" />
                                        <Card.Body>
                                            <Card.Title>Card title</Card.Title>
                                            <Card.Text>
                                                This is a longer card with supporting text below as a natural
                                                lead-in to additional content. This content is a little bit
                                                longer.
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            ))}
                        </Row>
                        <br />

                        <div className="home-btn">
                            <Button variant="outline-secondary" size="sm" href="#">Xem tất cả </Button>{' '}
                        </div>


                    </div>

                    <br />

                    <div className="container div-home home-btn">
                        <img src='https://images.fpt.shop/unsafe/fit-in/1200x200/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/5/1/638184972894739287_F-H5_1200x200.png'
                            height={200}></img>
                    </div>

                    <br />

                    <div className="container div-list">
                        <div >
                            <h2>TABLET NỔI BẬT</h2>

                        </div>

                        <Row xs={1} md={4} sm={2} className="g-4">
                            {Array.from({ length: 4 }).map((_, idx) => (
                                <Col key={idx}>
                                    <Card>
                                        <Card.Img variant="top" src="https://images.fpt.shop/unsafe/fit-in/300x300/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/4/10/638167465484591506_samsung-galaxy-z-flip4-xanh-dd.jpg" />
                                        <Card.Body>
                                            <Card.Title>Card title</Card.Title>
                                            <Card.Text>
                                                This is a longer card with supporting text below as a natural
                                                lead-in to additional content. This content is a little bit
                                                longer.
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            ))}
                        </Row>
                        <br />

                        <div className="home-btn">
                            <Button variant="outline-secondary" size="sm" href="#">Xem tất cả </Button>{' '}
                        </div>


                    </div>
                </div>
            </section>
        </div>
    );
}


export default Home;
