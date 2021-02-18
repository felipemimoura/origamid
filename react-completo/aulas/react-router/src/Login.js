import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Login() {
    const navigate = useNavigate()

    function handleClick(){
        console.log('fazer login')
        navigate('/sobre')
    }


    return (
        <div>
            <h1>Login</h1>
            <button onClick={handleClick}>Login</button>
        </div>
    )
}
