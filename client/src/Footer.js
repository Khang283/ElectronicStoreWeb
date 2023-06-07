import React from 'react';

function Footer() {
  return (
    <footer className="text-center text-lg-left text-secondary " >
        <div className="container text-center text-md-left pt-5 pb-5 ">
          <div className="row">
            <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
              <h5 className="text-uppercase">Tên web</h5>
              <p className="text-dark ">
              Chúng tôi cam kết cung cấp những sản phẩm điện tử chất lượng, mang lại trải nghiệm tuyệt vời cho khách hàng. Sự hài lòng của khách hàng là ưu tiên hàng đầu của chúng tôi.
              </p>
            </div>
            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
              <h5 className="text-uppercase">Thông tin</h5>
              <ul className="list-unstyled">
                <li className='mb-2'>
                  <a href="#!" className="text-dark">Chính sách bảo hành</a>
                </li>
                <li className='mb-2'>
                  <a href="#!" className="text-dark">Chính sách bảo mật</a>
                </li>
                <li className='mb-2'>
                  <a href="#!" className="text-dark">Về chúng tôi</a>
                </li>
                <li className='mb-2'>
                  <a href="#!" className="text-dark">Liên Hệ</a>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
              <h5 className="text-uppercase fw-bold">Liên hệ</h5>
              <p className="text-dark"><i className="fas fa-home me-3"></i> KP6, Linh Trung, Thủ Đức, TPHCM</p>
              <p className="text-dark"><i className="fas fa-envelope me-3"></i> uit@gmail.com</p>
              <p className="text-dark"><i className="fas fa-phone me-3"></i> 0123456789</p>
            </div>
          </div>
        </div>
      <div className="text-center p-2 bg-light" >
        <div className="text-dark fw-bold" >© 2023 Powered by UIT</div>
      </div>
    </footer>
  );
}

export default Footer;