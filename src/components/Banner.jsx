import { Typography } from '@mui/material'
import { Container } from '@mui/system'
import React from 'react'
import Carousel from './Carousel'
const bannerStyle={
    banner:{
        backgroundImage:"url(./banner5.jpg)",
    },
    bannerContent:{
        height:400,
        display:"flex",
        flexDirection:"column",
        padding:25,
        justifyContent:"space-around",
    },
    heading:{
      display:"flex",
      flexDirection:"column",
      height:"40%",
      justifyContent:"center"
    }
}
const Banner  = () => {
  return (
    <div style={bannerStyle.banner}>
        <Container style={bannerStyle.bannerContent}>
        <div style={bannerStyle.heading}>
        <Typography 
        variant='h2' style={{color:"#FFF",
          marginLeft:"260px",
          fontFamily:"Montserrat",
          fontWeight:"bold",
          fontSize:'50px'
          }}
        >
          Crypto Convention
        </Typography>
        </div>
        </Container>
    </div>
  )
}

export default Banner
//IF8CT7Z3KL4OX3H8