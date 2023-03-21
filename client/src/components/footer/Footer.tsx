import React from 'react'

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

export default function Footer(){
    return <div>
        <Box sx={{ flexGrow: 1}}>
        <Grid container spacing={2} mt={2}>
        <Grid
            item
            xs={4}
            style={{ color: "white", backgroundColor: "indigo" }}
          >
            <Grid sx={{backgroundColor: 'indigo' }} display="flex" justifyContent="center" alignItems="center">
            <img width={300} src="https://rails-assets-us.bookshop.org/assets/ClimateNeutralLabelCertifiedHorizontalWhiteOutline-17ebe1222195c2028711dcd4eb05d8ef1d83ad6f315c9f4445fa69fc570bfff2.png"/>
            </Grid>
          </Grid>

<Grid
            item
            xs={4}
            style={{ color: "white", backgroundColor: "indigo" }}
            display="flex" justifyContent="center" alignItems="center"
            flexDirection= "column"
          >
            <Typography variant="body1" sx={{ fontWeight: 500 }} mt = {2} mb ={1}>
                About
            </Typography>

            <Typography variant="body1" sx={{ fontWeight: 500 }} mt = {1} mb ={1}>
                Support/ Help
            </Typography>

            <Typography variant="body1" sx={{ fontWeight: 500 }} mt = {1} mb ={1}>
                Become an Affiliate
            </Typography>

            <Typography variant="body1" sx={{ fontWeight: 500 }} mt = {1} mb ={1}>
                Gift Cards
            </Typography>

            <Typography variant="body1" sx={{ fontWeight: 500 }} mt = {1} mb ={1}>
                Careers - We're hiring!
            </Typography>

            <Typography variant="body1" sx={{ fontWeight: 500 }} mt = {1} mb ={1}>
                Bookshop For Authors
            </Typography>

            <Typography variant="body1" sx={{ fontWeight: 500 }} mt = {1} mb ={1}>
                Bookshop For Bookstores
            </Typography>

            <Typography variant="body1" sx={{ fontWeight: 500 }} mt = {1} mb ={1}>
                Contact
            </Typography>

            <Typography variant="body1" sx={{ fontWeight: 500 }} mt = {1} mb ={2}>
                Return and Refund Policy
            </Typography>
            </Grid> 
        


        <Grid
            item
            xs={4}
            style={{ color: "white", backgroundColor: "indigo" }}
          >
            <Typography variant="body1" sx={{ fontWeight: 500, backgroundColor: 'indigo' }} mt = {1} mb ={0} mr={7} display="flex" justifyContent="flex-end" alignItems="center">
                Follow us 
                <img src="https://rails-assets-us.bookshop.org/assets/icon-twitter-5acbd084f784885a73c99242d5d3d12ce4bc9ea1063bf462b03ab0fa5e6df67e.svg"/>
                <img src="https://rails-assets-us.bookshop.org/assets/icon-facebook-573255ba1a893bcc1b0e26d5bb3d26e29950e72079360d7b58e6ca1aa628757c.svg"/>
                <img src="https://rails-assets-us.bookshop.org/assets/icon-instagram-015ea6b8500fb243a606a5117772f949603f9d035d5ab677b7d24a6f379e3cbe.svg"/>
            </Typography>
            <Typography variant="body1" sx={{ fontWeight: 500, backgroundColor: 'indigo' }} mt = {0} mb ={0} mr={10} display="flex" justifyContent="flex-end" alignItems="center">
                Payments Accepted
                
            </Typography>
            <Grid sx={{backgroundColor: 'indigo' }} mt = {0} mb ={0} mr={7} display="flex" justifyContent="flex-end" alignItems="center">
            <img height={30} src="https://rails-assets-us.bookshop.org/assets/payment_methods-a0a4f59e2dde1469a5f84fa9a6462171db755cdb0dcdf8ce8bd2dc8ecb6fa03f.png"/>
            </Grid>
            <Grid sx={{backgroundColor: 'indigo' }} mt = {0} mb ={0} mr={7} display="flex" justifyContent="flex-end" alignItems="center">
            <img src="https://rails-assets-us.bookshop.org/assets/bcorp_logo-dbd633d3bd3540edec0d2271427738792bd79e1aae13585deec0b658d29ddc08.png"/>
            </Grid>
            </Grid> 

        </Grid>
        <Grid container spacing={1}
        style={{ color: "white", backgroundColor: "indigo", padding: 20 }}
        display="flex" justifyContent="space-around" alignItems="center">
        
        <Grid
            item
            xs={6}
           style={{backgroundColor: "indigo" }}
           display="flex" justifyContent="space-around" alignItems="center"
          >
            <Typography variant="body1">
                © 2023 All Rights Reserved

            </Typography>
            <Typography variant="body1">
                Terms of Use

            </Typography>
            <Typography variant="body1">
                Privacy Notice

            </Typography>
          </Grid>
        

        </Grid>
        </Box>
    </div>
}