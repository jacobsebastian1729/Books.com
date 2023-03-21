// product thunk here
import React from "react";

import { productActions } from "../slices/product";
import { AppDispatch } from "../store";

export default function fetchProductData(url : string){
    return async (dispatch: AppDispatch) => {
        try {
            

            const response = await fetch(url);
            if (!response.ok){
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const productsData = await response.json();
            dispatch(productActions.getProductData(productsData))

        } catch (error) {
            
        }
    }
}