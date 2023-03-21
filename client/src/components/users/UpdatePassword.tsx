import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom';

import Grid from "@mui/material/Grid";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Button, TextField } from '@mui/material';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

export default function UpdatePassword(){

    const navigate = useNavigate();

    type InitialValues = {
        newPassword: string;
        confirm_password :string;
    }

    const initialValues: InitialValues = {
        newPassword: '',
        confirm_password: '',
    }

    const FormSchema = Yup.object().shape({
        
        newPassword: Yup.string()
        .min(6, "it should contain atleast 6 charachters")
        .max(20, "maximum 20 characters allowded")
        .matches(/^(?=.*[a-z])/, "must contains lowercase characters")
        .matches(/^(?=.*[1-9])/, "must contains numbers")
        .required("required"),


        confirm_password: Yup.string()
            .oneOf([Yup.ref('newPassword')],
            'Password must match'
            )

    })

    const userId = localStorage.getItem("userId")
    const changePasswordUrl = `http://localhost:8001/users/password/${userId}`
    const [response, setResponse] = useState<string>("")
    const doSomething = (value: InitialValues) => {
        console.log(value,'password')
        axios
            .post(changePasswordUrl, value)
            .then((res) => {
                console.log(res.data.message, 'res')
                setResponse(res.data.message)
            })
            .catch((error) => console.log(error))
        
    }


    return <div style={{backgroundColor: 'violet'}}>
        <Box sx={{ flexGrow: 1 }} ml={60}>
        <Grid container spacing={1} p={2}>
          <Grid
            item
            xs={6}
            style={{ color: "black", backgroundColor: 'white' }}
          >
            <Typography variant="h5" color="inherit" component="div" fontWeight={500}>
            UPDATE USER INFO
          </Typography>
        <Formik
            initialValues={initialValues}
            validationSchema = {FormSchema}
            onSubmit = {doSomething}
        >
            {({ errors, touched, handleChange }) => {
                return (
                    <Form>

                <div className="form-field">

<Typography variant="body1" sx={{ fontWeight: 500,mb: 1 }}>
      New Password
            </Typography>

                <TextField
                  label=""
                  name="newPassword"
                  type="password"
                  onChange={handleChange}
                  sx={{width: .9}}
                />
                {errors.newPassword && touched.newPassword ? (
                  <div className="error-message" style={{ color: "red" }}>
                    {errors.newPassword}
                  </div>
                ) : null}
              </div>

              <div className="form-field-confirm-password">
                <Typography variant="body1" sx={{ fontWeight: 500,mb: 1, mt: 3 }}>
      Confirm Password
            </Typography>
                <TextField
                  label=""
                  name="confirm_password"
                  type="password"
                  onChange={handleChange}
                  sx={{width: .9}}
                />
                {errors.confirm_password && touched.confirm_password ? (
                  <div className="error-message" style={{ color: "red" }}>
                    {errors.confirm_password}
                  </div>
                ) : null}
              </div>


              <div className="submit">
                  <Grid sx={{backgroundColor: 'white'}} mb={2} mt={2} mr = {2} display = 'flex' justifyContent={'flex-end'}>
                  <Button type="submit" variant="contained" color="secondary" sx = {{borderRadius: 5, pl: 3, pr: 3, pt:1, fontWeight: '500'}}>UPDATE</Button>
                  </Grid>
                  </div>
                    </Form>
                )
            }}

            

        </Formik>
        <p style={{color: "green"}}>{response}</p>
        
       </Grid>
          </Grid>
          </Box>
    </div>
}