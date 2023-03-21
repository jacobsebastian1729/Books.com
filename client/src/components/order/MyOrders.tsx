import axios from 'axios'
import React, { useEffect, useState } from 'react';
import MyOrderType from '../../redux/types/myorder';
import NavBar from '../navBar/NavBar';
import MyOrderList from './MyOrderList';

export default function MyOrders(){


    const [myOrder, setMyOrder] = useState<MyOrderType[]>([])

    const userId = localStorage.getItem("userId")
    const userIdUrl = `http://localhost:8001/orders/${userId}`

    function fetchOrderDetails(){
        axios
        .get(userIdUrl)
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