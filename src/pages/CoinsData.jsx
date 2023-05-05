import { MenuItem, Pagination, Select, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import { Container } from '@mui/system';
import axios from 'axios';
import React, { useEffect } from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { coinsList } from '../config/api';
export function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
const CoinsData = () => {
  const navigate=useNavigate();
    const [coins, setCoins] = useState([]);
    const [loading, setLoading] = useState(true);
    const [page,setPage]=useState(1);
    const fetchCoins=async()=>{
        const {data}=await axios.get(coinsList());
        setCoins(data);
    }
    useEffect(()=>{
        fetchCoins();
    })
  return(
    <Container style={{textAlign:"center"}}>
    <TableContainer>
    <Table>
    <TableHead style={{backgroundColor:"#309ef9"}} >
        <TableRow>
          {["Coin","Price","Market Cap","Change"].map((value)=>{
            return(
            <TableCell style={{color:"black"}} key={value}>{value}</TableCell>
            )
          })}
        </TableRow>
      </TableHead>
      <TableBody>
          {coins.slice((page-1)*10,(page-1)*10 + 10).map((coin)=>{
            const profit = coin.price_change_percentage_24h > 0;
            return(
              <TableRow onClick={()=>navigate(`/coins/${coin.id}`)} key={coin.name}>
            <TableCell component='th' scope='row' style={{display:"flex",flexDirection:'column',gap:15}}>
            <img src={coin.image} height="50" width="50" style={{marginBottom:'10px'}}></img>
            <div>
              <span>{coin.name}</span>
            </div>
            </TableCell>
            <TableCell>${numberWithCommas(coin.current_price)}</TableCell>
            <TableCell>{numberWithCommas(coin.market_cap)}</TableCell>
            <TableCell style={{color:profit>0?"rgb(14, 203, 129)" : "red",fontWeight:"bold"}}>{profit&&'+'}{coin.price_change_percentage_24h.toFixed(2)}%</TableCell>
            </TableRow>
            )
          })}
      </TableBody>
    </Table>
    </TableContainer>
    <Pagination count={coins.length/10} style={{
      display:"flex",
      justifyContent:"center"
    }}
    onChange={(_,value)=>{
      setPage(value);
    }}>
    </Pagination>
    </Container>
  )
}

export default CoinsData