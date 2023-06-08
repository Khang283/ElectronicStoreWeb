import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import '../Category/Category.css';
import React, { useState } from 'react';
import RangeSlider from 'react-bootstrap-range-slider';

function Checkbox() {

    const [value, setValue] = useState(0);

    return (
        <Form>
            {['checkbox'].map((type) => (
                <div key={type} className="mb-3">
                    <h6> Hãng sản xuất </h6>
                    <Row xs lg="2">
                        <Col>
                            <Form.Check >
                                <Form.Check.Input type={type} />
                                <Form.Check.Label>{'Tất cả'}</Form.Check.Label>
                            </Form.Check>
                        </Col>
                        <Col>
                            <Form.Check >
                                <Form.Check.Input type={type} />
                                <Form.Check.Label>{'Apple'}</Form.Check.Label>
                            </Form.Check>
                        </Col>
                        <Col>
                            <Form.Check>
                                <Form.Check.Input type={type} />
                                <Form.Check.Label>{'Samsung'}</Form.Check.Label>
                            </Form.Check>
                        </Col>
                        <Col>
                            <Form.Check >
                                <Form.Check.Input type={type} />
                                <Form.Check.Label>{'OPPO'}</Form.Check.Label>
                            </Form.Check>
                        </Col>
                        <Col>
                            <Form.Check>
                                <Form.Check.Input type={type} />
                                <Form.Check.Label>{'Xiaomi'}</Form.Check.Label>
                            </Form.Check>
                        </Col>
                        <Col>
                            <Form.Check >
                                <Form.Check.Input type={type} />
                                <Form.Check.Label>{'Realme'}</Form.Check.Label>
                            </Form.Check>
                        </Col>
                        <Col>
                            <Form.Check>
                                <Form.Check.Input type={type} />
                                <Form.Check.Label>{'Vivo'}</Form.Check.Label>
                            </Form.Check>
                        </Col>
                        <Col>
                            <Form.Check >
                                <Form.Check.Input type={type} />
                                <Form.Check.Label>{'Asus'}</Form.Check.Label>
                            </Form.Check>
                        </Col>
                        <Col>
                            <Form.Check>
                                <Form.Check.Input type={type} />
                                <Form.Check.Label>{'Mastel'}</Form.Check.Label>
                            </Form.Check>
                        </Col>
                        <Col>
                            <Form.Check >
                                <Form.Check.Input type={type} />
                                <Form.Check.Label>{'Nokia'}</Form.Check.Label>
                            </Form.Check>
                        </Col>
                    </Row>
                    <br />
                    <h6> Mức giá (triệu đồng) </h6>
                    <RangeSlider
                        value={value}
                        min={0}
                        max={50}
                        onChange={changeEvent => setValue(changeEvent.target.value)}
                    />
                    <br />
                    <h6> Tính năng đặc biệt </h6>
                    <Form.Check >
                        <Form.Check.Input type={type} />
                        <Form.Check.Label>{'Tất cả'}</Form.Check.Label>
                    </Form.Check>
                    <Form.Check >
                        <Form.Check.Input type={type} />
                        <Form.Check.Label>{'Bảo mật vân tay'}</Form.Check.Label>
                    </Form.Check>
                    <Form.Check >
                        <Form.Check.Input type={type} />
                        <Form.Check.Label>{'Nhận diện khuôn mặt'}</Form.Check.Label>
                    </Form.Check>
                    <Form.Check >
                        <Form.Check.Input type={type} />
                        <Form.Check.Label>{'Chống nước - chống bụi'}</Form.Check.Label>
                    </Form.Check>
                    <Form.Check >
                        <Form.Check.Input type={type} />
                        <Form.Check.Label>{'Sạc nhanh '}</Form.Check.Label>
                    </Form.Check>
                    <Form.Check >
                        <Form.Check.Input type={type} />
                        <Form.Check.Label>{'Hỗ trợ 5G'}</Form.Check.Label>
                    </Form.Check>
                    <Form.Check >
                        <Form.Check.Input type={type} />
                        <Form.Check.Label>{'Sạc không dây'}</Form.Check.Label>
                    </Form.Check>
                    <br />
                    <h6> Hiệu năng và pin </h6>
                    <Form.Check >
                        <Form.Check.Input type={type} />
                        <Form.Check.Label>{'Tất cả'}</Form.Check.Label>
                    </Form.Check>
                    <Form.Check >
                        <Form.Check.Input type={type} />
                        <Form.Check.Label>{'Dưới 3000mah'}</Form.Check.Label>
                    </Form.Check>
                    <Form.Check >
                        <Form.Check.Input type={type} />
                        <Form.Check.Label>{'Pin từ 3000mah-4000mah'}</Form.Check.Label>
                    </Form.Check>
                    <Form.Check >
                        <Form.Check.Input type={type} />
                        <Form.Check.Label>{'Pin từ 4000mah-5000mah'}</Form.Check.Label>
                    </Form.Check>
                    <Form.Check >
                        <Form.Check.Input type={type} />
                        <Form.Check.Label>{'Siêu trâu: pin từ 5000mah trở lên'}</Form.Check.Label>
                    </Form.Check>
                    <Form.Check >
                        <Form.Check.Input type={type} />
                        <Form.Check.Label>{'Chơi game/ Cấu hình cao'}</Form.Check.Label>
                    </Form.Check>
                    <br />
                    <h6> Trả góp </h6>
                    <Form.Check >
                        <Form.Check.Input type={type} />
                        <Form.Check.Label>{'Tất cả'}</Form.Check.Label>
                    </Form.Check>
                    <Form.Check >
                        <Form.Check.Input type={type} />
                        <Form.Check.Label>{'Trả góp 0%'}</Form.Check.Label>
                    </Form.Check>
                    <Form.Check >
                        <Form.Check.Input type={type} />
                        <Form.Check.Label>{'Trả góp 0đ'}</Form.Check.Label>
                    </Form.Check>
                    <Form.Check >
                        <Form.Check.Input type={type} />
                        <Form.Check.Label>{'Trả góp 0% và 0đ'}</Form.Check.Label>
                    </Form.Check>
                </div>
            ))}
        </Form>
    );
}

export default Checkbox;