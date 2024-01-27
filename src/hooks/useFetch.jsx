import { useState, useEffect} from "react";

//4 - custon hook

export const useFetch = (url) => {
    const [data, setData] = useState(null)

    useEffect(() => {
         fetchData = async () => {
            const res = await fetch("http://localhost:3000/products")
             const json = await res.json()
             setData(json)
        }
        fetchData()
    },[url])
    return {data}
}