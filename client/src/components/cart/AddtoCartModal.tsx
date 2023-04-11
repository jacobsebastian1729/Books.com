import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { useDispatch } from "react-redux";
import { cartActions } from "../../redux/slices/cart";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Grid from "@mui/system/Unstable_Grid";
import Stack from "@mui/material/Stack";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

import ProductListType from "../../redux/types/productType";
import CartListType from "../../redux/types/cartType";

type ProductItems = {
  prop: ProductListType;
};

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  borderRadius: "5px",
  //border: '1px solid #000',
  boxShadow: 24,
  p: 2,
};

export default function AddtoCartModal({ prop }: ProductItems) {
  const yourCart = useSelector((state: RootState) => state.cartList);
  const dispatch = useDispatch();

  const [open, setOpen] = React.useState(false);

  const [inCart, setInCart] = useState(false);

  useEffect(() => {
    let found = false;
    yourCart.cartList.forEach((item) => {
      if (item._id === prop._id) {
        found = true;
      }
    });
    setInCart(found);
  }, [yourCart.cartList, prop._id]);

  const [cart, setCart] = useState<CartListType>({
    _id: "",
    name: "",
    author: "",
    image: "",
    price: 0,
    isAvailable: false,
    quantity: 0,
  });

  function handleOpen() {
    setOpen(true);
    const updatedCart = {
      ...cart,
      _id: prop._id,
      name: prop.name,
      author: prop.author,
      image: prop.image,
      price: prop.price,
      isAvailable: prop.isAvailable,
      quantity: 1,
    };
    setCart(updatedCart);

    dispatch(cartActions.addToCart(updatedCart));
  }

  const handleClose = () => setOpen(false);

  return (
    <div>
      {inCart && !open ? (
        <Link to="/mycart" className="link" style={{ textDecoration: "none" }}>
          <Button
            variant="outlined"
            color="secondary"
            sx={{
              border: 2,
              borderRadius: 5,
              pl: 3,
              pr: 3,
              pt: 1,
              fontWeight: "600",
            }}
          >
            {" "}
            <ShoppingCartIcon />
            IN CART
          </Button>
        </Link>
      ) : (
        <div>
          <Button
            onClick={handleOpen}
            variant="contained"
            color="secondary"
            sx={{ borderRadius: 5, pl: 3, pr: 3, pt: 1, fontWeight: "500" }}
          >
            <ShoppingCartIcon />
            ADD TO CART
          </Button>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <Grid
                container
                rowSpacing={1}
                columnSpacing={{ xs: 1, sm: 2, md: 3 }}
              >
                <Grid xs={6}>
                  <img src={prop.image} height="300" width="200" />
                </Grid>
                <Grid xs={6}>
                  <Typography
                    id="modal-modal-description"
                    variant="h5"
                    component="h2"
                    sx={{ mt: 0 }}
                  >
                    {prop.name}
                  </Typography>
                  <Typography id="modal-modal-description" sx={{ mt: 0 }}>
                    Is now in your cart with {yourCart.cartList.length - 1}{" "}
                    items
                  </Typography>
                  <Typography
                    id="modal-modal-description"
                    variant="h6"
                    component="h2"
                    sx={{ mt: 0 }}
                  >
                    ${prop.price} total
                  </Typography>
                </Grid>
                <Grid xs={12} spacing={2} direction="column">
                  <Button
                    color="secondary"
                    variant="outlined"
                    onClick={handleClose}
                    style={{ width: "100%" }}
                    sx={{ mt: 1 }}
                  >
                    KEEP SHOPPING
                  </Button>
                  <Link
                    to="/mycart"
                    className="link"
                    style={{ textDecoration: "none" }}
                  >
                    <Button
                      color="secondary"
                      variant="contained"
                      style={{ width: "100%" }}
                      sx={{ mt: 1 }}
                    >
                      CHECK OUT ({yourCart.cartList.length} ITEM)
                    </Button>
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Modal>
        </div>
      )}
    </div>
  );
}
