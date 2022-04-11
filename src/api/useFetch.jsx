import { useEffect, useState } from 'react'
import axios from 'axios'

function useFetch(url) {
    const [coinList, setCoinList] = useState(null)
    const [featuredCoin, setFeaturedCoin] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    useEffect(() => {
        setLoading(true);
        axios.get(url)
            .then((response) => {
                if(url.length > 39) setFeaturedCoin(response.data)
                else{setCoinList(response.data)}
            })
            .catch((err) => setError(err))
            .finally(setLoading(false))
    }, [url]);

    return { coinList, loading, error, featuredCoin }
}

export default useFetch