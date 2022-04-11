import { useState } from 'react';
import useFetch from '../api/useFetch';
import { Favorites, Content } from "./index";
import { CoinListContext } from "../context/CoinListContext";

function Main() {
  const { coinList, loading, error, featuredCoin } = useFetch('https://api.coingecko.com/api/v3/coins/')
  const [featured, setFeatured] = useState(null)
  const handleFavs = (e) => {
    setFeatured(e.target.value)
  } 

  if(loading) return <h1>Loading</h1>
  if(error) console.log(error)

  return (
    <CoinListContext.Provider value={{ coinList, handleFavs, featured }}>
        <Favorites />
        {featured ? <Content /> : ''}
    </CoinListContext.Provider>
  )
}

export default Main