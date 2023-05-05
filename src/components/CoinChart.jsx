import { CircularProgress } from '@mui/material';
import axios from 'axios';
import React, { useEffect } from 'react'
import { useState } from 'react';
import { Charts } from '../config/api';
import {Line} from 'react-chartjs-2'
const CoinChart = ({coin}) => {
    const [chartData, setChartData] = useState();
    const [days, setdays] = useState(1);
    const [flag, setflag] = useState(false);
    const historyData=async()=>{
        let {data}=axios.get(Charts(coin.id,days));
        setChartData(data.prices);
        setflag(true);
    }
    useEffect=(()=>{
        historyData();
    },[days])
  return (
    <div>
        {!chartData | flag===false?(
            <CircularProgress style={{color:"gold"}} />

        ):(
            <>
                <Line data={{
                    labels:chartData.map((lineData)=>{
                        let date=new Date(lineData);
                        let time=
                            date.getHours>12? `${date.getHours() - 12}:${date.getMinutes()} PM` : `${date.getHours()}:${date.getMinutes()} AM`;
                            return days===1?time:date.toLocaleString();
                        }),
                        datasets: [
                  {
                    data: chartData.map((coin) => coin[1]),
                    label: `Price ( Past ${days} Days ) in $`,
                    borderColor: "#EEBC1D",
                  },
                ],
                }}></Line>
            </>
        )}
    </div>
  )
}

export default CoinChart