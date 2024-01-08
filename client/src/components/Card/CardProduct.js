import React from 'react';

import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";

const moneyFormat = new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND'
})

const CardProduct = (props) => {
    return (
        <Card className='card'>
            <Link to={"/product/" + props.product.category + "/" + props.product.productId}>
                <Card.Img className='card-img' variant="top" src={props.product.productIcon} onError={(e)=>{e.target.onerror = null; e.target.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeyOIU0kkPJe1f_kwLcA6P-b7UIn3l3s7juw&usqp=CAU"}} height={230} /></Link>
            <Card.Body>
                <Link to={"/product/" + props.product.category + "/" + props.product.productId}>
                    <Card.Title>{props.product.productName} - {props.product.productVersion}</Card.Title></Link>

                <Card.Text className='fontPrice'>
                    {moneyFormat.format(props.product.productPrice)}
                </Card.Text>

                <div className='product-rating'>
                    {Array.from({ length: 5 }).map((_, idx) => (
                        idx < props.product.productRating ? <i class="bi bi-star-fill"></i> : <i class="bi bi-star"></i>
                    ))}
                </div>

                {/* <Card.Text className='pro-rating'>{props.product.productRating} <i class="bi bi-star-fill"></i></Card.Text> */}

                {/* <div className='div-spec'>
                                                                    <span ><i className='bi icon-screen-size'></i> spec</span>
                                                                </div>
                                                                 <Link to={"/1"}>View Reviews</Link> */}
                <div className='card-btn'>
                    <Button variant="danger" size="lg" >
                        <Link to={"/product/" + props.product.category + "/" + props.product.productId}>
                            <strong>Mua Ngay</strong>
                        </Link>
                    </Button>{' '}
                </div>

            </Card.Body>
        </Card>
    );
}
export default CardProduct;