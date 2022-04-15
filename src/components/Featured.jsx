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
      <div className='relative w-5/6 lg:w-3/4 mt-8 mb-10 group'>
        <div className='absolute inset-0 bg-gradient-to-r from-pink-500 bg-purple-500 rounded-3xl blur' ></div>
        <div className='relative bg-gradient-to-t from-gray-900 bg-gray-800 hover:bg-gray-700 rounded-3xl text-zinc-200 font-bold p-8 flex flex-col justify-center items-center gap-6'>
          <div className='w-5/6 lg:w-full flex justify-between'>
            <a href={coin.links.homepage[0]} target="_blank" rel="noopener noreferrer" >
              <img alt={featured} src={coin.image.large} className="h-24" />
            </a>
            <div className='flex flex-col items-center lg:items-end justify-center text-lg font-bold'>
              <p className='text-2xl lg:text-4xl'>{coin.symbol.toUpperCase()}</p>
              <p className='text-2xl lg:text-4xl'>${coin.market_data.current_price.usd}</p>
              <p>{coin.name}</p>
            </div>
          </div>
          <div className='md:flex justify-between w-5/6 lg:w-full hidden text-base lg:text-xl'>
            <p>Rank: #{coin.market_cap_rank}</p>
            <p>ATH: ${coin.market_data.ath.usd}</p>
          </div>
        </div>
      </div>
    )
  }
  
  return (
    <div className='w-full flex flex-col items-center'>
      <FeatureCard />
      <form onSubmit={handleInputSubmit} className="flex justify-center items-center" >
        <div className='flex flex-col md:flex-row gap-3 md:gap-0 mb-5'>
          <input type="number" onChange={handleInput} placeholder="Enter a whole amount" className='appearance-none bg-gradient-to-r from-gray-900 bg-gray-800 drop-shadow-xl px-4 py-2 focus:outline-none text-center placeholder:text-zinc-500 placeholder:text-base text-pink-500 rounded-xl md:rounded-none md:rounded-tl-xl md:rounded-bl-xl text-2xl'/>

          <button type="submit" className='bg-gradient-to-r from-pink-700 bg-purple-600 rounded-xl md:rounded-none md:rounded-tr-xl md:rounded-br-xl px-5 py-2 drop-shadow-xl text-lg  font-bold hover:bg-purple-500 hover:from-pink-600 w-full' >Enter</button>
        </div>
      </form>
      <div className={`flex justify-center items-start overflow-auto duration-300 ease-in-out transition-height w-11/12 ${inputAmount <= 0 ? 'h-0' : 'h-[28rem]'}`}>
        <Cards coin={coin}/>
      </div>
    </div>
  )
}

export default Featured