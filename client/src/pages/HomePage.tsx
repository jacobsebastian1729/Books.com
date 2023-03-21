import React from "react";
import { Link } from 'react-router-dom';

import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

import './HomePage.css'
import Navbar from "../components/navBar/NavBar";
import Footer from "../components/footer/Footer";
import SlidesBestSeller from "../components/homepage/SlidesBestSeller";
import SlidesNewRelease from "../components/homepage/SlidesNewRelease";

export default function HomePage() {
  return <div>
    <Navbar/>

<div className="carousel-container">
<div className="carousel-slide">
<img className="carousel-item" src="https://images-production.bookshop.org/spree/promo_banner_slides/desktop_images/250/original/22_358_2048x600_1_1100k.jpg?1678214957"/>
<img className="carousel-item" src="https://images-production.bookshop.org/spree/promo_banner_slides/desktop_images/248/original/GodOfEndings_Bookshop_2048x600.jpg?1678215033"/>
</div>
</div>


    <SlidesBestSeller/>
    <SlidesNewRelease/>


    <Footer/>
    
  </div>;
}
