import React, { useCallback, useState } from "react";

const useFetch = () => {
  const [data, setData] = useState(null);
  const [error, setErros] = useState(null);
  const [loading, setLoading] = useState(null);

  const request = useCallback( async(url, options) => {
      let response
      let json
    try {
      setLoading(null);
      response = await fetch(url, options);
      json = await response.json();
      
      
    }catch (error){
        json = null
        setErros('error')
    }finally{
        setLoading(false);
        setData(json);
        return{response, json}
    }
  }, [])

  return { data, error, loading, request };
};

export default useFetch;
