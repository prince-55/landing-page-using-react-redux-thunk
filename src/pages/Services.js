import { Box, Button, Grid, Typography } from '@mui/material'
import React from 'react';
import './../styles/service.scss'
import grp from './../assets/group84.png';
import grp85 from './../assets/group85.png';

function Services() {
  return (
    <div id="service" className='my-5 pt-5'>
      <Box className="mx-auto" sx={{width:"85%"}}>
        <h4>Our Services</h4>
        <Typography>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </Typography>
      </Box>
      <Grid container
        direction="row"
        justifyContent="space-evenly"
        alignItems="center">
        <Grid item xs={12} md={6} p={2}>
          <img src={grp} alt="img-alt" className='mx-auto'/>
        </Grid>
        <Grid item xs={12} md={6} px-md={5} px={2} className='service-text'>
          <h4>SERVICE1</h4>
          <Typography sx={{ width: "75%" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</Typography>
          <Button className='btn-more my-3 px-3'>Read More</Button>
        </Grid>
        <Grid item xs={12} md={6} pl={10} className='service-text'>
          <h4>SERVICE2</h4>
          <Typography sx={{ width: "75%" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</Typography>
          <Button className='btn-more my-3 px-3'>Read More</Button>
        </Grid>
        <Grid item xs={12} md={6} p={2}>
          <img src={grp85} alt="img-alt" />
        </Grid>
      </Grid>
    </div>
  )
}

export default Services