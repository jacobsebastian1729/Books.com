import React from 'react'
import { Link } from 'react-router-dom';

import Box from "@mui/material/Box";


import './slides.css'

import ProductListType from '../../redux/types/productType';

type ProductItemType = {
    prop: ProductListType
}

export default function SlidesItem({prop} : ProductItemType){
    return <Box className = 'item'>
        <Link
    to= {`/products/${prop._id}`}
    className="link"
    style={{ textDecoration: "none"}}
    >
        <img src={prop.image} width= '100%' height= '100%' object-fit= 'cover'/>
        </Link>
        </Box>
}