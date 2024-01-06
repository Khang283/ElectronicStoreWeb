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
import Cookies from 'js-cookie';
import { useAlert } from 'react-alert';
import CardProduct from '../Card/CardProduct';
import { useSelector } from 'react-redux';

const Favorite = props => {

    const [currentPage, setCurrentPage] = useState(1)
    const [countPage, setCountPage] = useState(0);
    const [favorites, setFavorites] = useState([]);
    const alert = useAlert();
    const userState = useSelector(state => state.user);
    const [loading,setLoad] = useState(true);

    const params = useParams();

    const getCurrentPage = () => {
        if (params.page != null)
            setCurrentPage(params.page);
    }
    useEffect(() => {

        axios.get('/api/favorite', {
            headers: {
                Authorization: `Bearer ${Cookies.get('authToken')}`,
            }
        }).then(res => {
            if (res.status === 200) {
                setFavorites(res.data);
                setLoad(false);
            }
            else{
                setLoad(false);
            }
        }).catch(e => {
            console.log(e);
            setLoad(false);
        })

        getCurrentPage();
    }, [favorites,loading]);

    const handleDelete = (id)=>{
        axios.delete('/api/favorite',{
            headers: {
                Authorization: `Bearer ${Cookies.get('authToken')}`,
            },
            data:{
                productId: id,
                userId: userState.userId
            }
        }).then(res=>{
            if(res.status === 200){
                alert.success("Xóa khỏi yêu thích");
                window.location.reload();
            }
            else{
                setLoad(false);
            }
        }).catch(e=>{
            console.log(e);
            alert.error("Đã xảy ra lỗi");
        })
    }
    if(loading){
        return (
            <Loader />
        )
    }
    else{

        return (
            <div className="bg-light">
                <section className="section-content padding-y">
                    <div className="container">
                        <div className="container div-list row ">
    
                            {favorites ? favorites.map(favorite => (
                                <div className='col-3 card-favorite'>
    
                                    <CardProduct product={favorite} />
                                    <Button variant='warning' value={favorite.productId} onClick={(e)=>handleDelete(e.target.value)}>Xóa khỏi yêu thích</Button>
                                </div>
                            ))
                            :<div></div>}
    
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
}
export default Favorite;