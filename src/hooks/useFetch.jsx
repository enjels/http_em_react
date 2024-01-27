import { useState, useEffect } from "react";

//*4 - custon hook

export const useFetch = (url) => {
  const [data, setData] = useState(null);

    //*5 - refatorando post
    
  const [config, setConfig] = useState(null);
  const [method, setMethod] = useState(null);
  const [callFetch, setCallFetch] = useState(null);

  const httpConfig = (data, method) => {
    setConfig({
      method,
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    });
    setMethod(method);
  };

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(url);
      const json = await res.json();
      setData(json);
    };
    fetchData();
  }, [url, callFetch]);

  useEffect(() => {
    const httpRequest = async () => {
      let json;
      if (method === "POST") {
        let fetchOptions = [url, config];
        const res = await fetch(...fetchOptions);
        json = await res.json();
      }
      setCallFetch(json);
    };
    httpRequest();
  }, [config, method, url]);
  return { data, httpConfig };
};
