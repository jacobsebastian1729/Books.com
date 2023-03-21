import React from 'react'
import { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { AppDispatch, RootState } from '../../redux/store';

import Box from "@mui/material/Box";
import { Typography } from '@mui/material';

import fetchProductData from "../../redux/thunks/product";
import './slides.css'

import ProductListType from '../../redux/types/productType';
import SlidesItem from './SlidesItem';
export default function Slides(){

    const productsList = useSelector(
    (state: RootState) => state.prouctsList.productList
  );
    
    const dispatch = useDispatch<AppDispatch>();

    const productUrl = "http://localhost:8001/products";

    useEffect(() => {
    dispatch(fetchProductData(productUrl));
  }, [dispatch, productUrl])

  let sortedList: ProductListType[] = [];

  if (productsList.length === 0){
    return <p>Loading...</p>
  } else {
    sortedList = productsList.slice().sort((a: ProductListType, b:ProductListType) => {
      if (a.author < b.author) {
        return -1;
      }
      if (a.author > b.author) {
        return 1;
      }
      return 0;
    });

    
  }
  const copiedArray = [...sortedList].slice(0, 10);
console.log(copiedArray,"products");

    return <div>
        <Typography variant="h4" sx={{ fontWeight: 700, color: 'indigo' }} mt={5} pl = {19}>
              Best Sellers of The Week
        </Typography>
        <Box display = 'flex' justifyContent='center' mt = {1}>
        <Box className="horizontal-section">
            
                {
                    copiedArray.map((item) => {
                        
                        return <SlidesItem key={item._id} prop = {item}/>
                        
                    })
                }
            
            
            
           
    
  </Box>
  </Box>
    </div>
    
}