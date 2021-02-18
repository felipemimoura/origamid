import React, { useState } from 'react'

function TokenPost() {
    const [username, setUsername] = useState('')
  
    const [password, setPassword] = useState('')
    const [token,setToken] = useState('')

    function handleSubmit(event){
        event.preventDefault()

        fetch('https://dogsapi.origamid.dev/json/jwt-auth/v1/token', {
            method: 'POST',
            headers:{
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                username,

                password
            })

            
        }).then(response =>{
            console.log(response)
            return response.json()
        }).then(json =>{
            console.log(json)
            setToken(json.token)
            return json
        })
    }
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="username" value={username} onChange={({target}) => setUsername(target.value)}/>
            <input type="text" placeholder="password" value={password} onChange={({target}) => setPassword(target.value)}/>
           
            <button>Enviar</button>
            {token}
            
        </form>
    )
}

export default TokenPost
