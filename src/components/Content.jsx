import { useContext } from 'react';
import { CoinListContext } from "../context/CoinListContext";
import useFetch from '../api/useFetch';

function Content() {
  const { featured } = useContext(CoinListContext)  
  const { loading, error, featuredCoin } = useFetch(`https://api.coingecko.com/api/v3/coins/${featured}`)
  
  // console.log(featuredCoin)
  if(!featuredCoin) return <h1>loading</h1>
  return (
    <div>
      <img alt={featured} src={featuredCoin.image.large} />
        {featured}
      <form>
        <input type="text" placeholder="Enter an amount"/>
        <button type="submit" >Enter</button>
      </form>
    </div>
  )
}

export default Content