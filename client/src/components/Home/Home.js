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
                                                        <Image src={product.productIcon} alt={product.productName} boxSize="160px" fallbackSrc='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeyOIU0kkPJe1f_kwLcA6P-b7UIn3l3s7juw&usqp=CAU' />
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
                                                        <Image src={product.productIcon} alt={product.productName} fallbackSrc='data:image/jpeg;base64,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' boxSize="160px" />
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
                                                        <Image src={product.productIcon} alt={product.productName} fallbackSrc='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeyOIU0kkPJe1f_kwLcA6P-b7UIn3l3s7juw&usqp=CAU' boxSize="160px" />
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
