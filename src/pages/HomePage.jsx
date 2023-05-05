import React from 'react'
import Banner from '../components/Banner'
import News from './News';
import "../App.css"
import Carousel from '../components/Carousel';
import Coin from './Coin';
const HomePage = () => {
  return (
   <div>
   <Banner />
   <Carousel />
   </div>
  );
}

export default HomePage