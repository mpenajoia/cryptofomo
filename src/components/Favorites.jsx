import { useContext, useState } from 'react';
import { CoinListContext } from "../context/CoinListContext";
import AddedFav from './AddedFav';
import Loading from './Loading';

function Favorites() {
  const { coinList, handleFavs, fullCoinList } = useContext(CoinListContext)
  const [favorites, setFavorites] = useState(['btc', 'eth', 'sol', 'matic', 'dot'])

  const [ addedFavs, setAddedFavs ] = useState([])

  const [ add, setAdd] = useState(true)
  const favSymbol = coinList?.filter((item) => favorites.includes(item.symbol));
  const favList = favSymbol?.map((coin, key) => {
    return (
      <button className='mx-4 shrink-0 duration-200 ease-in-out scale-100 hover:scale-110' onClick={handleFavs} key={key} value={coin.id}>
        <img alt={coin.id} src={coin.image.small}  />  
      </button>
    )
  })

  const addedFavSymbol = fullCoinList?.filter((item) => addedFavs.includes(item.symbol))
  const addedFavList = addedFavSymbol?.map((coin, key) => {
    return (
      <AddedFav key={key} coin={coin} />
    )
  })

  const addButton = (e) => {
    e.preventDefault()
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
    const coinCheck = fullCoinList.filter((coin) => coin.symbol === coinInput.toLowerCase() || coin.name.toLowerCase() === coinInput)

    if(coinCheck.length > 0){
      setSearchError(true)
      setAddedFavs([...addedFavs, coinCheck[0].symbol])
    } else { setSearchError(false) }
    setCoinInput('')
  }

  if(!coinList)return <Loading />
  
  return (
    <div className='flex flex-col gap-6 w-5/6 justify-center items-center'>
      <div className='no-scrollbar overflow-auto whitespace-nowrap flex items-center h-14'>
          {favList}
          {addedFavList}
            <button onClick={addButton} className="flex justify-center items-center rounded-full hover:bg-purple-500 hover:from-pink-600 bg-gradient-to-r from-pink-700 bg-purple-600 min-w-[50px] h-[50px] duration-200 ease-in-out scale-100 hover:scale-110 mx-3 text-2xl font-bold cursor-pointer" value="algo">{add ? '+' : '-'}</button>
      </div>
      <div className={`overflow-auto duration-300 ease-in-out transition-height ${add ? 'h-0' : 'h-52 md:h-24'}`}>
        <form onSubmit={submitInput} className="flex flex-col gap-4 items-center">
          <div className='text-center flex justify-center text-xl font-bold'>
            {searchError ? <p className='w-3/4 md:w-full'>Which cryptocurrency would you also like to check?</p> : <p className='text-red-600'>Please double check your spelling.</p>}
          </div>
          <div className='flex flex-col md:flex-row gap-3 md:gap-0'>
            <input type="text" onChange={searchInput} placeholder="Search by symbol or name" value={coinInput} className='appearance-none bg-gradient-to-r from-gray-900 bg-gray-800 drop-shadow-xl rounded-xl md:rounded-none md:rounded-tl-xl md:rounded-bl-xl px-4 py-2 focus:outline-none text-center placeholder:text-zinc-500 placeholder:text-base text-pink-500 text-2xl' />

            <button className='bg-gradient-to-r from-pink-700 bg-purple-600 rounded-xl md:rounded-none md:rounded-tr-xl md:rounded-br-xl px-5 py-2 drop-shadow-xl text-lg font-bold hover:bg-purple-500 hover:from-pink-600' type="submit">Search</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Favorites