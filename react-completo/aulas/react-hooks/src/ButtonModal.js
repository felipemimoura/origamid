import React from 'react'

export default function ButtonModal({setModal}) {

    function handleClick () {
        setModal(true)
    }
    return (
        <div>
            <button onClick={handleClick}>Abrir</button>
        </div>
    )
}
