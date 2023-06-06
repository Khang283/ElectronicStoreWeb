import React from "react";
import Tab  from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import MyAccount from "../MyAccount/MyAccount";
import MyActivities from "../MyActivities/MyActivities";
import Favorites from "../Favorites/Favorites";
import Purchased from "../Purchased/Purchased";
function Account(){
    return(
     <Tabs  defaultActiveKey={1}>
      <Tab eventKey={1} className="text-dark" title="Thông tin khách hàng">
        <MyAccount></MyAccount>
      </Tab>
      <Tab eventKey={2} className="text-dark" title="Đánh giá đã viết">
      <MyActivities></MyActivities>
    </Tab>
    <Tab eventKey={3} className="text-dark" title="Những sản phẩm yêu thích">
      <Favorites></Favorites>
    </Tab>
    <Tab eventKey={4} className="text-dark" title="Đơn hàng đã mua">
      <Purchased/>
    </Tab>
  </Tabs>
    );
}
export default Account;