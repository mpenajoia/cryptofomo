import { useContext, useState } from 'react';
import { CoinListContext } from "../context/CoinListContext";
import Loading from './Loading';

function Favorites() {
  const { coinList, handleFavs } = useContext(CoinListContext)
  console.log(coinList)
  const [favorites, setFavorites] = useState(['btc', 'eth', 'sol', 'matic', 'dot'])
  const [ add, setAdd] = useState(true)
  const favSymbol = coinList?.filter((item) => {
    return favorites.includes(item.symbol)
  });
  const favList = favSymbol?.map((coin, key) => {
    return (
      <button className='mx-4 shrink-0 duration-200 ease-in-out scale-100 hover:scale-110' onClick={handleFavs} key={key} value={coin.id}>
        <img alt={coin.id} src={coin.image.small}  />  
      </button>
    )
  })

  const addButton = (e) => {
    e.preventDefault()
    // setFavorites([...favorites, e.target.value])
    setAdd(!add)
  }
  
  const [coinInput, setCoinInput] = useState('')
  const [searchError, setSearchError] = useState(true)
  const searchInput = (e) => {
    e.preventDefault()
    setCoinInput(e.target.value)
  }
  const submitInput = (e) => {
    e.preventDefault()
    console.log(coinInput)
    const coinCheck = coinList.filter((coin) => {
      return coin.symbol === coinInput.toLowerCase() || coin.name === coinInput.toLowerCase()
    })
    console.log(coinCheck.length)
    if(coinCheck.length > 0){
      setSearchError(true)
      setFavorites([...favorites, coinCheck[0].symbol])
    }
      else { setSearchError(false) }
    setCoinInput('')
  }

  if(!coinList)return <Loading />
  
  return (
    <div className='flex flex-col gap-6 w-5/6 justify-center items-center'>
      <div className='no-scrollbar overflow-auto whitespace-nowrap flex items-center h-14'>
          {favList}
            <button onClick={addButton} className="flex justify-center items-center rounded-full hover:bg-purple-500 hover:from-pink-600 bg-gradient-to-r from-pink-700 bg-purple-600 min-w-[50px] h-[50px] duration-200 ease-in-out scale-100 hover:scale-110 mx-3 text-2xl font-bold cursor-pointer" value="algo">{add ? '+' : '-'}</button>
      </div>
      <div className={`${add ? 'hidden' : 'block'}`}>
        <form onSubmit={submitInput} className="flex flex-col gap-4 items-center">
          <div className='text-center text-xl font-bold'>
            {searchError ? <p>Which cryptocurrecny would you also like to check?</p> : <p className='text-red-600'>Please double check your spelling.</p>}
          </div>
          <div className='flex'>
            <input type="text" onChange={searchInput} placeholder="Search by symbol or name" value={coinInput} className='appearance-none bg-gradient-to-r from-gray-900 bg-gray-800 drop-shadow-xl rounded-tl-xl rounded-bl-xl px-4 py-2 focus:outline-none text-center placeholder:text-zinc-500 placeholder:text-base text-pink-500 text-2xl' />
            <button className='bg-gradient-to-r from-pink-700 bg-purple-600 rounded-tr-xl rounded-br-xl px-5 py-2 drop-shadow-xl text-lg font-bold hover:bg-purple-500 hover:from-pink-600' type="submit">Search</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Favorites