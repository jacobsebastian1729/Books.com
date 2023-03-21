import React from "react";
import { Link } from 'react-router-dom';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import ProductListType from "../../redux/types/productType";
import AddtoCartModal from "../cart/AddtoCartModal";
import "../homepage/slides.css"

type ProductItems = {
    prop: ProductListType
} 

export default function ProductItem({prop}: ProductItems){
    return <Card sx={{ width: 250, height: 600, margin: 2 }}>
        <Link
    to= {`/products/${prop._id}`}
    className="link"
    style={{ textDecoration: "none"}}
    >
      <CardMedia className= 'cardItem'
        sx={{ height: .6, width: 1, objectFit: 'cover' }}
        image={prop.image}
        title={prop.name}
      /></Link>
      <CardContent sx = {{height: .25}}>
        <Typography gutterBottom variant="h5" component="div" sx={{ fontWeight: 700 }}>
          {prop.name}
        </Typography>
        <Typography variant="body1" color="text.secondary">
          <span style={{ color: "blue" }}>{prop.author}</span>
              <span style={{ color: "grey" }}> (Author)</span>
        </Typography>
        <Typography variant="body2">
                  <span
                    style={{ color: "red", textDecoration: "line-through" }}
                  >
                    ${(prop.price * 1.1).toFixed(2)}
                  </span>
                  <span style={{ color: "black" }}>
                    {" "}
                    ${prop.price}
                  </span>
                </Typography>
      </CardContent>
      <Grid>
      <CardActions>
      <AddtoCartModal key={prop._id} prop={prop} />

      </CardActions>
      </Grid>
    </Card>
    }