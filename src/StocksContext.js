import React, { Children, createContext, useContext, useEffect, useState } from 'react'
const stocks=createContext()
const StocksContext = ({children}) => {
    const [currency,setCurrency]=useState("INR");
    const [symbol,setSymbol]=useState("₹");
    useEffect(()=>{
        if(currency==="USD"){
            setSymbol("$")
        }
        else if(currency==="INR"){
            setSymbol("₹")
        }
    },[currency])
  return (
    <stocks.Provider value={{currency,symbol,setCurrency}}>
        {children}
    </stocks.Provider>
  )
}

export default StocksContext;
export const StockState=()=>{
    return useContext(stocks);
}