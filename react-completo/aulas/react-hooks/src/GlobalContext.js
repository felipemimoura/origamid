import React, { useEffect, useState } from 'react'

export const GlobalContext = React.createContext()

export const GlobalStorage = ({children}) =>{
    const [dados,setDados] = useState(null)

    useEffect(() =>{
        fetch('http://ranekapi.origamid.dev/json/api/produto')
        .then(response => response.json())
        .then(json => setDados(json))
    }, [])

    function limparDados(params) {
        setDados(null)
    }


    return <GlobalContext.Provider value={{dados, limparDados}}>{children}</GlobalContext.Provider>
}
