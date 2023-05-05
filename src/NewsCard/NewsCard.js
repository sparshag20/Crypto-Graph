import { Box } from '@mui/system';
import React from 'react'
import parse from 'range-parser'
import '../App.css'
const NewsCard = ({newsItem}) => {
  const styles={
    image:{
      height:'200px'
    }
  }
  return (
    <Box className='newsCard'>
    <div>
    <img className='newsImage' src={newsItem.urlToImage}></img>
    </div>
    <div>
    <div className='title'>
    <span>{newsItem.title}</span>
    </div>
    <div className='desc'>
    <span>{newsItem.description}</span>
    <a href={newsItem.url}>Read More</a>
    </div>
    </div>
    </Box>
  )
}

export default NewsCard