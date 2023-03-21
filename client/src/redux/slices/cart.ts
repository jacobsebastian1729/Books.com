import { createSlice } from "@reduxjs/toolkit";
import { stat } from "fs";

import CartListType from "../types/cartType";

const cartItems = 
    localStorage.getItem("cartList") != null
    ? JSON.parse(localStorage.getItem('cartList') as string)
    : [];
type InitialState = {
    cartList: CartListType[]; 
};

const initialState: InitialState = {
    cartList: cartItems,
};

const cartSlice = createSlice({
    name: 'cartList',
    initialState,
    reducers: {

        addToCart: (state, action) =>{
            
            const index = state.cartList.findIndex((item) => 
                item._id === action.payload._id
            );
            if (index === -1){
                state.cartList.push(action.payload);
            }
            else{
                state.cartList[index].quantity = state.cartList[index].quantity + action.payload.quantity;
            }
            
            localStorage.setItem(
                "cartList",
                JSON.stringify(state.cartList.map((item) => item))
            )
        },
        removeFromCart: (state, action) =>{
            
            const index = state.cartList.findIndex(
                (item) => item._id === action.payload
            );
            
            if (index >= 0){
                state.cartList.splice(index, 1);
                localStorage.setItem(
                    "cartList",
                    JSON.stringify(state.cartList.map((item) => item))
                  );
            }
        
      
        },

        deleteAllCart: (state) => {
            state.cartList.splice(0,state.cartList.length)
            localStorage.setItem(
                "cartList",
                JSON.stringify(state.cartList.map((item) => item))
              );
        },

        incrementOne: (state, action) => {
            const index = state.cartList.findIndex(
                (item) => item._id === action.payload
            );
            state.cartList[index].quantity = state.cartList[index].quantity + 1
            localStorage.setItem(
                "cartList",
                JSON.stringify(state.cartList.map((item) => item))
              );
        },
        decrementOne: (state, action) => {
            const index = state.cartList.findIndex(
                (item) => item._id === action.payload
            );
            state.cartList[index].quantity = state.cartList[index].quantity - 1
            if (state.cartList[index].quantity <= 0){
                state.cartList.splice(index, 1);
            }
            localStorage.setItem(
                "cartList",
                JSON.stringify(state.cartList.map((item) => item))
              );
        },
        
    }
})

const cartReducer = cartSlice.reducer;
export default cartReducer;
export const cartActions = cartSlice.actions