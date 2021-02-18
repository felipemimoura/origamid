import React from 'react'
import { useLocation, useParams } from 'react-router-dom'

export default function Produto() {

    const params = useParams()
    const location = useLocation()

    const search = new URLSearchParams(location.search)

    return (
        <div>
            <h1>Produto</h1>
            <p>{params.id}</p>
        </div>
    )
}
