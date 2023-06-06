import React from "react";
import Container from "react-bootstrap/esm/Container";
import Card from 'react-bootstrap/Card';
function MyActivities(){
    return(
        <Container>
            <div className="row">
                <h3 className="text-dark">Đánh giá đã viết</h3>
                <div className="col-xl-12">
                    <Card className="card-lg">
                        <Card.Header>Ngày viết đánh giá</Card.Header>
                        <Card.Body className="user-activity">
                        <Card.Text>Nội dung đánh giá</Card.Text>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </Container>
);
}
export default MyActivities;