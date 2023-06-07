import React from 'react';
import { useState } from 'react';

function CheckOut() {

    const [cartItems, setCartItems] = useState([
        {
            id: 1,
            image: "",
            name: "item 1",
            brand: "Lenovo",
            quantity: 1,
            price: 98000
        },
        {
            id: 2,
            image: "",
            name: "item 2",
            brand: "Lenovo",
            quantity: 1,
            price: 98000
        },
        {
            id: 3,
            image: "",
            name: "item 3",
            brand: "Lenovo",
            quantity: 1,
            price: 98000
        },
    ]);

    function calculateTotal(cartItems) {
        let total = 0;
        cartItems.forEach((item) => {
          total += item.price * item.quantity;
        });
        return total;
      }

    function handleCheckout() {
        const confirmed = window.confirm("Bạn có chắc chắn muốn thanh toán không?");
        if (confirmed) {
            // User clicked "OK", proceed with checkout
            // Add your checkout logic here
        }
    }

    const [paymentMethod, setPaymentMethod] = useState('cod');

    const handlePaymentMethodChange = (event) => {
        setPaymentMethod(event.target.value);
    };

    return (
        <div className="bg-light">
            <section className="section-content padding-y">
                <div className="container">
                    <div class="col">
                        <p><span class="h2">Thanh toán</span></p>
                        <div class="row">
                            <main className="col-md-8">
                                <div className="card">
                                    <div class="card-body">
                                        <h4 class="d-flex justify-content-between align-items-center mb-3">
                                            <span>Thông tin đặt hàng</span>
                                        </h4>
                                        <form class="needs-validation" novalidate>
                                    
                                            <div class="mb-3">
                                                <label for="name">Họ tên (*)<span class="text-muted"></span></label>
                                                <input type="name" class="form-control" id="name" placeholder="Nguyễn Văn A" required />
                                                <div class="invalid-feedback">
                                                    Vui lòng nhập tên của bạn.
                                                </div>
                                            </div>

                                            <div class="mb-3">
                                                <label for="email">Email<span class="text-muted"></span></label>
                                                <input type="email" class="form-control" id="email" placeholder="example@gmail.com" />
                                                <div class="invalid-feedback">
                                                    Vui lòng nhập email của bạn.
                                                </div>
                                            </div>
                                            <div class="mb-3">
                                                <label for="address">Địa chỉ (*)</label>
                                                <input type="text" class="form-control" id="address" placeholder="Khu phố 6, Linh Trung, Thủ Đức" required />
                                                <div class="invalid-feedback">
                                                    Vui lòng nhập địa chỉ của bạn.
                                                </div>
                                            </div>

                                            <div class="mb-3">
                                                <label for="phone">Số điện thoại (*)</label>
                                                <input type="text" class="form-control" id="phone" placeholder="0123456789" required />
                                                <div class="invalid-feedback">
                                                    Vui lòng nhập số điện thoại của bạn.
                                                </div>
                                            </div>

                                            <hr class="mb-4" />
                                            <h4 class="mb-3">Phương thức thanh toán</h4>
                                            <div class="d-block my-3">
                                                <div class="custom-radio">
                                                    <input
                                                        id="cod"
                                                        name="paymentMethod"
                                                        type="radio"
                                                        class="custom-control-input"
                                                        value="cod"
                                                        checked={paymentMethod === 'cod'}
                                                        required
                                                        onChange={handlePaymentMethodChange}
                                                    />
                                                    <label class="custom-control-label" for="cod">
                                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Thanh toán khi nhận hàng
                                                    </label>
                                                </div>
                                                <div class="custom-radio">
                                                    <input
                                                        id="credit"
                                                        name="paymentMethod"
                                                        type="radio"
                                                        class="custom-control-input"
                                                        value="credit"
                                                        checked={paymentMethod === 'credit'}
                                                        required
                                                        onChange={handlePaymentMethodChange}
                                                    />
                                                    <label class="custom-control-label" for="credit">
                                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Thanh toán bằng thẻ tín dụng
                                                    </label>
                                                </div>
                                            </div>
                                            {paymentMethod === 'credit' && (
                                                <div className="credit-only">
                                                    <div class="form-group">
                                                        <div class="col-md-12"><strong>Loại thẻ:</strong></div>
                                                        <div class="col-md-12">
                                                            <select id="CreditCardType" name="CreditCardType" class="form-control">
                                                                <option value="Visa">Visa</option>
                                                                <option value="MasterCard">MasterCard</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div class="form-group">
                                                        <div class="col-md-12"><strong>Số thẻ:</strong></div>
                                                        <div class="col-md-12"><input type="text" class="form-control" name="card_number" required /></div>
                                                    </div>
                                                    <div class="form-group">
                                                        <div class="col-md-12"><strong>CVV:</strong></div>
                                                        <div class="col-md-12"><input type="text" class="form-control" name="card_cvv" required /></div>
                                                    </div>
                                                    <div class="form-group">
                                                        <div class="col-md-12">
                                                            <strong>Ngày hết hạn:</strong>
                                                        </div>
                                                        <div class="row col-md-12">
                                                            <div class="col-lg-6 col-md-6 col-sm-6">
                                                                <select class="form-control" name="card_expiry_month" required>
                                                                    <option value="01">01</option>
                                                                    <option value="02">02</option>
                                                                    <option value="03">03</option>
                                                                    <option value="04">04</option>
                                                                    <option value="05">05</option>
                                                                    <option value="06">06</option>
                                                                    <option value="07">07</option>
                                                                    <option value="08">08</option>
                                                                    <option value="09">09</option>
                                                                    <option value="10">10</option>
                                                                    <option value="11">11</option>
                                                                    <option value="12">12</option>
                                                                </select>
                                                            </div>
                                                            <div class="col-lg-6 col-md-6 col-sm-6">
                                                                <select class="form-control" name="card_expiry_year" required>
                                                                    <option value="2023">2023</option>
                                                                    <option value="2024">2024</option>
                                                                    <option value="2025">2025</option>
                                                                    <option value="2026">2026</option>
                                                                    <option value="2027">2027</option>
                                                                    <option value="2028">2028</option>
                                                                    <option value="2029">2029</option>
                                                                    <option value="2030">2030</option>
                                                                    <option value="2031">2031</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="form-group">
                                                        <div class="col-md-12">
                                                            <ul class="cards">
                                                                <li class="visa hand">Visa</li>
                                                                <li class="mastercard hand">MasterCard</li>
                                                            </ul>
                                                            <div class="clearfix"></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            )}

                                            <hr class="mb-4" />
                                            <button class="btn btn-secondary btn-lg btn-block" type="button">Quay lại giỏ hàng</button>
                                            <button class="btn btn-primary btn-lg btn-block" type="submit" onClick={handleCheckout}>Thanh toán</button>
                                        </form>
                                    </div>
                                </div>
                            </main>

                            <aside class="col-md-4">
                                <div class="card mb-4">
                                    <div class="card-body">
                                        <h4 class="d-flex justify-content-between align-items-center mb-3">
                                            <span>Giỏ hàng</span>
                                        </h4>
                                        <ul class="list-group mb-3">
                                            {cartItems.map((item) => (
                                                <li class="list-group-item d-flex justify-content-between lh-condensed">
                                                    <div>
                                                        <h6 class="my-0">{item.name}</h6>
                                                        <small class="text-muted">Thương hiệu: {item.brand}</small>
                                                    </div>
                                                    <span class="text-muted">{item.price}</span>
                                                </li>
                                            ))}
                                            <li class="list-group-item d-flex justify-content-between">
                                                <span>Tổng:</span>
                                                <strong>{calculateTotal(cartItems)}</strong>
                                            </li>
                                        </ul>
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


export default CheckOut;
