import { useContext } from 'react';
import { CoinListContext } from "../context/CoinListContext";

function Favorites() {
  const { coinList } = useContext(CoinListContext)
  
  const favSymbol = coinList?.filter((item) => {
    return item.symbol === 'btc' || item.symbol === 'eth' || item.symbol === 'sol' || item.symbol === 'matic' || item.symbol === 'dot'
  });

  const favList = favSymbol?.map((coin, key) => {
    return (
      <button key={key}>{coin.name}</button>
    )
  })
  
  console.log(favList)
  return (
    <div>
      {favList}
    </div>
  )
}

export default Favorites