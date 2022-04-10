import useFetch from '../api/useFetch';
import { Favorites, Content } from "./index";
import { CoinListContext } from "../context/CoinListContext";

function Main() {
  const { coinList, loading, error } = useFetch('https://api.coingecko.com/api/v3/coins/')

  if(loading) return <h1>Loading</h1>
  if(error) console.log(error)
  // console.log(coinList)

  return (
    <CoinListContext.Provider value={{ coinList }}>
        <Favorites />
        <Content />
    </CoinListContext.Provider>
  )
}

export default Main