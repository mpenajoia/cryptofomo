import { useContext, useState } from 'react';
import { CoinListContext } from "../context/CoinListContext";
import Loading from './Loading';

function Favorites() {
  const { coinList, handleFavs } = useContext(CoinListContext)
  const [favorites, setFavorites] = useState(['btc', 'eth', 'sol', 'matic', 'dot'])
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

  if(!coinList)return <Loading />
  
  return (
    // <div className='no-scrollbar overflow-auto whitespace-nowrap w-5/6'>
    <div className='flex w-5/6 justify-center'>
      <div className='no-scrollbar overflow-auto whitespace-nowrap flex h-14'>
          {favList}
          <button onClick={(e) => setFavorites([...favorites, e.target.value])} value="algo">Add Algo</button>
      </div>
    </div>
  )
}

export default Favorites