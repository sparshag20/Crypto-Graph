import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useState } from 'react';
import axios from 'axios';
import { SingleCoin } from '../config/api';
import { createTheme, Typography } from '@mui/material';
import { numberWithCommas } from './CoinsData';
import CoinChart from '../components/CoinChart';
const Coin = () => {
  const  {id}=useParams();
  const [coin, setCoin] = useState();
  const theme=createTheme();
  const fetchCoin=async()=>{
    const {data}=await axios.get(SingleCoin(id));
    console.log(data);
    setCoin(data);
  }
  useEffect=(()=>{
    fetchCoin();
  })
  const styles={
    container: {
      display: "flex",
    },
    sidebar: {
      width: "30%",

      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      marginTop: 25,
      borderRight: "2px solid grey",
    },
    heading: {
      fontWeight: "bold",
      marginBottom: 20,
      fontFamily: "Montserrat",
    },
    description: {
      width: "100%",
      fontFamily: "Montserrat",
      padding: 25,
      paddingBottom: 15,
      paddingTop: 0,
      textAlign: "justify",
    },
    marketData: {
      alignSelf: "start",
      padding: 25,
      paddingTop: 10,
      width: "100%",
    }
  };
  return (
    <div style={styles.container}>
    <div style={styles.sidebar}>
    <img src={coin?.image.large} alt={coin?.name} height="200" style={{marginBottom:"20"}}></img>
    <Typography style={styles.heading}>{coin?.name}</Typography>
    <Typography style={styles.description}>{coin?.description.en.split(".")[0]}</Typography>
    <div style={styles.marketData}>
    <span style={{display:"flex"}}>
      <Typography variant='h5' style={styles.heading}>
        Rank:
      </Typography>
      &nbsp;&nbsp; 
      <Typography variant='h5'>{coin?.market_cap_rank}</Typography>
    </span>
    <span style={{display:"flex"}}>
      <Typography variant='h5' style={styles.heading}>
        Current Price:
      </Typography>
      &nbsp;&nbsp; 
      <Typography variant='h5'>{coin?.market_data.current_price["usd"]}</Typography>
    </span>
    <span style={{display:"flex"}}>
      <Typography variant='h5' style={styles.heading}>
        Rank:
      </Typography>
      &nbsp;&nbsp; 
      <Typography variant='h5'>{coin?.market_cap_rank}</Typography>
    </span>
    </div>
    </div>
    <CoinChart coin={coin?.id}></CoinChart>
    </div>
  )
}

export default Coin