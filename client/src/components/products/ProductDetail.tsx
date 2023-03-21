import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { Link } from "react-router-dom";

import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";

import ProductListType from "../../redux/types/productType";
import AddtoCartModal from "../cart/AddtoCartModal";
import { typography } from "@mui/system";
import NavBar from "../navBar/NavBar";
import Footer from "../footer/Footer";
import ProductComment from "../comments/ProductCommentList";

export default function ProductDetail() {
  const [productDetail, setProductDetail] = useState<ProductListType>({
    _id: "",
    name: "",
    author: "",
    image: "",
    price: 0,
    isAvailable: false,
    description: "",
  });

  const productId = useParams();
  const productIdUrl = `http://localhost:8001/products/${productId.productId}`;

  function fetchProductDetail() {
    axios
      .get(productIdUrl)
      .then((res) => res.data)
      .then((data) => setProductDetail(data));
  }

  useEffect(() => {
    fetchProductDetail();
  }, []);

  return (
    <div>
      <NavBar/>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2} p={5}>
          <Grid
            item
            xs={1.5}
            style={{ color: "white", backgroundColor: "white" }}
          ></Grid>
          <Grid
            item
            xs={2.5}
            style={{ color: "white", backgroundColor: "white" }}
          >
            <img src={productDetail.image} height="auto" width="95%" />
          </Grid>
          <Grid item xs={6.5} style={{ backgroundColor: "white" }}>
            <Typography variant="h4" sx={{ fontWeight: 500 }}>
              {productDetail.name}
            </Typography>
            <Typography variant="body1" sx={{ fontWeight: 500 }}>
              <span style={{ color: "blue" }}>{productDetail.author}</span>
              <span style={{ color: "grey" }}> (Author)</span>
            </Typography>
            <Grid
              item
              xs={3}
              style={{ backgroundColor: "white", marginTop: "10px" }}
            >
              <Box sx={{ border: 3, borderColor: "violet", padding: "10px" }}>
                <Typography variant="body1" sx={{ color: "violet" }}>
                  Paperback
                </Typography>
                <Typography variant="body1" sx={{ color: "grey" }}>
                  English
                </Typography>
                <Typography variant="body1">
                  <span
                    style={{ color: "red", textDecoration: "line-through" }}
                  >
                    ${(productDetail.price * 1.1).toFixed(2)}
                  </span>
                  <span style={{ color: "black" }}>
                    {" "}
                    ${productDetail.price}
                  </span>
                </Typography>
              </Box>
            </Grid>
            {productDetail.isAvailable ? (
              <Typography mt={2} sx={{ fontWeight: 700, color: "#03a9f4" }}>
                <CheckCircleIcon />
                AVAILABLE
              </Typography>
            ) : (
              <Typography mt={2} sx={{ fontWeight: 700, color: "#f50057" }}>
                <HighlightOffIcon />
                OUT OF STOCK
              </Typography>
            )}

            <Box mt={2} display="flex">
              <AddtoCartModal key={productDetail._id} prop={productDetail} />
              <Link to="" className="link" style={{ textDecoration: "none" }}>
                <Button
                  variant="outlined"
                  color="secondary"
                  sx={{
                    marginLeft: 1,
                    border: 2,
                    borderRadius: 5,
                    pl: 3,
                    pr: 3,
                    pt: 1,
                    fontWeight: "600",
                  }}
                >
                  <BookmarkBorderIcon />
                  ADD TO WISHLIST
                </Button>
              </Link>
            </Box>
            <Box mt={2}>
            <Typography variant="h4" sx={{ fontWeight: 500 }}>
                Description
            </Typography>
            <Typography variant="body1">
                {productDetail.description}
            </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <ProductComment key={productDetail._id} prop = {productDetail}/>
      <Footer/>
    </div>
  );
}
