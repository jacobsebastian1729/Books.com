import React from "react";

import { useSelector, useDispatch } from "react-redux";
import { productActions } from "../../redux/slices/product";
import { AppDispatch, RootState } from "../../redux/store";

import Box from "@mui/material/Box";
import { Grid } from '@mui/material';


import ProductItem from "./ProductItem";
import NavBar from "../navBar/NavBar";

export default function ProductList() {

  const productsList = useSelector(
    (state: RootState) => state.prouctsList.productList
  );

  

  
  
  return <div>
    <NavBar/>
    <Grid container spacing={-2}  alignItems="center" justifyContent="center" sx = {{padding: 1}}>
    {
      productsList.map((product) => {
        return <ProductItem key={product._id} prop = {product} />
      })
    }
    </Grid>
  </div>;
}
