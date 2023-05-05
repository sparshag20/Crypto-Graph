import { Link, Typography } from '@mui/material'
import { fontFamily, textAlign } from '@mui/system'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Trending } from '../config/api'
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css';
import { StockState } from '../StocksContext'
const Carousel = () => {
  const cStyles={
    carousel:{
      height:"50%",
      display:"flex",
      align:"center",
      marginTop:"65px"
    }
  }
  const {currency}=StockState();
  const [trending,setTrending]=useState([]);
  const fetchTrending=async()=>{
    const {data}= await axios.get(Trending(currency));
    setTrending(data.coins)
  }
  useEffect(()=>{
    fetchTrending();
  })
  const responsive={
    0:{
      items:2
    },
    512:{
      items:4
    }
  }
  const item=trending.map((coin)=>{
    return(
      <div>
        <Link style={cStyles.carousel}><img src={coin.item.small} alt={coin.name} height="80"></img></Link>
      </div>
    )
  })
  return (
    <div>
    <Typography style={{
      fontSize:"30px",
      fontWeight:"bold",
      fontFamily:"Montserrat",
      textAlign:"center",
      marginTop:"55px"
    }}>
      Trending Coins Of Last 24 Hrs
    </Typography>
    <AliceCarousel
    mouseTracking
    infinite
    autoPlayInterval={1000}
    animationDuration={1500}
    disableButtonsControls
    responsive={responsive}
    autoPlay
    items={item}
    />
    </div>
  )
}

export default Carousel