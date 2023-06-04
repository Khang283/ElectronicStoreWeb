import React from "react";
import Container from "react-bootstrap/esm/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/esm/Button";
import 'bootstrap/dist/css/bootstrap.min.css';
function MyAccount(){
    return(
       <Container>
        <div className="row">
          <div className="col-12">
            <h3 className="p-2">Thông tin của tôi</h3>
          </div>
        </div>
        <Form className="file-upload">
        <div class="row mb-5 gx-5">
          <div class="col-xxl-8 mb-5 mb-xxl-0">
						<div class="bg-secondary-soft px-4 py-5 rounded">
							<div class="row g-3">
								<h4 class="mb-4 mt-0">Thông tin liên hệ</h4>
                <div class="col-md-6">				
                    <Form.Group className="mb-3" controlId="name">
                    <Form.Label>Họ và Tên *</Form.Label>
                    <Form.Control className="form-control" type="text" placeholder="Nguyễn Văn A"></Form.Control>
                    </Form.Group> 
								</div>
                <div className="col-md-6">
                  <Form.Group className="mb-3" controlId="phone">
                    <Form.Label>Số điện thoại *</Form.Label>
                    <Form.Control className="form-control" type="text" placeholder="0123456789"></Form.Control>
                    </Form.Group>
                </div>
                <div className="col-md-6">
                  <Form.Group className="mb-3" controlId="mail">
                    <Form.Label>Email *</Form.Label>
                    <Form.Control className="form-control" type="text" placeholder="uit@gmail.com"></Form.Control>
                    </Form.Group>
                </div>
              </div>
          </div>
        
        <div class="col-xxl-4">
						<div class="bg-secondary-soft px-4 py-5 rounded">
							<div class="row g-3">
								<h4 class="mb-4 mt-0">Upload your profile photo</h4>
								<div class="text-center">
						
									<div class="square position-relative display-2 mb-3">
										<i class="fas fa-fw fa-user position-absolute top-50 start-50 translate-middle text-secondary"></i>
									</div>

									
									<label class="btn btn-success-soft btn-block" for="customFile">Upload</label>
									<button type="button" class="btn btn-danger-soft">Remove</button>
									
									<p class="text-muted mt-3 mb-0"><span class="me-1">Note:</span>Minimum size 300px x 300px</p>
								</div>
							</div>
						</div>
					</div>
          </div>
        </div>
        </Form>
          </Container>

    );
}
export default MyAccount;