import axios from 'axios'
import React, { useEffect, useState } from 'react';
import MyOrderType from '../../redux/types/myorder';
import NavBar from '../navBar/NavBar';
import MyOrderList from './MyOrderList';

export default function MyOrders(){


    const [myOrder, setMyOrder] = useState<MyOrderType[]>([])

    const userId = localStorage.getItem("userId")
    const userToken = localStorage.getItem("userToken");
    
    //const userIdUrl = `http://localhost:8001/orders/${userId}`
    const userIdUrl = `https://books-backend-jbyp.onrender.com/orders/${userId}`

    function fetchOrderDetails(){
        axios
        .get(userIdUrl, { headers: { Authorization: `Bearer ${userToken}` } })
        .then((res) => res.data)
        .then((data) => setMyOrder(data))
    }

    useEffect(() => {
        fetchOrderDetails();
    }, []);

    return <div>
        <NavBar/>
        {
            myOrder.map((item) => {
                return <MyOrderList key={item._id} prop = {item}/>
            })
        }
    </div>
}