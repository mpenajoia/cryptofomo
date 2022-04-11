import { useContext, useState } from 'react';
import { CoinListContext } from "../context/CoinListContext";
import useFetch from '../api/useFetch';
import { Featured } from "./index"


function Content() {
  const { featured, setInputAmount } = useContext(CoinListContext)  
  const { featuredCoin } = useFetch(`https://api.coingecko.com/api/v3/coins/${featured}`)

  if(!featuredCoin) return <h1>loading</h1>
  return (
      <Featured featuredCoin={featuredCoin}/>
  )
}

export default Content