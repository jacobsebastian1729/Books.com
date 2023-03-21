import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Grid from "@mui/material/Grid";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Button, TextField } from "@mui/material";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import axios from "axios";

export default function UpdateUserInfo(){

    const navigate = useNavigate();

    type InitialValues = {
        phone: number;
        no: string;
        street: string; 
        city: string;  
        country: string;  
        zipcode: number;
    }

    const initialValues: InitialValues = {
        phone: 0,
        no: '',
        street: '',
        city: '',
        country: '',
        zipcode: 0,
    }

    const FormSchema = Yup.object().shape({
        phone: Yup.number()
        .required('Required'),
        no: Yup.string()
        .required("Required"),
        street: Yup.string()
        .required('Required'),
        city: Yup.string()
        .required("Required"),
        country: Yup.string()
        .required('Required'),
        zipcode: Yup.number()
        .required('Required'),
      });

      const userId = localStorage.getItem("userId")
      const userIdUrl = `http://localhost:8001/users/${userId}`
      const doSomething = (value: InitialValues) => {
        console.log(value,'value')
        axios
            .put(userIdUrl, value)
            .then((res) => {
                
                if(res.data.status){
                    navigate("/userinfo");
                  }
                  
            })
            .catch((error) => console.error(error))
      }

      return (
        <div style={{backgroundColor: 'violet'}}>
          <Box sx={{ flexGrow: 1 }} ml={40}>
        <Grid container spacing={1} p={2}>
          <Grid
            item
            xs={9}
            style={{ color: "black", backgroundColor: 'white' }}
          >
            <Typography variant="h5" color="inherit" component="div" fontWeight={500}>
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
                  <Typography variant="body1" sx={{ fontWeight: 500,mb: 1 }}>
      Phone
            </Typography>
                    <TextField  name="phone" onChange={handleChange} sx={{width: .9}}/>
                    {errors.phone && touched.phone ? (
                      <div className="error-message" style={{ color: "red" }}>
                        {" "}
                        {errors.phone}
                      </div>
                    ) : null}
                  </div>
    
                  <div className="form-field">
                  <Typography variant="body1" sx={{ fontWeight: 500,mb: 1, mt: 3 }}>
      House No.
            </Typography>
                    <TextField
                      label=""
                      name="no"
                      type="no"
                      onChange={handleChange}
                      sx={{width: .9}}
                    />
                    {errors.no && touched.no ? (
                      <div className="error-message" style={{ color: "red" }}>
                        {" "}
                        {errors.no}
                      </div>
                    ) : null}
                  </div>
    
                  <div className="form-field">
                  <Typography variant="body1" sx={{ fontWeight: 500,mb: 1, mt: 3 }}>
                  Street
            </Typography>
                    <TextField
                      label=""
                      name="street"
                      type="street"
                      onChange={handleChange}
                      sx={{width: .9}}
                    />
                    {errors.street && touched.street ? (
                      <div className="error-message" style={{ color: "red" }}>
                        {" "}
                        {errors.street}
                      </div>
                    ) : null}
                  </div>

                  <div className="form-field">
                  <Typography variant="body1" sx={{ fontWeight: 500,mb: 1, mt: 3 }}>
                  City
            </Typography>
                    <TextField
                      label=""
                      name="city"
                      type="city"
                      onChange={handleChange}
                      sx={{width: .9}}
                    />
                    {errors.city && touched.city ? (
                      <div className="error-message" style={{ color: "red" }}>
                        {" "}
                        {errors.city}
                      </div>
                    ) : null}
                  </div>

                  <div className="form-field">
                  <Typography variant="body1" sx={{ fontWeight: 500,mb: 1, mt: 3 }}>
                  Country
            </Typography>
                    <TextField
                      label=""
                      name="country"
                      type="country"
                      onChange={handleChange}
                      sx={{width: .9}}
                    />
                    {errors.country && touched.country ? (
                      <div className="error-message" style={{ color: "red" }}>
                        {" "}
                        {errors.country}
                      </div>
                    ) : null}
                  </div>

                  <div className="form-field">
                  <Typography variant="body1" sx={{ fontWeight: 500,mb: 1, mt: 3 }}>
                  Zipcode
            </Typography>
                    <TextField
                      label=""
                      name="zipcode"
                      type="zipcode"
                      onChange={handleChange}
                      sx={{width: .9}}
                    />
                    {errors.zipcode && touched.zipcode ? (
                      <div className="error-message" style={{ color: "red" }}>
                        {" "}
                        {errors.zipcode}
                      </div>
                    ) : null}
                  </div>

                  <div className="submit">
                  <Grid sx={{backgroundColor: 'white'}} mb={2} mt={2} mr = {2} display = 'flex' justifyContent={'flex-end'}>
                  <Button type="submit" variant="contained" color="secondary" sx = {{borderRadius: 5, pl: 3, pr: 3, pt:1, fontWeight: '500'}}>UPDATE</Button>
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