import { useContext } from 'react';
import { CoinListContext } from "../context/CoinListContext";
import useFetch from '../api/useFetch';
import Loading from './Loading';


function AddedFav(props) {
    const { handleFavs } = useContext(CoinListContext)
    const { featuredCoin } = useFetch(`https://api.coingecko.com/api/v3/coins/${props.coin.id}`)

    if(!featuredCoin)return <Loading />
  return (
    <button className='mx-4 shrink-0 duration-200 ease-in-out scale-100 hover:scale-110' onClick={handleFavs} value={props.coin.id}>
        <img alt={featuredCoin.id} src={featuredCoin.image.small}  />  
    </button>
  )
}

export default AddedFav