import React, { useState, useEffect, useRef } from 'react';
import '../Details/Details.css';
import SoldIcon from '../../images/sold.png';
import { useParams } from "react-router-dom";

import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import ProductServices from "../../services/Product"


// const product = { // Product Data
//   id: 1,
//   name: ' macbook laptop',
//   slug: 'new-luxury-laptop',
//   photo: 'https://images.pexels.com/photos/1029757/pexels-photo-1029757.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
//   price: 1999,
//   desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque consectetur vero asperiores quis animi explicabo accusamus nemo cupiditate harum pariatur! Provident sit tenetur totam mollitia consectetur nesciunt, recusandae obcaecati itaque!',
//   images: [
//     {
//       src: 'https://images.pexels.com/photos/1029757/pexels-photo-1029757.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
//     },
//     {
//       src: 'https://images.pexels.com/photos/1229861/pexels-photo-1229861.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
//     },
//     {
//       src: 'https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
//     },
//     {
//       src: 'https://images.pexels.com/photos/812264/pexels-photo-812264.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
//     },
//     {
//       src: 'https://images.pexels.com/photos/1006293/pexels-photo-1006293.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
//     },
//     {
//       src: 'https://images.pexels.com/photos/209151/pexels-photo-209151.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
//     },
//     {
//       src: 'https://images.pexels.com/photos/1229861/pexels-photo-1229861.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
//     },
//     {
//       src: 'https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
//     },
//     {
//       src: 'https://images.pexels.com/photos/812264/pexels-photo-812264.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
//     },
//     {
//       src: 'https://images.pexels.com/photos/1006293/pexels-photo-1006293.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
//     },
//     {
//       src: 'https://images.pexels.com/photos/1029757/pexels-photo-1029757.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
//     },
//     {
//       src: 'https://images.pexels.com/photos/209151/pexels-photo-209151.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
//     }
//   ],
//   colors: ["#2287fa", "#f71b1b", "green"],
//   infos: [
//     {
//       title: "New",
//       content: "Hàng mới nhất"
//     },
//     {
//       title: "Cấu hình",
//       content: "Thông tin cấu hình chi tiết"
//     },
//     {
//       title: "Câu hỏi thường gặp",
//       content: "Câu hỏi"
//     },
//     {
//       title: "Thông tin sản phẩm",
//       content: "fake news"
//     }
//   ],
//   discount: 20,
//   sold: 52,
//   category: 'laptop',
//   brand: 'apple'
// }
const Details = (props) => {

  const [slideIndex, setSlideIndex] = useState(1);

  const [width, setWidth] = useState(0);

  const [start, setStart] = useState(0);

  const [change, setChange] = useState(9);

  // const [selectedColor, setSelectedColor] = useState(product.colors[0]);

  const [infoTitle, setInfoTitle] = useState();

  const slideRef = useRef();
  //
  const moneyFormat = new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND'
  })

  const [Product, setProduct] = useState({
    // productId: null,
    productName: "",
    productPrice: null,
    productSale: null,
    productIcon: "",
    productVersion: "",
    productRating: null,
    productSold: null,
    productStock: null,
    productStatus: "",
    company: "",
    category: "",
    assets: [],
    specs: []
  });
  const getProduct = id => {
    ProductServices.getProductById(id)
      .then(response => {
        setProduct(response.data);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  const params = useParams();
  useEffect(() => {
    getProduct(params.id)
  }, [params.id]);
  //
  useEffect(() => {
    if (!slideRef.current) return;
    const scrollWidth = slideRef.current.scrollWidth;
    const childElementCount = slideRef.current.childElementCount;
    const width = scrollWidth / childElementCount;
    setWidth(width)
  }, [])
  function plusSlides(n) {
    setSlideIndex(prev => prev + n);
    slideShow(slideIndex + n);
  }

  function slideShow(n) {
    if (n > Product.assets.length) { setSlideIndex(1) };
    if (n < 1) { setSlideIndex(Product.assets.length) };
  }

  function dragStart(e) {
    setStart(e.clientX)
  }

  function dragOver(e) {
    let touch = e.clientX;
    setChange(start - touch);
  }

  function dragEnd(e) {
    if (change > 0) {
      slideRef.current.scrollLeft += width;
    } else {
      slideRef.current.scrollLeft -= width;
    }
  }

  useEffect(() => {
    if (!slideRef.current || !width) return;
    let numOfThumb = Math.round(slideRef.current.offsetWidth / width);
    slideRef.current.scrollLeft = slideIndex > numOfThumb ? (slideIndex - 1) * width : 0;
  }, [width, slideIndex])


  return (
    <div className='container'>
      <React.Fragment>
        <section className='product-details'>
          <div className='product-page-img'>
            {
              Product.assets.map((image, index) => (
                image.assetRole === "slide" ?
                  <div key={index} className='mySlides'
                    style={{ display: (index + 1) === slideIndex ? "block" : "none" }}>
                    <div className='numbertext'>{index + 1} / {Product.assets.length}</div>
                    <img src={image.assetPath} alt=""></img>
                  </div> : <div />
              ))
            }

            {/* <a href="#" className='prev' onClick={() => plusSlides(-1)}>&#10094;</a>
          <a href="#" className='next' onClick={() => plusSlides(1)}>&#10095;</a> */}
            <div className='slider-img' draggable={true} ref={slideRef}
              onDragStart={dragStart} onDragOver={dragOver} onDragEnd={dragEnd}>
              {
                Product.assets.map((image, index) => (
                  image.assetRole === "slide" ?
                    <div key={index} className={`slider-box ${index + 1 === slideIndex ? 'active' : ''}`}
                      onClick={() => setSlideIndex(index + 1)}>
                      <img src={image.assetPath} alt=""></img>
                    </div> : <div />
                ))
              }
            </div>
          </div>

          <div className='product-page-details'>
            <strong>{Product.productName} - {Product.productVersion}</strong>

            <p className='product-category'>
              {Product.company} - {Product.category}
            </p>

            <p className='product-price'> {moneyFormat.format(Product.productPrice)}
              {/* ${Math.round(Product.productPrice - product.price * product.discount / 100)} <del>{product.price}$</del> */}
            </p>

            {/* <p className='small-desc'>{product.desc}</p> */}

            {/* <div className='product-options'>
            <span>Colors</span>
            {
              product.colors.map(color => (
                <div key={color}>
                  <button style={{ background: color }}
                    className={color === selectedColor ? 'active' : ''}
                    onClick={() => setSelectedColor(color)}></button>
                </div>
              ))
            }
          </div> */}

            <div className='product-sold'>

              {/* <div className='product-page-offer'>
              <i className="fa-solid fa-tag"></i> {product.discount}% discount
               </div> */}

              <div className='product-sold'>
              <img src={SoldIcon} alt="SoldIcon" />
                <strong><span>Đã bán: </span> {Product.productSold}</strong>
              </div>

              <div className='product-sold'>
                <strong><span>Còn lại: </span> {Product.productStock}</strong>
              </div>

              <div className='cart-btns'>
                <a href="#" className='add-cart'>Thêm vào giỏ hàng</a>
                {/* <a href="#" className='add-cart buy-now'>Buy Now</a> */}
              </div>
            </div>
          </div>
        </section>

        <section className='product-all-info'>
          <ul className='product-info-menu'>
            <li key='Thông tin sản phẩm' onClick={() => setInfoTitle('Thông tin sản phẩm')}
              className={`p-info-list ${'Thông tin sản phẩm' === infoTitle ? 'active' : ''}`}>
              Thông tin sản phẩm
            </li>

            <li key='Cấu hình' onClick={() => setInfoTitle('Cấu hình')}
              className={`p-info-list ${'Cấu hình' === infoTitle ? 'active' : ''}`}>
              Cấu hình
            </li>

            <li key='Đánh giá sản phẩm' onClick={() => setInfoTitle('Đánh giá sản phẩm')}
              className={`p-info-list ${'Đánh giá sản phẩm' === infoTitle ? 'active' : ''}`}>
              Đánh giá sản phẩm
            </li>

            <li key='Câu hỏi thường gặp' onClick={() => setInfoTitle('Câu hỏi thường gặp')}
              className={`p-info-list ${'Câu hỏi thường gặp' === infoTitle ? 'active' : ''}`}>
              Câu hỏi thường gặp
            </li>

            {/* {
            product.infos.map(info => (
              <li key={info.title} onClick={() => setInfoTitle(info.title)}
                className={`p-info-list ${info.title === infoTitle ? 'active' : ''}`}>
                {info.title}
              </li>
            ))
          } */}
          </ul>

          <div key='Thông tin sản phẩm'
            className={`info-container ${'Thông tin sản phẩm' === infoTitle ? 'active' : ''}`}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque consectetur vero asperiores quis animi explicabo accusamus nemo cupiditate harum pariatur! Provident sit tenetur totam mollitia consectetur nesciunt, recusandae obcaecati itaque
          </div>

          <div key='Cấu hình'
            className={`info-container ${'Cấu hình' === infoTitle ? 'active' : ''}`}>
            <div className='infotext'>Cấu hình chi tiết:</div>
            <br />

            {
              Product.specs.map(spec => (
                <div key={spec.specDetail}>
                  <Row xs={2} md={4} lg={6}>
                    <Col>{spec.specDetail}: </Col>
                    <Col>{spec.specValue}</Col>
                  </Row></div>
              ))}

          </div>
          <div key='Đánh giá sản phẩm'
            className={`info-container ${'Đánh giá sản phẩm' === infoTitle ? 'active' : ''}`}>
            <div className='infotext'>Đánh giá sản phẩm:</div>
          </div>
          <div key='Câu hỏi thường gặp'
            className={`info-container ${'Câu hỏi thường gặp' === infoTitle ? 'active' : ''}`}>
            Câu hỏi thường gặp
          </div>
          {/* {
          product.infos.map(info => (
            <div key={info.title}
              className={`info-container ${info.title === infoTitle ? 'active' : ''}`}>
              {info.content}
            </div>
          ))
        } */}
        </section>
      </React.Fragment>
    </div>
  )
}

export default Details