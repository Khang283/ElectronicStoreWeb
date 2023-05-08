import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

function Cart() {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      image: "",
      name: "item 1",
      brand: "Lenovo",
      quantity: 1,
      price: 98000,
      selected: false // add selected property
    },
    {
      id: 2,
      image: "",
      name: "item 2",
      brand: "Lenovo",
      quantity: 1,
      price: 98000,
      selected: false // add selected property
    },
    {
      id: 3,
      image: "",
      name: "item 3",
      brand: "Lenovo",
      quantity: 1,
      price: 98000,
      selected: false // add selected property
    },
  ]);
  
  const [totalCost, setTotalCost] = useState(0);

  const handleMinus = (id) => {
    const updatedCartItems = cartItems.map((item) => {
      if (item.id === id && item.quantity > 1) {
        const updatedItem = { ...item, quantity: item.quantity - 1 };
        setTotalCost(totalCost - item.price);
        return updatedItem;
      }
      return item;
    });
    setCartItems(updatedCartItems);
  };

  const handlePlus = (id) => {
    const updatedCartItems = cartItems.map((item) => {
      if (item.id === id) {
        const updatedItem = { ...item, quantity: item.quantity + 1 };
        setTotalCost(totalCost + item.price);
        return updatedItem;
      }
      return item;
    });
    setCartItems(updatedCartItems);
  };

  const handleDelete = (id) => {
    const confirmDelete = window.confirm(`Bạn có chắc muốn xóa sản phẩm này khỏi giỏ hàng?`);
    if (confirmDelete) {
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

  useEffect(() => {
    const newTotalCost = cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
    setTotalCost(newTotalCost);
  }, [cartItems]);

  const handleSelect = (id) => {
    const updatedCartItems = cartItems.map((item) => {
      if (item.id === id) {
        return { ...item, selected: !item.selected };
      }
      return item;
    });
    setCartItems(updatedCartItems);
  };

  const handleSelectAll = () => {
    const allSelected = cartItems.every((item) => item.selected);
    const updatedCartItems = cartItems.map((item) => ({ ...item, selected: !allSelected }));
    setCartItems(updatedCartItems);
  };

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
                        <th scope="col" className="text-uppercase" >
                          <input type="checkbox" onChange={handleSelectAll} />
                        </th>
                        <th scope="col" className="text-uppercase" width="300">
                          Sản phẩm
                        </th>
                        <th scope="col" className="text-uppercase" width="100">
                          Số Lượng
                        </th>
                        <th scope="col" className="text-uppercase" width="100">
                          Giá
                        </th>

                        <th scope="col" className="text-right" width="100">
                          {cartItems.some((item) => item.selected) && (
                            <a href="#" className="btn btn-light btn-round btn_delete" onClick={() => handleDelete()}>
                              <i className="bi bi-trash"></i>
                            </a>
                          )}
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {cartItems.map((item) => (
                        <tr key={item.id}>
                          <td className="align-middle">
                            <input type="checkbox" checked={item.selected} onChange={() => handleSelect(item.id)} />
                          </td>
                          <td className="align-middle">
                            <figure className="itemside">
                              <div className="aside">
                                <img src={item.image} className="img-sm" />
                              </div>
                              <figcaption className="info">
                                <a href="#" className="title text-dark">
                                  {item.name}
                                </a>
                                <p className="text-muted small">Thương hiệu: {item.brand}</p>
                              </figcaption>
                            </figure>
                          </td>
                          <td className="align-middle">
                            <div className="d-flex flex-row">
                              <button
                                className="btn btn-primary px-2 quantity_minus"
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
                                style={{ width: "50px", height: "40px" }}
                              />
                              <button
                                className="btn btn-primary px-2 quantity_plus"
                                id="btn_plus"
                                onClick={() => handlePlus(item.id)}
                              >
                                <i className="bi bi-plus"></i>
                              </button>
                            </div>
                          </td>
                          <td className="price align-middle">{item.price}</td>
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
                    <a
                      href="#"
                      className="btn btn-primary float-md-right"
                    >
                      {" "}
                      Thanh toán <i className="fa fa-chevron-right"></i>{" "}
                    </a>
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
                      <dd class="text-right">{totalCost}</dd>
                    </dl>
                    <dl class="dlist-align">
                      <dt>Giảm giá:</dt>
                      <dd class="text-right">0</dd>
                    </dl>
                    <dl class="dlist-align total">
                      <dt>Tổng:</dt>
                      <dd class="text-right  h5">
                        <strong>{totalCost}</strong>
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

export default Cart;
