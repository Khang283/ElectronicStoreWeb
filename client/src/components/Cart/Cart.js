import axios from 'axios';
import Cookies from 'js-cookie';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import CheckoutForm from '../Checkout/CheckoutForm';
import { loadStripe } from "@stripe/stripe-js";
import { Elements, useCartElementState } from "@stripe/react-stripe-js";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import Checkout from '../Checkout/Checkout';
import { Link } from 'react-router-dom';
import '../Cart/Cart.css';

//const stripePromise = loadStripe(`${process.env.REACT_APP_STRIPE_PUBLIC_KEY}`); // nên để ở đây nhằm tránh tạo lại mỗi lần render

function Cart() {
  const [cartItems, setCartItems] = useState([]);
  const [totalCost, setTotalCost] = useState(0);
  const [clientSecret, setClientSecret] = useState("");
  const [cartId, setCartId] = useState();
  const [userId, setUserId] = useState();
  const [totalQuantity, setQuantity] = useState(0);
  const [isLoaded, setLoad] = useState(false);
  const [notFound,setFound] = useState(false);
  const appearance = {
    theme: 'stripe',
  };
  const options = {
    clientSecret,
    appearance,
  };
  let cart;
  const handleMinus = (id) => {
    setLoad(false);
    const updatedCartItems = cartItems.map((item) => {
      if (item.id === id && item.quantity > 1) {
        let request = {
          productId: item.productId,
          amount: item.quantity-1
        }
        console.log(request);
        axios.put('/api/cart/quantity',request,{
          headers:{
            Authorization: `Bearer ${Cookies.get('authToken')}`,
          }
        }).then(res=>{
          if(res.status==200){
            setQuantity(totalQuantity-1);
            setTotalCost(totalCost - item.price);
            console.log("giảm sp");
          }
        })
        const updatedItem = { ...item, quantity: item.quantity - 1 };
        return updatedItem;
      }
      return item;
    });
    setCartItems(updatedCartItems);
  };

  const handlePlus = (id) => {
    setLoad(false);
    const updatedCartItems = cartItems.map((item) => {
      if(item.id == id){
        let request = {
          productId: item.productId,
          amount: item.quantity+1
        }
        console.log(request);
        axios.put('/api/cart/quantity',request,{
          headers:{
            Authorization: `Bearer ${Cookies.get('authToken')}`,
          }
        }).then(res=>{
          if(res.status==200){
            setQuantity(totalQuantity+1);
            setTotalCost(totalCost + item.price);
            console.log('tăng sản phẩm');
          }
        })
        const updatedItem = { ...item, quantity: item.quantity + 1 };
        return updatedItem;
      }
      return item;
    });
    setCartItems(updatedCartItems);
  };

  const handleDelete = (id) => {
    const confirmDelete = window.confirm(`Bạn có chắc muốn xóa sản phẩm này khỏi giỏ hàng?`);
    if (confirmDelete) {
      setLoad(false);
      if (id) {
        const updatedCartItems = cartItems.filter((item) => item.id !== id);
        setCartItems(updatedCartItems);
        setTotalCost(totalCost - cartItems.find((item) => item.id === id).price * cartItems.find((item) => item.id === id).quantity);
      } else {
        const updatedCartItems = cartItems.filter((item) => !item.selected);
        setCartItems(updatedCartItems);
        const deletedItems = cartItems.filter((item) => item.selected);
        const deletedCost = deletedItems.reduce((total, item) => total + item.price * item.quantity, 0);
        setTotalCost(totalCost - deletedCost);
      }
    }
  };

  const moneyFormat = new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND'
  })

  useEffect(() => {
    axios.get('/api/cart', {
      headers: {
        Authorization: `Bearer ${Cookies.get('authToken')}`,
      }
    }).then((res) => {
      if (res.status == 200) {
        setCartItems(res.data.cartItems);
        setTotalCost(res.data.totalPrice);
        setCartId(res.data.cartId);
        setUserId(res.data.userId);
        setQuantity(res.data.totalQuantity);
        setLoad(true);
        console.log(res.data);
        //console.log(res.data)
      }
    })
    .catch(()=>{
      setLoad(true);
      setFound(true);
    })
  }, [cartItems]);

  function setCart() {
    cart = {
      cartId,
      userId,
      cartItems,
      totalPrice: totalCost,
      totalQuantity,
    }
    //console.log(cart)
    return cart;
  }

  const createPayment = () => {
    cart = {
      cartId,
      userId,
      cartItems,
      totalPrice: totalCost,
      totalQuantity,
    }
    console.log(cart)

    axios.post('/api/checkout/create-payment-intent', cart, {
      headers: {
        Authorization: `Bearer ${Cookies.get('token')}`,
      }
    }).then(res => {
      if (res.data.secretKey) {
        setClientSecret(res.data.secretKey);
        console.log(res.data.secretKey);
      }
    })
  }

  if (!isLoaded) {
    return (
      <div className='centerText'>
        <h2>Xin chờ ...</h2>
      </div>
    )
  }
  else if(notFound){
    return(
      <div className='centerText'>
        <h2>Giỏ hàng của bạn đang trống.</h2>
      </div>
    )
  }
  else {
    return (
      <div className="bg-light">
        <section className="section-content padding-y">
          <div className="container">
            <div class="col">
              <p><span class="h2">Giỏ hàng</span></p>
              <div className="row">
                <main className="col-md-8">
                  <div className="card">
                    <table className="table table-borderless table-shopping-cart">
                      <thead>
                        <tr className=" text-uppercase">

                          <th scope="col" className="text-uppercase" width="300">
                            Sản phẩm
                          </th>
                          <th scope="col" className="text-uppercase" width="100">
                            Số Lượng
                          </th>
                          <th scope="col" className="text-uppercase" width="100">
                            Giá
                          </th>


                        </tr>
                      </thead>
                      <tbody>
                        {cartItems.map((item) => (
                          <tr key={item.productId} id={item.productId}>

                            <td className="align-middle">
                              <figure className="itemside">
                                <div className="aside">
                                  <img src={item.productImage} className="img-sm" />
                                </div>
                                <figcaption className="info">
                                  <a href="#" className="title text-dark">
                                    {item.productName}
                                  </a>
                                  <p className="text-muted small">Thương hiệu: {item.brand}</p>
                                </figcaption>
                              </figure>
                            </td>
                            <td className="align-middle">
                              <div className="d-flex flex-row">
                                <button
                                  className="btn btn-link px-2 quantity_minus"
                                  id="btn_minus"
                                  onClick={() => handleMinus(item.id)}
                                >
                                  <i className="bi bi-dash"></i>
                                </button>
                                <input
                                  min="1"
                                  name="quantity"
                                  disabled
                                  id="quantity"
                                  data-number="1"
                                  value={item.quantity}
                                  type="number"
                                  className="form-control form-control-sm quantity"
                                  style={{ width: "60px", height: "30px", background: "white" }}
                                />
                                <button
                                  className="btn btn-link px-2 quantity_plus"
                                  id="btn_plus"
                                  onClick={() => handlePlus(item.id)}
                                >
                                  <i className="bi bi-plus"></i>
                                </button>
                              </div>
                            </td>
                            <td className="price align-middle">{moneyFormat.format(item.price)}</td>
                            <td class="text-right align-middle">
                              <a href="#" class="btn btn-light btn-round btn_delete" onClick={() => handleDelete(item.id)}>
                                <i class="bi bi-trash"></i>
                              </a>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                    <div className="card-body border-top">
                      {/* <Popup
                        trigger={<button className="btn btn-primary float-md-right" onClick={() => createPayment()}> Thanh toán </button>}
                        modal
                        nested
                      >
                        <div className="Checkout">
                          {clientSecret && (
                            <Elements options={options} stripe={stripePromise}>
                              <CheckoutForm />
                            </Elements>
                          )}
                        </div>
                      </Popup> */}
                      {/* <Popup trigger={<button className='btn btn-primary float-md-right'>Thanh toán</button>}
                      modal
                      nested
                      >
                        <TestCheckout cart={setCart}/>
                      </Popup> */}
                      <Link to={'/cart/checkout'} state={{ cart: setCart() }} className='btn btn-primary float-md-right' >Thanh toán</Link>
                      <a href="#" className="btn btn-light">
                        {" "}
                        <i className="fa fa-chevron-left"></i> Tiếp tục mua hàng{" "}
                      </a>
                    </div>
                  </div>
                </main>
                <aside class="col-md-4">
                  <div class="card mb-4">
                    <div class="card-body">
                      <form>
                        <div class="form-group">
                          <label>Nhập mã giảm giá</label>
                          <div class="input-group">
                            <input
                              type="text"
                              class="form-control"
                              placeholder="Mã giảm giá"
                            />
                            <span class="input-group-append">
                              <button class="btn btn-primary">Nhập</button>
                            </span>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div class="card">
                    <div class="card-body">
                      <dl class="dlist-align total-cost">
                        <dt>Tổng tiền:</dt>
                        <dd class="text-right">{moneyFormat.format(totalCost)}</dd>
                      </dl>
                      <dl class="dlist-align">
                        <dt>Giảm giá:</dt>
                        <dd class="text-right">0</dd>
                      </dl>
                      <dl class="dlist-align total">
                        <dt>Tổng:</dt>
                        <dd class="text-right  h5">
                          <strong>{moneyFormat.format(totalCost)}</strong>
                        </dd>
                      </dl>
                    </div>
                  </div>
                </aside>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }


}

export default Cart;
