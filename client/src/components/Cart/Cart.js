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
import { Link, Outlet, useNavigate } from 'react-router-dom';
import '../Cart/Cart.css';
import { useDispatch, useSelector } from 'react-redux';
import Spinner from '../Loader/Loader';
import Loader from '../Loader/Loader';
import { useAlert } from 'react-alert';
import { Button, Modal } from 'react-bootstrap';
import { setOrder } from '../../reducer/orderReducer';

//const stripePromise = loadStripe(`${process.env.REACT_APP_STRIPE_PUBLIC_KEY}`); // nên để ở đây nhằm tránh tạo lại mỗi lần render

function Cart() {
  const dispatch = useDispatch();
  const [cartItems, setCartItems] = useState([]);
  const [totalCost, setTotalCost] = useState(0);
  const [clientSecret, setClientSecret] = useState("");
  const [cartId, setCartId] = useState();
  const [userId, setUserId] = useState();
  const [totalQuantity, setQuantity] = useState(0);
  const [isLoaded, setLoad] = useState(false);
  const [notFound, setFound] = useState(false);
  const [isLogin, setLogin] = useState();
  const userState = useSelector(state => state.user);
  const [receiver, setReceiver] = useState('');
  const [deliveryAddress, setDelivery] = useState('');
  const [message, setMessage] = useState('');
  const [orderId, setOrderId] = useState();
  const [show, setShow] = useState(false);
  const alert = useAlert();
  const navigate = useNavigate();
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
          amount: item.quantity - 1
        }
        console.log(request);
        axios.put('/api/cart/quantity', request, {
          headers: {
            Authorization: `Bearer ${Cookies.get('authToken')}`,
          }
        }).then(res => {
          if (res.status == 200) {
            setQuantity(totalQuantity - 1);
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
      if (item.id == id) {
        let request = {
          productId: item.productId,
          amount: item.quantity + 1
        }
        console.log(request);
        axios.put('/api/cart/quantity', request, {
          headers: {
            Authorization: `Bearer ${Cookies.get('authToken')}`,
          }
        }).then(res => {
          if (res.status == 200) {
            setQuantity(totalQuantity + 1);
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
      console.log(id);
      if (id) {
        const payload = {
          productId: id,
        }
        axios.put('/api/cart/remove', payload, {
          headers: {
            Authorization: `Bearer ${Cookies.get('authToken')}`,
          }
        }).then(res => {
          if (res.status == 200) {
            const updatedCartItems = cartItems.filter(item => !item.productId == id);
            setCartItems(updatedCartItems);
          }
        }).catch(e => {
          console.log(e);
        })
        // } else {
        //   const updatedCartItems = cartItems.filter((item) => !item.selected);
        //   setCartItems(updatedCartItems);
        //   const deletedItems = cartItems.filter((item) => item.selected);
        //   const deletedCost = deletedItems.reduce((total, item) => total + item.price * item.quantity, 0);
        //   setTotalCost(totalCost - deletedCost);
        // }
      }
    }
  };

  const moneyFormat = new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND'
  })

  if (userState.userId == -1) {
    setLogin(false);
  }

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
        setLogin(true);
        //console.log(res.data);
        //console.log(res.data)
      }
    }).catch(() => {
      setLoad(true);
      setFound(true);
    })

  }, [cartItems, userState.userId]);

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

  
  const checkoutStripe = () => {
    if (receiver === '' || deliveryAddress === '') {
      alert.error("Xin hãy điền đủ thông tin");
    }
    else {
      const payload = {
        userId,
        cartId,
        totalPrice: totalCost,
        totalQuantity,
        receiver,
        address: deliveryAddress,
        message

      }
      axios.post('/api/order', payload, {
        headers: {
          Authorization: `Bearer ${Cookies.get('authToken')}`,
        }
      }).then(res => {
        if (res.status === 200) {
          console.log(res.data);
          console.log(res.data.orderId);
          setOrderId(res.data.orderId);
          navigate("/cart/checkout/stripe", {
            state: {
              cart: setCart(),
              order: res.data.orderId,
            }
          })
        }
      }).catch(e => {
        console.log(e);
      })
    }
  }

  const checkoutVNPay = () => {
    if (receiver === '' || deliveryAddress === '') {
      alert.error("Xin hãy điền đủ thông tin");
    }
    else {
      const payload = {
        userId,
        cartId,
        totalPrice: totalCost,
        totalQuantity,
        receiver,
        address: deliveryAddress,
        message
      }
      axios.post('/api/order', payload, {
        headers: {
          Authorization: `Bearer ${Cookies.get('authToken')}`,
        }
      }).then(res => {
        if (res.status === 200) {
          let order = {
            orderId: res.data.orderId,
          }
          console.log(res.data);
          console.log(order);
          Cookies.set('orderId',res.data.orderId,{expires: 1});
          dispatch(setOrder(order));
          navigate("/cart/checkout/vnpay", {
            state: {
              cart: setCart(),
              order: res.data.orderId,
              totalPrice: res.data.totalPrice,
            }
          })
        }
      }).catch(e => {
        console.log(e);
      })
    }
  }

  const handleClose = ()=>setShow(false);
  const handleShow = ()=>setShow(true);

  if (userState.userId == -1) {
    return (
      <div className='centerText'>
        <h2>Bạn chưa đăng nhập</h2>
      </div>
    )
  }
  else {
    if (!isLoaded) {
      return (
        <div className='centerText '>
          <Loader />
        </div>
      )
    }
    else if (notFound || cartItems == null || cartItems.length <= 0) {
      return (
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
                                    <img src={item.productImage} className="img-sm" width={100} height={100} />
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
                                <button class="btn btn-light btn-round btn_delete" onClick={() => handleDelete(item.productId)}>
                                  <i class="bi bi-trash"></i>
                                </button>
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
                        {/* <Link to={'checkout'} state={{cart: setCart(),order: orderId}} onClick={checkout} className='text-light btn btn-primary float-md-right' >Thanh toán</Link> */}
                        {/* <Button className='text-light btn btn-primary float-md-right' onClick={checkout}>Thanh toán</Button> */}
                        <Button className='text-light btn btn-primary float-md-right' onClick={handleShow}>Thanh toán</Button>
                        <Link to={'/'} className="btn btn-light">
                          {" "}
                          <i className="fa fa-chevron-left"></i> Tiếp tục mua hàng{" "}
                        </Link>
                      </div>
                    </div>
                  </main>
                  <aside class="col-md-4">
                    <div class="card mb-4">
                      <div class="card-body">
                        <form>
                          <div class="form-group">
                            <label>Người nhận *</label>
                            <div class="input-group">
                              <input
                                type="text"
                                class="form-control"
                                placeholder=""
                                onChange={e => setReceiver(e.target.value)}
                              />
                            </div>
                          </div>
                          <div class="form-group">
                            <label>Địa chỉ *</label>
                            <div class="input-group">
                              <input
                                type="text"
                                class="form-control"
                                placeholder=""
                                onChange={e => setDelivery(e.target.value)}
                              />
                            </div>
                          </div>
                          <div class="form-group">
                            <label>Lời nhắn</label>
                            <div class="input-group">
                              <input
                                type="text"
                                class="form-control"
                                placeholder=""
                                onChange={e => setMessage(e.target.value)}
                              />
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
          <Modal show={show} onHide={handleClose}>
            <Modal.Header>
                        <Modal.Title>Chọn phương thức thanh toán</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Button variant='primary' onClick={checkoutVNPay}>VNPay</Button>
              <Button variant='link' onClick={checkoutStripe}>Stripe</Button>
            </Modal.Body>
            <Modal.Footer>
              <Button variant='secondary' onClick={handleClose}>Close</Button>
            </Modal.Footer>
          </Modal>
        </div>
      );
    }

  }
}


export default Cart;
