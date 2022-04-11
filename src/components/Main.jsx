import { useState } from 'react';
import useFetch from '../api/useFetch';
import { Favorites, Content } from "./index";
import { CoinListContext } from "../context/CoinListContext";

function Main() {
  const { coinList, loading, error, featuredCoin } = useFetch('https://api.coingecko.com/api/v3/coins/')
  const [featured, setFeatured] = useState(null)
  const [inputAmount, setInputAmount] = useState(0)

  const handleFavs = (e) => {
    // console.log(e.target.alt)
    // setFeatured(e.target.value)
    setFeatured(e.target.alt)
  } 

  if(loading) return <h1>Loading</h1>
  if(error) console.log(error)

  return (
    <CoinListContext.Provider value={{ coinList, handleFavs, featured, inputAmount, setInputAmount, featuredCoin }}>
        <div className='flex flex-col justify-center items-center'>
          <Favorites />
          {featured ? <Content /> : ''}
        </div>
    </CoinListContext.Provider>
  )
}

export default Main