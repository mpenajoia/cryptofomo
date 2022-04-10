import useFetch from "./api/useFetch";
import Home from "./components/Home";

function App() {
  const { data, loading, error } = useFetch('https://api.coingecko.com/api/v3/coins/')

  if(loading) return <h1>Loading</h1>
  if(error) console.log(error)
  console.log(data)

  return (
      <Home />
  );
}

export default App;
