import React from 'react'
import banner from './../assets/backDesign.svg'
import './../styles/home.scss'
import { Box, Typography } from '@mui/material'

function Home() {
    return (
        <div className='banner' id="home"
            style={{
                backgroundImage: `url(${banner})`,
                backgroundSize: 'cover',
            }}>
            <Box className="banner-content">
                <Typography variant="h3" color='white'>Connnecting People and Technology</Typography>
                <Box>
                    <Typography variant="h6">Delivering IT solutions that enable you to work smarter</Typography>
                </Box>
                <Typography variant="body2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.</Typography>
            </Box>
        </div>
    )
}

export default Home