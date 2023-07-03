import { Grid } from '@mui/material'
import React from 'react';
import logo from './../assets/logo.svg';
import { Link } from 'react-scroll';
import './../styles/layout.scss';


function Footer() {
  return (
    <div id='footer'>
    <Grid container
      justifyContent="center">
      <Grid item xs={12} md={12}>
        <img className='mx-auto d-block mb-3'
          style={{
            width: "7%",
          }} src={logo} alt="" />
      </Grid>
      <Grid item xs={12} md={12}>
        <Grid container
          direction="row"
          justifyContent="space-around"
          alignItems="center"
          color={"black"}
          mb={5}>
          <Grid item > <Link to="home" spy={true} smooth={true}>HOME</Link></Grid>
          <Grid item ><Link to="about" spy={true} smooth={true}>ABOUT US</Link></Grid>
          <Grid item ><Link to="service" spy={true} smooth={true}>OUR SERVICES</Link></Grid>
        </Grid>
      </Grid>
    </Grid>
    </div>
  )
}

export default Footer