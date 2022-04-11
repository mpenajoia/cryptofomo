import { useContext, useState } from 'react';
import { CoinListContext } from "../context/CoinListContext";
import { Cards } from "./index"

function Featured(props) {
  const { featured, setInputAmount } = useContext(CoinListContext)  
  const [ localAmount, setLocalAmount ] = useState(0)
  const coin = props.featuredCoin
  const handleInput = (e) => {
    e.preventDefault()
    setLocalAmount(e.target.value)
  }
  const handleInputSubmit = (e) => {
    e.preventDefault()
    setInputAmount(localAmount)
  }
  
  function FeatureCard() {
    return (
      <div className='rounded-xl p-5 w-full'>
        <p>${coin.market_data.current_price.usd}</p>
        <img alt={featured} src={coin.image.large} />
        <p>{coin.name} - {coin.symbol.toUpperCase()}</p>
        <p>Market Rank: #{coin.market_cap_rank}</p>
        <p>All Time High: ${coin.market_data.ath.usd}</p>
      </div>
    )
  }
  console.log(coin)
  return (
    <div className='w-full flex flex-col items-center'>
      <FeatureCard />
      <form onSubmit={handleInputSubmit}>
        <input type="number" onChange={handleInput} placeholder="Enter a whole amount" className='appearance-none'/>
        <button type="submit" >Enter</button>
      </form>
      <Cards />
    </div>
  )
}

export default Featured