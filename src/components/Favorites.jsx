import { useContext, useState } from 'react';
import { CoinListContext } from "../context/CoinListContext";

function Favorites() {
  const { coinList, handleFavs } = useContext(CoinListContext)
  const [favorites, setFavorites] = useState(['btc', 'eth', 'sol', 'matic', 'dot'])

  const favSymbol = coinList?.filter((item) => {
    return favorites.includes(item.symbol)
  });

  const favList = favSymbol?.map((coin, key) => {
    return (
      <button onClick={handleFavs} key={key} value={coin.id}>
        <img alt={coin.id} src={coin.image.thumb}/>  
      </button>
    )
  })

  return (
    <div>
      {favList}
      <button onClick={(e) => setFavorites([...favorites, e.target.value])} value="algo">Add Algo</button>
    </div>
  )
}

export default Favorites