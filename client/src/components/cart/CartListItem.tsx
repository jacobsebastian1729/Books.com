import React from "react";
import { useState } from "react";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/system/Unstable_Grid";
import Typography from "@mui/material/Typography";
import { Button, Rating } from "@mui/material";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import MenuItem from "@mui/material/MenuItem";
import IconButton from "@mui/material/IconButton";

import CartListType from "../../redux/types/cartType";

import { useDispatch } from "react-redux";
import { cartActions } from "../../redux/slices/cart";

type CartItems = {
  prop: CartListType;
};

export default function CartListItem({ prop }: CartItems) {
  const dispatch = useDispatch();

  function increaseOne() {
    dispatch(cartActions.incrementOne(prop._id));
  }
  function decreaseOne() {
    dispatch(cartActions.decrementOne(prop._id));
  }

  function deleteFromCart() {
    dispatch(cartActions.removeFromCart(prop._id));
  }

  return (
    <div>
      <Box sx={{ ml: 5, display: "flex", justifyContent: "center", mr: 5 }}>
        <TableContainer component={Paper} sx={{ width: 1 }}>
          <Table aria-label="simple table">
            <TableBody>
              <TableRow
                key={prop._id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  <Grid
                    container
                    rowSpacing={1}
                    columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                  >
                    <Grid xs={2}>
                      <img src={prop.image} height="200" width="132" />
                    </Grid>
                    <Grid xs={4}>
                      <Typography id="" variant="h5" sx={{ mt: 0 }}>
                        {prop.name}
                      </Typography>
                      <Typography id="" sx={{ mt: 0 }}>
                        {prop.author}
                      </Typography>
                      <Typography id="" sx={{ mt: 0 }}>
                        ${prop.price}
                      </Typography>
                    </Grid>
                    <Grid xs={2}>
                      <Box className="product-item-btn">
                        <Button
                          variant="contained"
                          onClick={decreaseOne}
                          size="small"
                          sx={{ backgroundColor: "indigo" }}
                        >
                          -
                        </Button>
                        <Button style={{ width: 5, color: "indigo" }}>
                          <span>{prop.quantity}</span>
                        </Button>

                        <Button
                          variant="contained"
                          onClick={increaseOne}
                          size="small"
                          sx={{ backgroundColor: "indigo" }}
                        >
                          +
                        </Button>
                      </Box>
                    </Grid>
                    <Grid xs={2}>
                      ${parseFloat((prop.price * prop.quantity).toFixed(2))}
                    </Grid>
                    <Grid xs={2}>
                      <IconButton
                        onClick={deleteFromCart}
                        size="large"
                        aria-label="account of current user"
                        aria-controls="primary-search-account-menu"
                        aria-haspopup="true"
                        color="inherit"
                      >
                        <DeleteForeverIcon />
                      </IconButton>
                    </Grid>
                  </Grid>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </div>
  );
}
