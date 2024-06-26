import { useState, useEffect } from 'react'
import axios from 'axios'


const useFetch = (endpoint, query) => {
    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)

    const options = {
        method: 'GET',
        url: `https://jsearch.p.rapidapi.com/${endpoint}`,
        params: { ...query },
        headers: {
          'X-RapidAPI-Key': 'a3661dbc81msh01ab890ab144ba0p1ab1abjsn7dde25c93bef',
          'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
        }
      };

    const fetchData = async () => {
        setIsLoading(true)

        try{
            const response = await axios.request(options)
            setData(response.data.data)
            setIsLoading(false)
        } catch(error){
            setError(error)
            alert('Hay un error')
        } finally{
            setIsLoading(false)
        }
    }

    useEffect(() => {
        fetchData()
    }, [])


    const reFetch = () => {
        setIsLoading(true)
        fetchData()
    }

    return {data, isLoading, error, reFetch}
}

export default useFetch