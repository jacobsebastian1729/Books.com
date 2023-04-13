import React, { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import Stack from "@mui/material/Stack";
import { Button, Checkbox, TextField } from "@mui/material";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import { useNavigate } from "react-router-dom";

import { Formik, Form } from "formik";
import * as Yup from "yup";

type UserDetail = {
  email: string;
  phone: number;
  no: string;
  street: string;
  city: string;
  country: string;
  zipcode: number;
};

export default function ShippingAddress() {
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
  const userToken = localStorage.getItem("userToken");

  //const userIdUrl = `http://localhost:8001/users/${userId}`;
  const userIdUrl = `https://books-backend-jbyp.onrender.com/users/${userId}`;

  function fetchUserDetail() {
    axios
      .get(userIdUrl, { headers: { Authorization: `Bearer ${userToken}` } })
      .then((res) => res.data)
      .then((data) => setUserDetail(data));
  }

  useEffect(() => {
    fetchUserDetail();
  }, []);

  //////////////////////////
  const navigate = useNavigate();

  type InitialValues = {
    phone: number;
    no: string;
    street: string;
    city: string;
    country: string;
    zipcode: number;
  };

  const initialValues: InitialValues = {
    phone: 0,
    no: "",
    street: "",
    city: "",
    country: "",
    zipcode: 0,
  };

  const FormSchema = Yup.object().shape({
    phone: Yup.number().required("Required"),
    no: Yup.string().required("Required"),
    street: Yup.string().required("Required"),
    city: Yup.string().required("Required"),
    country: Yup.string().required("Required"),
    zipcode: Yup.number().required("Required"),
  });

  //const userId = localStorage.getItem("userId")
  //const userIdUrl = `http://localhost:8001/users/${userId}`
  const doSomething = (value: InitialValues) => {
    console.log(value, "value");
    axios
      .put(userIdUrl, value, {
        headers: { Authorization: `Bearer ${userToken}` },
      })
      .then((res) => {
        if (res.data.status) {
          //navigate("/shippingaddress");
          window.location.reload();
        }
      })
      .catch((error) => console.error(error));
  };

  /////////////////////////

  return (
    <div style={{ backgroundColor: "violet" }}>
      Shipping
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
            <Grid
              sx={{ backgroundColor: "white" }}
              mb={2}
              mt={2}
              mr={2}
              display="flex"
              justifyContent={"flex-end"}
            >
              <Link
                to="/payandorde"
                className="link"
                style={{ textDecoration: "none" }}
              >
                <Button
                  variant="contained"
                  color="secondary"
                  sx={{
                    borderRadius: 5,
                    pl: 3,
                    pr: 3,
                    pt: 1,
                    fontWeight: "500",
                  }}
                >
                  CONFIRM
                </Button>
              </Link>
            </Grid>
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={1} p={2}>
          <Grid
            item
            xs={9}
            style={{ color: "black", backgroundColor: "white" }}
          >
            <Typography
              variant="h5"
              color="inherit"
              component="div"
              fontWeight={500}
            >
              UPDATE USER INFO
            </Typography>
            <Formik
              initialValues={initialValues}
              validationSchema={FormSchema}
              onSubmit={doSomething}
            >
              {({ errors, touched, handleChange }) => {
                return (
                  <Form>
                    <div className="form-field">
                      <Typography
                        variant="body1"
                        sx={{ fontWeight: 500, mb: 1 }}
                      >
                        Phone
                      </Typography>
                      <TextField
                        name="phone"
                        onChange={handleChange}
                        sx={{ width: 0.9 }}
                      />
                      {errors.phone && touched.phone ? (
                        <div className="error-message" style={{ color: "red" }}>
                          {" "}
                          {errors.phone}
                        </div>
                      ) : null}
                    </div>

                    <div className="form-field">
                      <Typography
                        variant="body1"
                        sx={{ fontWeight: 500, mb: 1, mt: 3 }}
                      >
                        House No.
                      </Typography>
                      <TextField
                        label=""
                        name="no"
                        type="no"
                        onChange={handleChange}
                        sx={{ width: 0.9 }}
                      />
                      {errors.no && touched.no ? (
                        <div className="error-message" style={{ color: "red" }}>
                          {" "}
                          {errors.no}
                        </div>
                      ) : null}
                    </div>

                    <div className="form-field">
                      <Typography
                        variant="body1"
                        sx={{ fontWeight: 500, mb: 1, mt: 3 }}
                      >
                        Street
                      </Typography>
                      <TextField
                        label=""
                        name="street"
                        type="street"
                        onChange={handleChange}
                        sx={{ width: 0.9 }}
                      />
                      {errors.street && touched.street ? (
                        <div className="error-message" style={{ color: "red" }}>
                          {" "}
                          {errors.street}
                        </div>
                      ) : null}
                    </div>

                    <div className="form-field">
                      <Typography
                        variant="body1"
                        sx={{ fontWeight: 500, mb: 1, mt: 3 }}
                      >
                        City
                      </Typography>
                      <TextField
                        label=""
                        name="city"
                        type="city"
                        onChange={handleChange}
                        sx={{ width: 0.9 }}
                      />
                      {errors.city && touched.city ? (
                        <div className="error-message" style={{ color: "red" }}>
                          {" "}
                          {errors.city}
                        </div>
                      ) : null}
                    </div>

                    <div className="form-field">
                      <Typography
                        variant="body1"
                        sx={{ fontWeight: 500, mb: 1, mt: 3 }}
                      >
                        Country
                      </Typography>
                      <TextField
                        label=""
                        name="country"
                        type="country"
                        onChange={handleChange}
                        sx={{ width: 0.9 }}
                      />
                      {errors.country && touched.country ? (
                        <div className="error-message" style={{ color: "red" }}>
                          {" "}
                          {errors.country}
                        </div>
                      ) : null}
                    </div>

                    <div className="form-field">
                      <Typography
                        variant="body1"
                        sx={{ fontWeight: 500, mb: 1, mt: 3 }}
                      >
                        Zipcode
                      </Typography>
                      <TextField
                        label=""
                        name="zipcode"
                        type="zipcode"
                        onChange={handleChange}
                        sx={{ width: 0.9 }}
                      />
                      {errors.zipcode && touched.zipcode ? (
                        <div className="error-message" style={{ color: "red" }}>
                          {" "}
                          {errors.zipcode}
                        </div>
                      ) : null}
                    </div>

                    <div className="submit">
                      <Grid
                        sx={{ backgroundColor: "white" }}
                        mb={2}
                        mt={2}
                        mr={2}
                        display="flex"
                        justifyContent={"flex-end"}
                      >
                        <Button
                          type="submit"
                          variant="contained"
                          color="secondary"
                          sx={{
                            borderRadius: 5,
                            pl: 3,
                            pr: 3,
                            pt: 1,
                            fontWeight: "500",
                          }}
                        >
                          UPDATE
                        </Button>
                      </Grid>
                    </div>
                  </Form>
                );
              }}
            </Formik>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}
