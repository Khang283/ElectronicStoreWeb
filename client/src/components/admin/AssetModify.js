import React, { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";
import Loader from '../layout/Loader'
import { Button, Form ,FormControl, FormGroup, FormLabel } from "react-bootstrap";
function AssetModify(props){
    const [submitted, setSubmitted] = useState(false);
    const [show, setShow] = useState(false);
    const [isLoaded, setLoad] = useState(false);
    const handleClose = () => {
        setShow(false);
    }
    const handleContinue = () => {
        setShow(false);
        setAsset({
            assetName : {Name},
            assetPath: {Path},
            assetRole: {Role},
            assetType: {Type}
    })
    }
    function updateAsset(){
        const asset = ({
            assetId: Id,
            assetName: Name,
            assetPath: Path,
            assetRole: Role,
            assetType: Type
        })
        setShow(true);
        setLoad(true);
                
                axios.post('/api/v1/modify/asset', asset
                    
                ).then(res => {
                    if (res.status == 200) {
                        setSubmitted(true);
                        // console.log(res.data);
                        setLoad(false);
                        console.log(asset);
    
                    }
                })
                    .catch(e => {
                        setLoad(false);
                        console.log(e);
                    });     
            
    }
    const [Asset, setAsset] = useState({
        assetId: 0,
        assetName: "",
        assetPath: "",
        assetType: "",
        assetRole: ""
    })
    const [Id, setAssetId] = useState(props.asset.assetId);
    const [Name, setAssetName] = useState('');
    const [Path, setAssetPath] = useState('');
    const [Type, setAssetType] = useState('');
    const [Role, setAssetRole] = useState('');
    useEffect(() => {
        setAssetId(props.asset.assetId);
        console.log(props.asset.assetId);
        setAssetName(props.asset.assetName);
        setAssetType(props.asset.assetType);
        setAssetRole(props.asset.assetRole);
        setAssetPath(props.asset.assetPath);
    }, [])
    return(
        
        <Form>
            <FormGroup className="text-center">
                <FormLabel className="font-weight-bold">Tên ảnh*</FormLabel>
                <FormControl type="text" value={Name} onChange={e => setAssetName(e.target.value)} defaultValue={props.asset.assetName}></FormControl>
            </FormGroup>
            <FormGroup className="text-center">
                <FormLabel className="font-weight-bold">Đường dẫn*</FormLabel>
                <FormControl type="text" value={Path} onChange={e => setAssetPath(e.target.value)} defaultValue={props.asset.assetPath}></FormControl>
            </FormGroup>
            <FormGroup className="text-center"> 
                <FormLabel className="font-weight-bold">Loại*</FormLabel>
                <FormControl value={Type} onChange={e => setAssetType(e.target.value)} type="text" defaultValue={props.asset.assetType}></FormControl>
            </FormGroup>
            <FormGroup className="text-center"> 
                <FormLabel className="font-weight-bold ">Vai trò*</FormLabel>
                <FormControl value={Role} onChange={e => setAssetRole(e.target.value)} type="text" defaultValue={props.asset.assetRole}></FormControl>
            </FormGroup>
            <Button onClick={updateAsset}>Lưu thông tin</Button>
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
export default AssetModify;
