import React from 'react'




function PhotoGet() {
    function handleSubmit(event){
        event.preventDefault()
        fetch('https://dogsapi.origamid.dev/json/api/photo/239')
        .then(response => {
            console.log(response)
            return response.json()
        }).then(json => {
            console.log(json)
            return json
        })
    }

    return (
        <form onSubmit={handleSubmit}>
            <input />
            <button >Enviar</button>
            
        </form>
    )
}

export default PhotoGet
