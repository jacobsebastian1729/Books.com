import React from 'react'

import { useState } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { useDispatch } from "react-redux";
import { cartActions } from "../../redux/slices/cart";
import { RootState } from '../../redux/store';
import CartListType from '../../redux/types/cartType';
import { Link } from 'react-router-dom';

import { Button, Checkbox, TextField } from "@mui/material";
import Grid from "@mui/material/Grid";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

export default function PlaceOrder(){

    const myCart = useSelector((state: RootState) => state.cartList)

    const dispatch = useDispatch();

    const [productList, setProductList] = useState<CartListType[]>(myCart.cartList)

    const userId = localStorage.getItem("userId")
    const userIdUrl = `http://localhost:8001/orders/${userId}`

    const placeOrder = () =>{
        console.log(productList, 'value')
        axios
            .post(userIdUrl, productList)
            .then((res) => {
                dispatch(cartActions.deleteAllCart())
                console.log(res.data.message)
            })
            .catch((error) => console.log(error))
    }

    function CartTotal():number{
    let total = 0
    myCart.cartList.forEach((item) => {
        total = total + (item.price * item.quantity)
    })
    return parseFloat(total.toFixed(2));    
  }

    return <div style={{backgroundColor: 'violet'}}>PlaceOrder
        <Box sx={{ flexGrow: 1 }} mt={10}>
        <Grid container spacing={1} p={2} display='flex' justifyContent='center'>
          <Grid
            item
            xs={3.75}
            style={{ color: "black", backgroundColor: "white" }}
            display='flex' justifyContent='center' flexDirection='column' alignItems='center'
          >
            <Typography variant="h4" mt={5} color="inherit" component="div" fontWeight={500}>
            <LockOutlinedIcon/>     Payment
          </Typography>
          
          <Typography variant="body2" color="inherit" component="div" fontWeight={500} mt={4} mr={25}>
            CARD HOLDERS NAME
          </Typography>
          <TextField  sx={{width: .8 }} />
          
            <Typography variant="body2" color="inherit" component="div" fontWeight={500} mt={4} mr={32}>
            CARD NUMBER
          </Typography>
          <TextField  sx={{width: .8 }} />

          <Typography variant="body2" color="inherit" component="div" fontWeight={500} mt={4} mr={40}>
            CVV
          </Typography>
          <TextField  sx={{width: .8 }} />
          
          <Grid mt={4} mb={4}>
<Button variant="contained" color="secondary" onClick={placeOrder} sx={{paddingTop:1.5, paddingBottom:1.5, paddingRight:15, paddingLeft:15 }}>CONFIRM</Button>
          </Grid>


          </Grid>
          <Grid
            item
            xs={2.25}
            style={{ color: "black", backgroundColor: "#eeeeee" }}
          >
            <Typography mt={10} ml={2} variant="body1" color="inherit" component="div" fontWeight={500} sx={{textDecoration: 'underline'}}>
            Order
          </Typography>
          <Typography mt={1} ml={2} variant="body2" color="inherit" component="div" fontWeight={500} >
            
            TOTAL: ${CartTotal()}
          </Typography>
          </Grid>
          
          
          </Grid>
          </Box>
        
    </div>
}