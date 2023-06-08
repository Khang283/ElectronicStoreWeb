import React from 'react';
import "../Footer/Footer.css";
function Footer() {
  return (
    <div className="d-flex flex-column">
    <footer className="text-center text-lg-left text-secondary bg-danger mt-auto" >
        <div className="container text-center text-md-left pt-5 ">
          <div className="row">
            <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
              <h5 className="text-uppercase text-light">4man Electronic Store</h5>
              <p className="text-light">
              Chúng tôi cam kết cung cấp những sản phẩm điện tử chất lượng, mang lại trải nghiệm tuyệt vời cho khách hàng. Sự hài lòng của khách hàng là ưu tiên hàng đầu của cửa hàng.
              </p>
              <div>
              <p className='text-light'>Hỗ trợ thanh toán qua</p>
              <img src="../vnpay.png" alt='vnpay' className='m-2' width={45} height={40}></img>
              <img src="../momo.png" alt='momo'className='m-2 ' width={45} height={40}/>
              <img src="../visa.png" alt='visa' className='m-2' width={45} height={40}/>
              <img src="../mastercard.png" className='m-2' alt='mastercard' width={45} height={40}/>
              <img src="../zalopay.png" className='m-2' alt='zalopay' width={45} height={40}/>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
              <h5 className="text-uppercase text-light">Thông tin</h5>
              <ul className="list-unstyled">
                <li className='mb-2'>
                  <a href="#!" className="text-light">Chính sách bảo hành</a>
                </li>
                <li className='mb-2'>
                  <a href="#!" className="text-light">Chính sách bảo mật</a>
                </li>
                <li className='mb-2'>
                  <a href="#!" className="text-light">Về chúng tôi</a>
                </li>
                <li className='mb-2'>
                  <a href="#!" className="text-light">Liên Hệ</a>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
              <h5 className="text-uppercase text-light fw-bold">Liên hệ</h5>
              <p className="text-light"><i className="fa fa-home me-3"></i> KP6, Linh Trung, Thủ Đức, TPHCM</p>
              <p className="text-light"><i className="fas fa-envelope me-3"></i> uit@gmail.com</p>
              <p className="text-light"><i className="fas fa-phone me-3"></i> 0123456789</p>
            </div>
          </div>
        </div>
      <div className="row text-center p-2 bg-light bg-gradient pt-0 mt-0" >
        <div className="text-dark fw-bold" >© 2023 Công ty cổ phần một thành viên 4man - chuyên bán những sản phẩm gia dụng, điện tử với mức giá hợp lí. Chịu trách nhiệm nội dung : Nhóm 4 người</div>
      </div>
    </footer>
    </div>
  );
}

export default Footer;