import { useState, useEffect} from "react";

//4 - custon hook

export const useFetch = (url) => {
    const [data, setData] = useState(null)

    //5 - refatorando post
    const [config,setConfig] = useState(null)
    const [method, setMethod] = useState(null)
    const [callFetch, setCallFetch] = useState(null)

    const httpConfig = (data, method) => {
        setConfig({
            method,
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(data)
        })
        setMethod(method)
    }

    useEffect(() => {
       const  fetchData = async () => {
            const res = await fetch("http://localhost:3000/products")
             const json = await res.json()
             setData(json)
        }
        fetchData()
    }, [url])
    useEffects(() => {
        const httpRequest = async () => {
            let json
            if (method === "POST") {
                let fetchOptions = [url,config]
                
            }
        }
    },[config,method,url])
    return {data}
}