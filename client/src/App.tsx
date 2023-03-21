import React from "react";
import { Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import ProductList from "./components/products/ProductList";
import ProductDetail from "./components/products/ProductDetail";
import UserRegistration from "./components/users/UserRegister";
import UserLogIn from "./components/users/UserLogIn";
import UserInformation from "./components/users/UserInformation"
import UpdateUserInfo from "./components/users/UpdateUserInfo";
import UpdatePassword from "./components/users/UpdatePassword";
import CartList from "./components/cart/CartList";
import PlaceOrder from "./components/order/PlaceOrder";
import MyOrders from "./components/order/MyOrders";
import BasicTabs from "./components/tabs/Tabs";
import ShippingAddress from "./components/users/ShippingAddress";

function App() {
  return <div> 
    <Routes>
      <Route path="" element = {<HomePage/>}></Route>
      <Route path = '/products' element = {<ProductList/>}></Route>
      <Route path="/products/:productId" element = {<ProductDetail/>}></Route>
      <Route path="/signup" element = {<UserRegistration/>}></Route>
      <Route path="/login" element = {<UserLogIn/>}></Route>
      <Route path="/userinfo" element = {<UserInformation/>}></Route>
      <Route path="/updateuserinfo" element = {<UpdateUserInfo/>}></Route>
      <Route path="/updatepassword" element = {<UpdatePassword/>}></Route>
      <Route path="/mycart" element = {<CartList/>}></Route>
      <Route path="/shippingaddress" element = {<ShippingAddress/>}></Route>
      <Route path="/myorders" element = {<MyOrders/>}></Route>
      <Route path="/mytab" element = {<BasicTabs/>}></Route>
      <Route path ="/payandorde" element = {<PlaceOrder/>}></Route>
    </Routes>
  </div>;
}

export default App;
