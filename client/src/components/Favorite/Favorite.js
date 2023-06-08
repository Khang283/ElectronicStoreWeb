import React, { useState, useEffect, } from 'react';
import { useParams } from "react-router-dom";
import ProductServices from "../../services/Product"
import { Link } from "react-router-dom";
import Loader from '../Loader/Loader';
import axios from 'axios';
import '../Favorite/Favorite.css';

import Placeholder from 'react-bootstrap/Placeholder';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Pagination from 'react-bootstrap/Pagination';

const Favorite = props => {

    const [currentPage, setCurrentPage] = useState(1)
    const [countPage, setCountPage] = useState(0);

    const params = useParams();

    useEffect(() => {
        const getCurrentPage = () => {
            if (params.page != null)
                setCurrentPage(params.page);
        }

        getCurrentPage();
    }, [])

    console.log(currentPage);
    return (
        <div className="bg-light">
            <section className="section-content padding-y">
                <div className="container">
                    <div className="container div-list">
                        <Row xs='auto' sm={1} md={2} lg={4} className="g-4 ">
                            <Col>
                                <Card style={{ width: '14rem' }}>
                                    <Card.Img variant="top" src="S22.jpg" />
                                    <Card.Body>
                                        <Card.Title>Samsung galaxy S22 5G 128GB</Card.Title>
                                        <div className='product_price'>
                                            12.990.000đ
                                            <strike className='product_discount'>
                                                21.990.000đ
                                            </strike>
                                        </div>
                                        <div className="d-grid gap-2"><Button variant="danger">Mua Ngay</Button></div>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col>
                                <Card style={{ width: '14rem' }}>
                                    <Card.Img variant="top" src="14pm.jpg" />
                                    <Card.Body>
                                        <Card.Title>iPhone 14 Pro Max 128GB</Card.Title>
                                        <div className='product_price'>
                                            24,290,000đ
                                            <strike className='product_discount'>
                                                25,790,000đ
                                            </strike>
                                        </div>
                                        <div className="d-grid gap-2"><Button variant="danger">Mua Ngay</Button></div>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col>
                                <Card style={{ width: '14rem' }}>
                                    <Card.Img variant="top" src="ip13.png" />
                                    <Card.Body>
                                        <Card.Title> iPhone 13 128GB</Card.Title>
                                        <div className='product_price'>
                                            14.899.000 đ
                                            <strike className='product_discount'>
                                                20.990.000đ
                                            </strike>
                                        </div>
                                        <div className="d-grid gap-2"><Button variant="danger">Mua Ngay</Button></div>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col>
                                <Card style={{ width: '14rem' }}>
                                    <Card.Img variant="top" src="13promax.jpg" />
                                    <Card.Body>
                                        <Card.Title>iPhone 13 Pro Max 128GB</Card.Title>
                                        <div className='product_price'>
                                            18.990.000đ
                                            <strike className='product_discount'>
                                                22.990.000đ
                                            </strike>
                                        </div>
                                        <div className="d-grid gap-2"><Button variant="danger">Mua Ngay</Button></div>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                        <br />
                        <Row>
                            <Col xs lg="3">
                                <Card style={{ width: '14rem' }}>
                                    <Card.Img variant="top" src="galaxys23.jpg" />
                                    <Card.Body>
                                        <Card.Title>SAMSUNG GALAXY S23 ULTRA</Card.Title>
                                        <div className='product_price'>
                                            22.990.000đ
                                            <strike className='product_discount'>
                                            28,650,000 đ
                                            </strike>
                                        </div>
                                        <div className="d-grid gap-2"><Button variant="danger">Mua Ngay</Button></div>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col>
                                <Card style={{ width: '14rem' }}>
                                    <Card.Img variant="top" src="ZFlip4.jpg" />
                                    <Card.Body>
                                        <Card.Title>Samsung Galaxy Z Flip4 128GB</Card.Title>
                                        <div className='product_price'>
                                            16.990.000đ
                                        </div>
                                        <div className="d-grid gap-2"><Button variant="danger">Mua Ngay</Button></div>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col>
                                <Card style={{ width: '14rem' }}>
                                    <Card.Img variant="top" src="SamsungA53.jpg" />
                                    <Card.Body>
                                        <Card.Title>Samsung Galaxy A53 (5G)</Card.Title>
                                        <div className='product_price'>
                                            7.990.000đ
                                        </div>
                                        <div className="d-grid gap-2"><Button variant="danger">Mua Ngay</Button></div>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col>
                                <Card style={{ width: '14rem' }}>
                                    <Card.Img variant="top" src="ip11.jpg" />
                                    <Card.Body>
                                        <Card.Title>iPhone 11 64GB</Card.Title>
                                        <div className='product_price'>
                                            11.990.000đ
                                            <strike className='product_discount'>
                                                15.990.000đ
                                            </strike>
                                        </div>
                                        <div className="d-grid gap-2"><Button variant="danger">Mua Ngay</Button></div>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>

                    </div>
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
            </section >
        </div>
    )
}
export default Favorite;