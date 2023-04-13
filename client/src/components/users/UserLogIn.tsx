import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

import { Formik, Form } from "formik";
import * as Yup from "yup";
import axios from "axios";

import { Button, Checkbox, TextField } from "@mui/material";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export default function UserLogIn() {
  const navigate = useNavigate();

  type InitialValues = {
    email: string;
    password: string;
  };

  const initialValues: InitialValues = {
    email: "",
    password: "",
  };

  const FormSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Required"),

    password: Yup.string().required("Required"),
  });

  //const loginUrl = "http://localhost:8001/users/login";
  const loginUrl = "https://books-backend-jbyp.onrender.com/users/login";

  const [loginResponse, setLoginResponse] = useState<string>("");
  const doSomething = (value: InitialValues) => {
    axios
      .post(loginUrl, value)
      .then((res) => {
        console.log(res.data, "loginresponse");
        if (res.data.status) {
          const userId = res.data.message;
          localStorage.setItem("userId", userId);
          navigate("/userinfo");
        } else {
          setLoginResponse(res.data.message);
        }
      })
      .catch((error) => console.error(error));
  };

  return (
    <div style={{ backgroundColor: "violet" }}>
      <Box
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography variant="h4" sx={{ fontWeight: 500, mt: 10 }}>
          Login as Existing Customer
        </Typography>
        <Grid
          container
          p={1}
          sx={{
            display: "flex",

            justifyContent: "center",
          }}
        >
          <Grid item xs={4} sx={{ backgroundColor: "white", p: 3 }}>
            <Formik
              initialValues={initialValues}
              validationSchema={FormSchema}
              onSubmit={doSomething}
            >
              {({ errors, touched, handleChange }) => {
                return (
                  <Form style={{ background: "white" }}>
                    <div className="form-field">
                      <Typography
                        variant="body1"
                        sx={{ fontWeight: 500, mb: 1 }}
                      >
                        Email
                      </Typography>
                      <TextField
                        name="email"
                        onChange={handleChange}
                        sx={{ width: 1 }}
                      />
                      {errors.email && touched.email ? (
                        <div className="error-message" style={{ color: "red" }}>
                          {" "}
                          {errors.email}
                        </div>
                      ) : null}
                    </div>

                    <div className="form-field">
                      <Typography
                        variant="body1"
                        sx={{ fontWeight: 500, mb: 1, mt: 3 }}
                      >
                        Password
                      </Typography>
                      <TextField
                        name="password"
                        type="password"
                        onChange={handleChange}
                        sx={{ width: 1 }}
                      />
                      {errors.password && touched.password ? (
                        <div className="error-message" style={{ color: "red" }}>
                          {" "}
                          {errors.password}
                        </div>
                      ) : null}
                    </div>
                    <Typography
                      variant="body1"
                      sx={{ fontWeight: 500, mb: 1, mt: 3 }}
                    >
                      By creating an account, you agree to Our{" "}
                      <span style={{ color: "indigo" }}>Privacy Notice</span>{" "}
                      and <span style={{ color: "indigo" }}>Terms of Use</span>.
                    </Typography>

                    <div className="submit">
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
                          mb: 1,
                          mt: 2,
                        }}
                      >
                        LOGIN
                      </Button>
                    </div>

                    <Typography
                      variant="body1"
                      sx={{ fontWeight: 500, mb: 1, mt: 2 }}
                    >
                      Or{" "}
                      <Link
                        to="/signup"
                        className="link"
                        style={{ textDecoration: "none" }}
                      >
                        <span style={{ color: "indigo" }}>
                          Create a new account
                        </span>
                      </Link>{" "}
                      |{" "}
                      <span style={{ color: "indigo" }}>Forgot Password?</span>.
                    </Typography>
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
