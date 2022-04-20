import { useState, useEffect } from 'react';
import useFetch from '../api/useFetch';
import { Favorites, Content, Loading, Instructions } from "./index";
import { CoinListContext } from "../context/CoinListContext";
import axios from "axios";

function Main() {
  const { coinList, loading, error, featuredCoin } = useFetch('https://api.coingecko.com/api/v3/coins/')
  const [featured, setFeatured] = useState(null)
  const [inputAmount, setInputAmount] = useState(0)
  const [fullCoinList, setFullCoinList] = useState(null)
  useEffect(() => {
    axios.get('https://api.coingecko.com/api/v3/coins/list')
      .then((response) => {
          setFullCoinList(response.data)
        }) 
        .catch((err) => console.log(err));
      }, [])
      
  const handleFavs = (e) => {
    setFeatured(e.target.alt)
  } 

  if(loading) return <Loading />
  if(error) console.log(error)

  return (
    <CoinListContext.Provider value={{ coinList, handleFavs, featured, inputAmount, setInputAmount, featuredCoin, fullCoinList }}>
        <div className='flex flex-col justify-center items-center w-full'>
          <Favorites />
          {featured ? <Content /> : <Instructions/> }
        </div>
    </CoinListContext.Provider>
  )
}

export default Main