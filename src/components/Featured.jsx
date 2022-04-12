import { useContext, useState } from 'react';
import { CoinListContext } from "../context/CoinListContext";
import { Cards } from "./index"

function Featured(props) {
  const { featured, inputAmount, setInputAmount } = useContext(CoinListContext)  
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
      <div className='relative w-5/6 my-6 group'>
        <div className='absolute inset-0 bg-gradient-to-r from-pink-500 bg-purple-500 rounded-xl blur' ></div>
        
        <div className='relative bg-gradient-to-b from-black to-gray-900 rounded-xl text-zinc-200 font-bold p-4'>
          <p>${coin.market_data.current_price.usd}</p>
          <img alt={featured} src={coin.image.large} />
          <p>{coin.name} - {coin.symbol.toUpperCase()}</p>
          <p>Market Rank: #{coin.market_cap_rank}</p>
          <p>All Time High: ${coin.market_data.ath.usd}</p>
        </div>
      </div>
    )
  }
  
  return (
    <div className='w-full flex flex-col items-center'>
      <FeatureCard />
      <form onSubmit={handleInputSubmit}>
        <input type="number" onChange={handleInput} placeholder="Enter a whole amount" className='appearance-none'/>
        <button type="submit" >Enter</button>
      </form>
      <div className={` overflow-auto duration-300 ease-in-out transition-height ${inputAmount <= 0 ? 'h-0' : 'h-96'}`}>
        <Cards coin={coin}/>
      </div>
    </div>
  )
}

export default Featured