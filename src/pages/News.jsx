import React, { useEffect, useState } from 'react'
import { NewsList } from '../config/api'
import axios from "axios";
import { MenuItem, Select, Typography } from '@mui/material';
import NewsCard from '../NewsCard/NewsCard';
const News = () => {
    const [news,setNews]=useState([]);
    const fetchNews=async ()=>{
        const {data}=await axios.get(NewsList());
        setNews(data.articles);
    }
    
    useEffect(()=>{
        fetchNews();
    },[])
  return (
    <div>
    {news.map((newsItem)=>{
      return(
      <NewsCard newsItem={newsItem} key={newsItem.title} />
      );
    })}
    </div>
  )
}

export default News
