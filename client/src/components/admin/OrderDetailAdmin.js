import {
    MDBCard,
    MDBCardBody,
    MDBCardFooter,
    MDBCardHeader,
    MDBCardImage,
    MDBCol,
    MDBContainer,
    MDBProgress,
    MDBProgressBar,
    MDBRow,
    MDBTypography,
} from "mdb-react-ui-kit";
import React from "react";
import { useLocation } from "react-router-dom";

export default function OrderDetailAdmin(props) {
    const location = useLocation()
    let order = location.state.order;
    console.log(order);
    return (
        <div className="py-5">

            <MDBContainer className="">
                <MDBRow className="justify-content-center align-items-center h-100">
                    <MDBCol lg="10" xl="12">
                        <MDBCard style={{ borderRadius: "10px" }}>
                            <MDBCardHeader className="px-4 py-5">
                                <MDBTypography tag="h5" className="text-muted mb-0">
                                    Cảm ơn bạn đã mua hàng,{" "}
                                    <span style={{ color: "#dc3545" }}>{order.username}</span>!
                                </MDBTypography>
                            </MDBCardHeader>
                            <MDBCardBody className="p-4">
                                <div className="d-flex justify-content-between align-items-center mb-4">
                                    <p
                                        className="lead fw-normal mb-0"
                                        style={{ color: "#dc3545" }}
                                    >
                                        Sản phẩm
                                    </p>
                                    {/* <p className="small text-muted mb-0">
                          Receipt Voucher : 1KAU9-84UIL
                        </p> */}
                                </div>
                                {order.cartItems.map(item => (
                                    <div>
                                        <MDBCard className="shadow-0 border mb-4">
                                            <MDBCardBody>
                                                <MDBRow>
                                                    <MDBCol md="3">
                                                        <MDBCardImage
                                                            src={item.productImage}
                                                            fluid
                                                            alt="image product"
                                                        />
                                                    </MDBCol>
                                                    <MDBCol
                                                        md="3"
                                                        className="text-center d-flex justify-content-center align-items-center"
                                                    >
                                                        <p className="text-muted mb-0">{item.productName}</p>
                                                    </MDBCol>
                                                    <MDBCol
                                                        md="3"
                                                        className="text-center d-flex justify-content-center align-items-center"
                                                    >
                                                        <p className="text-muted mb-0 small">Qty: {item.quantity}</p>
                                                    </MDBCol>
                                                    <MDBCol
                                                        md="3"
                                                        className="text-center d-flex justify-content-center align-items-center"
                                                    >
                                                        <p className="text-muted mb-0 small">{item.price.toLocaleString() + " VNĐ"}</p>
                                                    </MDBCol>
                                                </MDBRow>

                                            </MDBCardBody>
                                        </MDBCard>
                                    </div>

                                ))}
                                <hr
                                    className="mb-4"
                                    style={{ backgroundColor: "#e0e0e0", opacity: 1 }}
                                />
                                <MDBRow className="align-items-center">
                                    <MDBCol md="2">
                                        <p className="text-muted mb-0 small">Tình trạng</p>
                                    </MDBCol>
                                    <MDBCol md="10">
                                        <MDBProgress
                                            style={{ height: "6px", borderRadius: "16px" }}
                                        >
                                            <MDBProgressBar
                                                style={{
                                                    borderRadius: "16px",
                                                    backgroundColor: "#a8729a",
                                                }}
                                                width={order.status == "Đã thanh toán" ? 100 : 50}
                                                valuemin={0}
                                                valuemax={100}
                                            />
                                        </MDBProgress>
                                        <div className="d-flex justify-content-around mb-1">
                                            <p className="text-muted mt-1 mb-0 small ms-xl-5">
                                                Chưa thanh toán
                                            </p>
                                            <p className="text-muted mt-1 mb-0 small ms-xl-5">
                                                Đã thanh toán
                                            </p>
                                        </div>
                                    </MDBCol>
                                </MDBRow>

                                <div className="d-flex justify-content-between pt-2">
                                    <p className="fw-bold mb-0">Chi tiết đơn hàng</p>
                                    <p className="text-muted mb-0">
                                        <span className="fw-bold me-4">Tổng</span>{order.totalPrice.toLocaleString() + " VNĐ"}
                                    </p>
                                </div>

                                <div className="d-flex justify-content-between pt-2">
                                    <p className="text-muted mb-0">Người nhận : {order.receiver}</p>
                                    <p className="text-muted mb-0">
                                        <span className="fw-bold me-4">Giảm giá</span> 0 VNĐ
                                    </p>
                                </div>

                                <div className="d-flex justify-content-between">
                                    <p className="text-muted mb-0">
                                        Địa chỉ : {order.address}
                                    </p>
                                    <p className="text-muted mb-0">
                                        {/* <span className="fw-bold me-4">Thuế  </span> 123 */}
                                    </p>
                                </div>

                                <div className="d-flex justify-content-between mb-5">
                                    <p className="text-muted mb-0">
                                        Voucher : Không có
                                    </p>
                                    <p className="text-muted mb-0">
                                        <span className="fw-bold me-4">Phí ship</span>{" "}
                                        0 VNĐ
                                    </p>
                                </div>
                            </MDBCardBody>
                            <MDBCardFooter
                                className="border-0 px-4 py-5"
                                style={{
                                    backgroundColor: "#dc3545",
                                    borderBottomLeftRadius: "10px",
                                    borderBottomRightRadius: "10px",
                                }}
                            >
                                <MDBTypography
                                    tag="h5"
                                    className="d-flex align-items-center justify-content-end text-white text-uppercase mb-0"
                                >
                                    Tổng tiền: <span className="h2 mb-0 ms-2">{order.totalPrice.toLocaleString() + " VNĐ"}</span>
                                </MDBTypography>
                            </MDBCardFooter>
                        </MDBCard>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </div>

    );
}