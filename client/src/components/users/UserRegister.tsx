import React from "react";
import { useState } from "react";
import { Link } from 'react-router-dom';

import { Formik, Form } from "formik";
import * as Yup from "yup";
import axios from 'axios';


import { Button, Checkbox, TextField } from "@mui/material";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export default function UserRegistration() {
  type InitialValues = {
    email: string;
    password: string;
    confirm_password: string;
    checkbox: boolean;
  };

  const initialValues: InitialValues = {
    email: "",
    password: "",
    confirm_password: "",
    checkbox: false,
  };

  const FormSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Required"),

    password: Yup.string()
      .min(6, "it should contain atleast 6 charachters")
      .max(20, "maximum 20 characters allowded")
      .matches(/^(?=.*[a-z])/, "must contains lowercase characters")
      .matches(/^(?=.*[1-9])/, "must contains numbers")
      .required("required"),

    confirm_password: Yup.string().oneOf(
      [Yup.ref("password")],
      "Passwords must match"
    ),

    checkbox: Yup.boolean().oneOf([true], "you shoule accept the terms"),
  });



  const registerUrl = "http://localhost:8001/users/register";
  const [response, setResponse] = useState<string>("")
  const doSomething = (value: InitialValues) => {
    axios
        .post(registerUrl, value)
        .then((res) => {
            console.log(res.data.message, 'res')
            setResponse(res.data.message)
        })
        .catch((error) => console.error(error));
    
  };

  return <div style={{backgroundColor: 'violet'}}>
    <Box style={{  display: 'flex',
          flexDirection:'column',
          alignItems:"center",
          justifyContent: 'center' }}>
    <Typography variant="h4" sx={{ fontWeight: 500, mt: 10 }}>
      Create an Account
            </Typography>
    <Grid container p={1} sx={{
          display: 'flex',
          
          
          justifyContent: 'center'}}>
            
      <Grid item xs = {4} sx={{backgroundColor: 'white', p:3}}>
      <Formik
        initialValues={initialValues}
        validationSchema={FormSchema}
        onSubmit={doSomething}
      >
        {({ errors, touched, handleChange }) => {
          return (
            <Form style={{background: 'white'}}>
              <div className="form-field">
                <Typography variant="body1" sx={{ fontWeight: 500,mb: 1 }}>
      Email
            </Typography>
                <TextField  name="email" onChange={handleChange} sx={{width: 1}}/>
                {errors.email && touched.email ? (
                  <div className="error-message" style={{ color: "red" }}>{errors.email}</div>
                ) : null}
              </div>

              <div className="form-field">
                <Typography variant="body1" sx={{ fontWeight: 500,mb: 1, mt: 3 }}>
      Password
            </Typography>
                <TextField
                  
                  name="password"
                  type="password"
                  onChange={handleChange}
                  sx={{width: 1}}
                />
                {errors.password && touched.password ? (
                  <div className="error-message" style={{ color: "red" }}>
                    {errors.password}
                  </div>
                ) : null}
              </div>

              <div className="form-field-confirm-password">
                <Typography variant="body1" sx={{ fontWeight: 500,mb: 1, mt: 3 }}>
      Confirm Password
            </Typography>
                <TextField
                  
                  name="confirm_password"
                  type="password"
                  onChange={handleChange}
                  sx={{width: 1}}
                />
                {errors.confirm_password && touched.confirm_password ? (
                  <div className="error-message" style={{ color: "red" }}>
                    {errors.confirm_password}
                  </div>
                ) : null}
              </div>

              <div className="form-field">
                <Typography variant="body1" sx={{ fontWeight: 500,mb: 1, mt: 3 }}>
              <Checkbox name="checkbox" onChange={handleChange} /><span>Agree the terms</span>
            </Typography>
                {errors.checkbox && touched.checkbox ? (
                  <div className='error-message' style={{ color: "red" }}> {errors.checkbox}</div>  
                ): null}
              </div>

              <Typography variant="body1" sx={{ fontWeight: 500,mb: 1, mt: 3 }}>
              By creating an account, you agree to Our <span style={{color: 'indigo'}}>Privacy Notice</span> and <span style={{color: 'indigo'}}>Terms of Use</span>. 
            </Typography>

              <div className="submit">
                <Button type="submit" variant="contained" color="secondary" sx = {{borderRadius: 5, pl: 3, pr: 3, pt:1, fontWeight: '500' ,mb: 1, mt: 2 }}>CREATE</Button>
              </div>
              

              <Typography variant="body1" sx={{ fontWeight: 500,mb: 1, mt: 2 }}>
              Or <Link
    to= '/login'
    className="link"
    style={{ textDecoration: "none"}}
    ><span style={{color: 'indigo'}}>Login as Existing Customer</span></Link>
            </Typography>
            </Form>
          );
        }}
      </Formik>
      </Grid>
      </Grid>
    </Box>
      <p style={{color: "green"}}>{response}</p>
    </div>
}
