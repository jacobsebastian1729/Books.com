import React, { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import Avatar from "@mui/material/Avatar";
import { deepOrange, deepPurple } from "@mui/material/colors";
import NavBar from "../navBar/NavBar";

type UserDetail = {
  email: string;
  phone: number;
  no: string;
  street: string;
  city: string;
  country: string;
  zipcode: number;
};

export default function UserInformation() {
  const [userDetail, setUserDetail] = useState<UserDetail>({
    email: "",
    phone: 0,
    no: "",
    street: "",
    city: "",
    country: "",
    zipcode: 0,
  });
  const userId = localStorage.getItem("userId");

  //const userIdUrl = `http://localhost:8001/users/${userId}`;
  const userIdUrl = `https://books-backend-jbyp.onrender.com/users/${userId}`;

  const userToken = localStorage.getItem("userToken");
  function fetchUserDetail() {
    axios
      .get(userIdUrl, { headers: { Authorization: `Bearer ${userToken}` } })
      .then((res) => res.data)
      .then((data) => setUserDetail(data));
  }

  useEffect(() => {
    fetchUserDetail();
  }, []);

  return (
    <div style={{ backgroundColor: "violet" }}>
      <NavBar />
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={1} p={2}>
          <Grid
            item
            xs={9}
            style={{ color: "black", backgroundColor: "white" }}
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Stack m={2}>
              <Avatar
                sx={{
                  bgcolor: deepOrange[500],
                  width: 256,
                  height: 256,
                  fontSize: "10rem",
                }}
              >
                {userDetail.email.charAt(0)}
              </Avatar>
            </Stack>

            <Stack spacing={2} mr={2} direction="column">
              <Link
                to="/updatepassword"
                className="link"
                style={{ textDecoration: "none" }}
              >
                <Button variant="contained">CHANGE PASSWORD</Button>
              </Link>

              <Link
                to="/updateuserinfo"
                className="link"
                style={{ textDecoration: "none" }}
              >
                <Button
                  sx={{ paddingLeft: 3, paddingRight: 2 }}
                  variant="contained"
                >
                  UPDATE USER INFO
                </Button>
              </Link>

              <Link
                to="/mycart"
                className="link"
                style={{ textDecoration: "none" }}
              >
                <Button
                  sx={{ paddingLeft: 7.5, paddingRight: 7 }}
                  variant="contained"
                >
                  MY CART
                </Button>
              </Link>

              <Link
                to="/myorders"
                className="link"
                style={{ textDecoration: "none" }}
              >
                <Button
                  sx={{ paddingLeft: 8, paddingRight: 7 }}
                  variant="contained"
                >
                  ORDERS
                </Button>
              </Link>
            </Stack>
          </Grid>
        </Grid>
      </Box>

      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={1} p={2}>
          <Grid
            item
            xs={3}
            style={{ color: "black", backgroundColor: "white" }}
          >
            <Typography
              variant="h6"
              color="inherit"
              component="div"
              fontWeight={500}
              sx={{ textDecoration: "underline" }}
            >
              BASIC INFORMATION
            </Typography>
            <Typography
              variant="body1"
              color="inherit"
              component="div"
              fontWeight={500}
              mt={1}
            >
              name: {userDetail.email}
            </Typography>
          </Grid>
          <Grid
            item
            xs={3}
            style={{ color: "black", backgroundColor: "white" }}
          >
            <Typography
              variant="h6"
              color="inherit"
              component="div"
              fontWeight={500}
              sx={{ textDecoration: "underline" }}
            >
              CONTACT INFORMATION
            </Typography>
            <Typography
              variant="body1"
              color="inherit"
              component="div"
              fontWeight={500}
              mt={1}
            >
              email: {userDetail.email}
              <br />
              phone: {userDetail.phone}
            </Typography>
          </Grid>
          <Grid
            item
            xs={3}
            style={{ color: "black", backgroundColor: "white" }}
          >
            <Typography
              variant="h6"
              color="inherit"
              component="div"
              fontWeight={500}
              sx={{ textDecoration: "underline" }}
            >
              ADDRESS
            </Typography>
            <Typography
              variant="body1"
              color="inherit"
              component="div"
              fontWeight={500}
              mt={1}
              mb={2}
            >
              {userDetail.no}
              <br />
              {userDetail.street}
              <br />
              {userDetail.city} <br />
              {userDetail.country}
              <br />
              {userDetail.zipcode}
              <br />
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}
