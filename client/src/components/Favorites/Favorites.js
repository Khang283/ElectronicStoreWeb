import React, { useEffect, useState } from "react";
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import { Link } from "react-router-dom";
const Favorites = (props) =>{
    const [favProduct, favPhoneState] = useState([]);
    useEffect(() =>{
        getFavProduct();
    })
    const getFavProduct = () =>{
    }
    return(
        <div className="container div-list">
                        <div >
                            <h2>Danh sách yêu thích</h2>

                        </div>

                        <Row xs={1} md={4} sm={2} className="g-4 ">
                            {favProduct?.map((product) => {
                                return (
                                    console.log(product.productName),
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


                    </div>
    );
}
export default Favorites;