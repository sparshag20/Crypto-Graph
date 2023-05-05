import React from 'react'
import {AppBar, createTheme, makeStyles, MenuItem, Select, Toolbar, Typography} from '@mui/material'
import { Container, ThemeProvider } from '@mui/system';
import { Link, useNavigate } from "react-router-dom"
import { StockState } from '../StocksContext';
import '../App.css'
const Header = () => {
  const navigate=useNavigate();
  const darkTheme=createTheme({
    palette:{
      mode: 'dark',
    }
  })
  const styles={
    title:{
      color:"gold",
      fontFamily:"Montserrat",
      fontWeight:"bold",
      cursor:"pointer"
    },
    select:{
      width:100,
      height:40,
      marginLeft:"850px",
    }
  }
  const {currency,setCurrency}=StockState();
  return (
    <ThemeProvider theme={darkTheme}>
    <AppBar position='static'>
      <Container>
        <Toolbar>
          <Typography style={styles.title} onClick={()=>navigate("/")} variant="h6">Stock Sensor</Typography>
          {/*<Select variant='outlined'
          style={styles.select} 
          value={currency}
          onChange={(e)=>setCurrency(e.target.value)}
          >
            <MenuItem value={"USD"}>USD</MenuItem>
            <MenuItem value={"INR"}>INR</MenuItem>
          </Select>*/}
          <a href='/coins'>Coins</a>
          <a href='/news'>News</a>
        </Toolbar>
      </Container>
    </AppBar>
    </ThemeProvider>
  );
}

export default Header