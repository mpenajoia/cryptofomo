import useFetch from '../api/useFetch';
import { Favorites, Content } from "./index";

function Main() {
  const { data, loading, error } = useFetch('https://api.coingecko.com/api/v3/coins/')

  if(loading) return <h1>Loading</h1>
  if(error) console.log(error)
  console.log(data)

  return (
    <div>
        <Favorites />
        <Content />
    </div>
  )
}

export default Main