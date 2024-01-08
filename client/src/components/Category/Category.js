import React, { useState, useEffect, } from 'react';
import { useParams } from "react-router-dom";
import ProductServices from "../../services/Product"
import { Link } from "react-router-dom";
import Loader from '../Loader/Loader';
import '../Category/Category.css';
import axios from 'axios';
import { Box, Grid, GridItem, Heading , Center } from "@chakra-ui/react";
import { RotatingLines } from "react-loader-spinner";
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Pagination from 'react-bootstrap/Pagination';
import Checkbox from '../Category/Checkbox';
import Stack from 'react-bootstrap/Stack';
import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image';
import CardProduct from '../Card/CardProduct';

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
    }, [currentPage, params]);

    const getProduct = () => {
        const page = currentPage;
        console.log(page);
        console.log('/api/v1/product/' + params.category + "?page=" + currentPage + (params.company ? `&company=${params.company}` : ''))
        axios.get('/api/v1/product/' + params.category + "?page=" + currentPage + (params.company ? `&company=${params.company}` : '' + '&limit=12'))
            .then(res => {
                setproduct(res.data);
                setLoad(true);
                console.log(res.data);
            }).catch(e => {
                console.log(e);
            })
    }


    const add = parseInt(currentPage) + 1;

    useEffect(()=>{
        setLoad(false);
    },[params])

    return (

        // <div className="bg-light">
        //     <section className="section-content padding-y">
        //         <div className="container">
        //         <Carousel variant="dark" >
        //             <Carousel.Item interval={1000}>
        //                 <img
        //                     width='100%' 
        //                     height={300}
        //                     className="d-block w-100"
        //                     src="https://images.fpt.shop/unsafe/fit-in/800x300/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/5/11/638193959218106497_F-H1_800x300.png"
        //                     alt="First slide"
        //                 />
        //             </Carousel.Item>
        //             <Carousel.Item interval={500}>
        //                 <img
        //                     width={800} 
        //                     height={300}
        //                     className="d-block w-100"
        //                     src="https://images.fpt.shop/unsafe/fit-in/800x300/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/5/18/638200327011939557_F-H1_800x300.png"
        //                     alt="Second slide"
        //                 />
        //             </Carousel.Item>
        //             <Carousel.Item>
        //                 <img
        //                     width={800} 
        //                     height={300}
        //                     className="d-block w-100"
        //                     src="https://images.fpt.shop/unsafe/fit-in/800x300/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/5/6/638189536497232738_F-H1_800x300.png"
        //                     // src="holder.js/800x400?text=Third slide&bg=20232a"
        //                     alt="Third slide"
        //                 />
        //             </Carousel.Item>
        //         </Carousel>
        //         <br/>
        //         <Row>
        //             <Col xs lg="2">
        //                 <Checkbox />
        //             </Col>
        //             <Col>
        //                 <div className="container div-list">
        //                     <div >
        //                         {
        //                             params.category === 'phone' ?
        //                                 <h2>ĐIỆN THOẠI</h2> :
        //                                 params.category === 'laptop' ?
        //                                     <h2>LAPTOP</h2> :
        //                                     params.category === 'tablet' ?
        //                                         <h2>MÁY TÍNH BẢNG</h2> :
        //                                         <h2>PHỤ KIỆN</h2>
        //                             // params.category ==='accessories'
        //                         }
        //                         <br />

        //                     </div>
        //                     {
        //                         isLoaded === false ?
        //                             <div className="home-btn">
        //                                 <Loader className='mx-auto'></Loader>
        //                             </div>
        //                             :
        //                             <Row xs='auto' sm={1} md={2} lg={4} className="g-4 ">


        //                                     {product?.map((product) => {
        //                                         return (
        //                                             //console.log(product.productName),
        //                                             <Col >
        //                                                 <CardProduct product={product}></CardProduct>
        //                                             </Col>
        //                                         );
        //                                     })}

        //                             </Row>
        //                     }
        //                     <br />

        //                     <div className="container div-list">

        //                         <div className="center">
        //                             <Pagination >
        //                                 <Pagination.First disabled={parseInt(currentPage) === 1}
        //                                     onClick={() => setCurrentPage(1)} />
        //                                 <Pagination.Prev disabled={parseInt(currentPage) === 1}
        //                                     onClick={() => setCurrentPage(parseInt(currentPage) - 1)} />

        //                                 {Array.from({ length: countPage }).map((_, idx) => (
        //                                     <Pagination.Item key={idx + 1} active={(idx + 1) === parseInt(currentPage)}
        //                                         onClick={() => setCurrentPage(idx + 1)}>
        //                                         {idx + 1}
        //                                     </Pagination.Item>
        //                                 ))}

        //                                 <Pagination.Next disabled={parseInt(currentPage) === countPage}
        //                                     onClick={() => setCurrentPage(parseInt(currentPage) + 1)} />
        //                                 <Pagination.Last disabled={parseInt(currentPage) === countPage}
        //                                     onClick={() => setCurrentPage(parseInt(countPage))} />
        //                             </Pagination>
        //                         </div>
        //                     </div>

        //                 </div>
        //             </Col>

        //         </Row>
        // </div>
        // </section >
        // </div >
        <Box p="5">
            {
                                    params.category === 'phone' ?
                                        <Heading p="5" marginBottom={5}>ĐIỆN THOẠI</Heading> :
                                        params.category === 'laptop' ?
                                        <Heading p="5" marginBottom={5}>LAPTOP</Heading> :
                                            params.category === 'tablet' ?
                                            <Heading p="5" marginBottom={5}>MÁY TÍNH BẢNG</Heading> :
                                            <Heading p="5" marginBottom={5}>PHỤ KIỆN</Heading>
                                    // params.category ==='accessories'
                                }
      {isLoaded == false ? (
          <Box h={20}>
        <Center>
          <RotatingLines
            strokeColor="grey"
            strokeWidth="5"
            animationDuration="0.75"
            // width="150"
            height={20}
            visible={true}
            />
        </Center>
          </Box>
      )
      : (
        <Grid
          templateColumns={[
            "repeat(1, 1fr)",
            "repeat(2,1fr)",
            "repeat(3,1fr)",
            "repeat(4,1fr)",
            "repeat(5,1fr)",
          ]}
          gap={3}
        >
          {product?.map((product,i) => {
            // console.log("in the products page in the map method and elem is :- ", elem);
            return (
              <GridItem
                key={product.name + i}
                w="100%"
                bg="white.500"
                boxShadow="rgba(0, 0, 0, 0.15) 0px 2px 8px"
                padding="25px 25px 0px 25px"
                _hover={{
                  boxShadow:
                    "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px",
                  cursor: "pointer",
                }}
              >
                <CardProduct product={product} />
              </GridItem>
            );
          })}
        </Grid>
      )}
      <br />
      <Center>
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
      </Center>
    </Box>
    );

}

export default Category;

