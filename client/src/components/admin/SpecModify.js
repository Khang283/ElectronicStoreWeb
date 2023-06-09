import React, { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import axios from "axios";
import { Link } from "react-router-dom";
import Loader from '../layout/Loader';
import { Button, Form ,FormControl, FormGroup, FormLabel } from "react-bootstrap";
function SpecModify(props){
    const [submitted, setSubmitted] = useState(false);
    const [show, setShow] = useState(false);
    const [isLoaded, setLoad] = useState(false);
    const handleContinue = () => {
        setShow(false);
        setSpec({
            specName : {Name},
            specValue : {Value},
            specDetail : {Detail}
    })
    }
    const handleClose = () => {
        setShow(false);
    }
    
    function updateSpec(){
        const spec = ({
            specId: Id,
            specName: Name,
            specValue: Value,
            specDetail: Detail
        })
        setShow(true);
        setLoad(true);
                
                axios.post('/api/v1/modify/spec', spec
                    
                ).then(res => {
                    if (res.status == 200) {
                        //setSubmitted(true);
                        // console.log(res.data);
                        //setLoad(false);
                        setSubmitted(true);
                    setLoad(false);
                        console.log(spec);
    
                    }
                })
                    .catch(e => {
                        //setLoad(false);
                        setLoad(false);
                        console.log(e);
                    });     
            
    }
    const [Spec, setSpec] = useState({
        specId: 0,
        specName: "",
        specValue: "",
        specDetail: "",
    })
    const [Id, setSpecId] = useState(props.spec.specId);
    const [Name, setSpecName] = useState('');
    const [Value, setSpecValue] = useState('');
    const [Detail, setSpecDetail] = useState('');
    useEffect(() => {
        setSpecId(props.spec.specId);
        console.log(props.spec.specId);
        setSpecName(props.spec.specName);
        setSpecValue(props.spec.specValue);
        setSpecDetail(props.spec.specDetail);
    }, [])
    return(
        
        <Form>
            <FormGroup className="text-center">
                <FormLabel>Tên thông số*</FormLabel>
                <FormControl type="text" value={Name} onChange={e => setSpecName(e.target.value)} defaultValue={props.spec.specName}></FormControl>
            </FormGroup>
            <FormGroup className="text-center">
                <FormLabel>Chi tiết thông số</FormLabel>
                <FormControl type="text" value={Detail} onChange={e => setSpecDetail(e.target.value)} defaultValue={props.spec.specDetail}></FormControl>
            </FormGroup>
            <FormGroup className="text-center"> 
                <FormLabel>Giá trị</FormLabel>
                <FormControl value={Value} onChange={e => setSpecValue(e.target.value)} type="text" defaultValue={props.spec.specValue}></FormControl>
            </FormGroup>
            <Button onClick={updateSpec}>Lưu thông số</Button>
            <Button onClick={handleClose}>Đóng</Button>
            <Modal show={show} onHide={handleClose}>
                            <Modal.Header closeButton>
                                <Modal.Title>Thông Báo</Modal.Title>
                            </Modal.Header>
                            {
                                isLoaded ?
                                    <div className="home-btn">
                                        <Loader className='mx-auto'></Loader>
                                    </div> :
                                    submitted ?
                                        <div>
                                            <Modal.Body>Thay đổi thuộc tính thành công.</Modal.Body>
                                            <Modal.Footer>
                                                <Button variant="secondary" onClick={handleContinue}>
                                                    Tiếp tục
                                                </Button>
                                                <Link to={"/admin/product/modify"}>
                                                    <Button variant="primary" onClick={handleClose}>
                                                        Hoàn tất
                                                    </Button></Link>
                                            </Modal.Footer>
                                        </div> :
                                        <div>
                                            <Modal.Body>Thêm sản phẩm thất bại.</Modal.Body>
                                            <Modal.Footer>
                                                <Button variant="secondary" onClick={handleClose}>
                                                    Đóng
                                                </Button>
                                            </Modal.Footer>
                                        </div>
                            }
                        </Modal>
        </Form>
        
    );
}
export default SpecModify;
