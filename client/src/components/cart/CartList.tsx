import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

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
import CartListItem from "./CartListItem";
import NavBar from "../navBar/NavBar";

export default function CartList() {
  const yourCart = useSelector((state: RootState) => state.cartList);

  const [isLogin, setIsLogin] = useState<boolean>(false);

  const userId = localStorage.getItem("userId");

  useEffect(() => {
    if (userId === null || userId.length === 0) {
      setIsLogin(false);
    } else {
      setIsLogin(true);
    }
  }, []);

  function CartTotal(): number {
    let total = 0;
    yourCart.cartList.forEach((item) => {
      total = total + item.price * item.quantity;
    });
    return parseFloat(total.toFixed(2));
  }

  return (
    <div>
      <NavBar />
      <Box>
        <TableContainer
          component={Paper}
          sx={{ mt: 2, ml: 5, mr: 5, width: 0.95 }}
        >
          <Table aria-label="simple table">
            <TableHead>
              <TableRow
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  <Grid
                    container
                    rowSpacing={1}
                    columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                  >
                    <Grid xs={6}>
                      <TableCell>Item</TableCell>
                    </Grid>
                    <Grid xs={2}>
                      <TableCell align="right">Qty</TableCell>
                    </Grid>
                    <Grid xs={2}>
                      <TableCell align="right">Price</TableCell>
                    </Grid>
                    <Grid xs={2}>
                      <TableCell align="right">fghj</TableCell>
                    </Grid>
                  </Grid>
                </TableCell>
              </TableRow>
            </TableHead>
          </Table>
        </TableContainer>
        {yourCart.cartList.map((item) => (
          <CartListItem key={item._id} prop={item} />
        ))}
      </Box>
      <Box display="flex" justifyContent="right" sx={{ mt: 1, mb: 10, mr: 5 }}>
        {isLogin ? (
          <Link
            to="/shippingaddress"
            className="link"
            style={{ textDecoration: "none" }}
          >
            <Button
              color="secondary"
              variant="contained"
              style={{ width: "100%" }}
            >
              CHECKOUT (TOTAL: ${CartTotal()})
            </Button>
          </Link>
        ) : (
          <Link to="/login" className="link" style={{ textDecoration: "none" }}>
            <Button
              color="secondary"
              variant="contained"
              style={{ width: "100%" }}
            >
              CHECKOUT (TOTAL: ${CartTotal()})
            </Button>
          </Link>
        )}
      </Box>
    </div>
  );
}
