import { useContext, useState } from 'react';
import { CoinListContext } from "../context/CoinListContext";
import useFetch from '../api/useFetch';
import { Featured, Loading } from "./index"


function Content() {
  const { featured } = useContext(CoinListContext)  
  const { featuredCoin } = useFetch(`https://api.coingecko.com/api/v3/coins/${featured}`)

  if(!featuredCoin) return <Loading />
  return (
      <Featured featuredCoin={featuredCoin}/>
  )
}

export default Content