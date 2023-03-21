//  product slice here
import React from "react";

import { createSlice } from "@reduxjs/toolkit";

import ProductListType from "../types/productType";

type InitialState = {
    productList: ProductListType[];
    favoriteList: ProductListType[];

};

const initialState: InitialState = {
    productList: [],
    favoriteList: [],
};

const productSlice = createSlice({
    name: 'productList',
    initialState,
    reducers: {
        getProductData: (state, action) => {
            state.productList = action.payload;
        }
    }
})

const productsReducer = productSlice.reducer;
export default productsReducer;
export const productActions = productSlice.actions;