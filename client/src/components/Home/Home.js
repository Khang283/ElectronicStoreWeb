import React, { useState, useEffect } from 'react';
import ProductServices from "../../services/Product"
import { Box, Flex, Text, Image, Square } from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";
import { Navigation, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import Heading from "./Heading";
import { Link } from "react-router-dom";
import uuid from "react-uuid";
import {
    ItemDetails1,
    ItemDetails2,
    ItemDetails3,
    ItemDetails4,
    ItemDetails5,
    ItemDetails6,
    ItemDetails7,
    ItemDetails8,
    ItemDetails9,
    ItemDetails10,
    ItemDetails11,
    ItemDetails12,
    ItemDetails13,
    ItemDetails14,
    ItemDetails15,
    ItemDetails16,
    ItemDetails17,
    ItemDetails18,
} from "./CardDetails";
import ItemCard1 from "./ItemCard1";
import ItemCard2 from "./ItemCard2";
import ItemCard4 from "./ItemCard4";
import ItemCard5 from "./ItemCard5";
import ItemCard6 from "./ItemCard6";
import ItemCard7 from "./ItemCard7";
import ItemCard8 from "./ItemCard8";
import Carousel from 'react-bootstrap/Carousel';
// import Image from 'react-bootstrap/Image';
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
                console.log(response.data);
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
        <Box className="bg-light">
            <ItemCard1 type={ItemDetails1} />
            <ItemCard1 type={ItemDetails2} />
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
                        <Box justifyContent="left" w="95%" m="auto" mt="6" cursor="pointer">
                            {/* <Heading heading="Điện thoại nổi bật" /> */}
                            <Box mt="1">
                                <Swiper
                                    modules={[Navigation, Autoplay]}
                                    navigation
                                    autoplay={{ delay: 4000 }}
                                    breakpoints={{
                                        0: {
                                            slidesPerView: 1,
                                            spaceBetween: 10,
                                        },
                                        480: {
                                            slidesPerView: 2,
                                            spaceBetween: 10,
                                        },
                                        768: {
                                            slidesPerView: 2,
                                            spaceBetween: 15,
                                        },
                                        1024: {
                                            slidesPerView: 3,
                                            spaceBetween: 15,
                                        },
                                        1280: {
                                            slidesPerView: 4,
                                            spaceBetween: 30,
                                        },
                                    }}
                                >
                                    {productPhone?.map((product) => (
                                        <Box key={uuid()}>
                                            <SwiperSlide>
                                                <Link to={"/product/" + product.category + "/" + product.productId}>
                                                    <Square m="auto" _hover={{ transform: "scale(1.1)" }}>
                                                        <Image src={product.productIcon} alt={product.productName} boxSize="160px" />
                                                    </Square>
                                                    <Box p="2" mt="4">
                                                        <Text
                                                            color="#275293"
                                                            noOfLines={2}
                                                            textAlign="left"
                                                            fontSize="15px"
                                                            _hover={{ color: "red" }}
                                                        >
                                                            {product.productName} - {product.productVersion}
                                                        </Text>
                                                        <Box mt="2.5">
                                                            <Flex>
                                                                <Square>
                                                                    <Text color="gray.600" fontSize="14px">
                                                                        Giá niêm yết:{" "}
                                                                    </Text>
                                                                </Square>
                                                                <Square>
                                                                    <Text fontWeight="600" fontSize="18px" ml="1">
                                                                        {moneyFormat.format(product.productPrice)}
                                                                    </Text>
                                                                </Square>
                                                            </Flex>
                                                            <Flex>
                                                                <Square>
                                                                    <Text color="gray.600" fontSize="14px">
                                                                        Đánh giá:{"    "}
                                                                    </Text>
                                                                </Square>
                                                                <Square>
                                                                <Box className='product-rating'>
                                                {Array.from({ length: 5 }).map((_, idx) => (
                                                    idx < product.productRating ? <StarIcon color="teal.500" /> : <StarIcon />
                                                ))}
                                            </Box>
                                                                </Square>
    
                                                            </Flex>
                                                            <Box
                                                                borderRadius="xl"
                                                                border="1px"
                                                                borderColor="green.900"
                                                                w="40%"
                                                                color="green.500"
                                                                bg="green.50"
                                                                mt="2"
                                                                textAlign="center"
                                                            >
                                                                <Text fontSize="10px" fontWeight="500">
                                                                    Giá tốt nhất
                                                                </Text>
                                                            </Box>
                                                        </Box>
                                                    </Box>
                                                </Link>
                                            </SwiperSlide>
                                        </Box>
                                    ))}
                                </Swiper>
                            </Box>
                        </Box>
                }

                <br />

                <div className="home-btn">
                    <Button variant="outline-secondary" size="sm" href="phone">Xem tất cả </Button>{' '}
                </div>


            </div>

            <br />
            <hr />

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
                        <Box justifyContent="left" w="95%" m="auto" mt="6" cursor="pointer">
                            {/* <Heading heading="Điện thoại nổi bật" /> */}
                            <Box mt="1">
                                <Swiper
                                    modules={[Navigation, Autoplay]}
                                    navigation
                                    autoplay={{ delay: 4000 }}
                                    breakpoints={{
                                        0: {
                                            slidesPerView: 1,
                                            spaceBetween: 10,
                                        },
                                        480: {
                                            slidesPerView: 2,
                                            spaceBetween: 10,
                                        },
                                        768: {
                                            slidesPerView: 2,
                                            spaceBetween: 15,
                                        },
                                        1024: {
                                            slidesPerView: 3,
                                            spaceBetween: 15,
                                        },
                                        1280: {
                                            slidesPerView: 4,
                                            spaceBetween: 30,
                                        },
                                    }}
                                >
                                    {productLaptop?.map((product) => (
                                        <Box key={uuid()}>
                                            <SwiperSlide>
                                                <Link to={"/product/" + product.category + "/" + product.productId}>
                                                    <Square m="auto" _hover={{ transform: "scale(1.1)" }}>
                                                        <Image src={product.productIcon} alt={product.productName} boxSize="160px" />
                                                    </Square>
                                                    <Box p="2" mt="4">
                                                        <Text
                                                            color="#275293"
                                                            noOfLines={2}
                                                            textAlign="left"
                                                            fontSize="15px"
                                                            _hover={{ color: "red" }}
                                                        >
                                                            {product.productName} - {product.productVersion}
                                                        </Text>
                                                        <Box mt="2.5">
                                                            <Flex>
                                                                <Square>
                                                                    <Text color="gray.600" fontSize="14px">
                                                                        Giá niêm yết:{" "}
                                                                    </Text>
                                                                </Square>
                                                                <Square>
                                                                    <Text fontWeight="600" fontSize="18px" ml="1">
                                                                        {moneyFormat.format(product.productPrice)}
                                                                    </Text>
                                                                </Square>
    
                                                            </Flex>
                                                            <Flex>
                                                                <Square>
                                                                    <Text color="gray.600" fontSize="14px">
                                                                        Đánh giá:{"    "}
                                                                    </Text>
                                                                </Square>
                                                                <Square>
                                                                <Box className='product-rating'>
                                                {Array.from({ length: 5 }).map((_, idx) => (
                                                    idx < product.productRating ? <StarIcon color="teal.500" /> : <StarIcon />
                                                ))}
                                            </Box>
                                                                </Square>
    
                                                            </Flex>
                                                            
                                                            <Box
                                                                borderRadius="xl"
                                                                border="1px"
                                                                borderColor="green.900"
                                                                w="40%"
                                                                color="green.500"
                                                                bg="green.50"
                                                                mt="2"
                                                                textAlign="center"
                                                            >
                                                                <Text fontSize="10px" fontWeight="500">
                                                                    Giá tốt nhất
                                                                </Text>
                            
                                                            </Box>
                                                        </Box>
                                                    </Box>
                                                </Link>
                                            </SwiperSlide>
                                        </Box>
                                    ))}
                                </Swiper>
                            </Box>
                        </Box>
                }
                <br />

                <div className="home-btn">
                    <Button variant="outline-secondary" size="sm" href="laptop">Xem tất cả </Button>{' '}
                </div>


            </div>

            <br />
            <hr />
            <ItemCard4 type={ItemDetails6} heading="GIẢM GIÁ ĐIỆN THOẠI" />
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
                        <Box justifyContent="left" w="95%" m="auto" mt="6" cursor="pointer">
                            {/* <Heading heading="Điện thoại nổi bật" /> */}
                            <Box mt="1">
                                <Swiper
                                    modules={[Navigation, Autoplay]}
                                    navigation
                                    autoplay={{ delay: 4000 }}
                                    breakpoints={{
                                        0: {
                                            slidesPerView: 1,
                                            spaceBetween: 10,
                                        },
                                        480: {
                                            slidesPerView: 2,
                                            spaceBetween: 10,
                                        },
                                        768: {
                                            slidesPerView: 2,
                                            spaceBetween: 15,
                                        },
                                        1024: {
                                            slidesPerView: 3,
                                            spaceBetween: 15,
                                        },
                                        1280: {
                                            slidesPerView: 4,
                                            spaceBetween: 30,
                                        },
                                    }}
                                >
                                    {productTablet?.map((product) => (
                                        <Box key={uuid()}>
                                            <SwiperSlide>
                                                <Link to={"/product/" + product.category + "/" + product.productId}>
                                                    <Square m="auto" _hover={{ transform: "scale(1.1)" }}>
                                                        <Image src={product.productIcon} alt={product.productName} boxSize="160px" />
                                                    </Square>
                                                    <Box p="2" mt="4">
                                                        <Text
                                                            color="#275293"
                                                            noOfLines={2}
                                                            textAlign="left"
                                                            fontSize="15px"
                                                            _hover={{ color: "red" }}
                                                        >
                                                            {product.productName} - {product.productVersion}
                                                        </Text>
                                                        <Box mt="2.5">
                                                            <Flex>
                                                                <Square>
                                                                    <Text color="gray.600" fontSize="14px">
                                                                        Giá niêm yết:{" "}
                                                                    </Text>
                                                                </Square>
                                                                <Square>
                                                                    <Text fontWeight="600" fontSize="18px" ml="1">
                                                                        {moneyFormat.format(product.productPrice)}
                                                                    </Text>
                                                                </Square>
    
                                                            </Flex>
                                                            <Flex>
                                                                <Square>
                                                                    <Text color="gray.600" fontSize="14px">
                                                                        Đánh giá:{"    "}
                                                                    </Text>
                                                                </Square>
                                                                <Square>
                                                                <Box className='product-rating'>
                                                {Array.from({ length: 5 }).map((_, idx) => (
                                                    idx < parseInt(product.productRating) ? <StarIcon color="teal.500" /> : <StarIcon />
                                                ))}
                                            </Box>
                                                                </Square>
    
                                                            </Flex>
                                                            
                                                            <Box
                                                                borderRadius="xl"
                                                                border="1px"
                                                                borderColor="green.900"
                                                                w="40%"
                                                                color="green.500"
                                                                bg="green.50"
                                                                mt="2"
                                                                textAlign="center"
                                                            >
                                                                <Text fontSize="10px" fontWeight="500">
                                                                    Giá tốt nhất
                                                                </Text>
                            
                                                            </Box>
                                                        </Box>
                                                    </Box>
                                                </Link>
                                            </SwiperSlide>
                                        </Box>
                                    ))}
                                </Swiper>
                            </Box>
                        </Box>
                }
                <br />

                <div className="home-btn">
                    <Button variant="outline-secondary" size="sm" href="tablet">Xem tất cả </Button>{' '}
                </div>


            </div>
        </Box>
    );
}


export default Home;
