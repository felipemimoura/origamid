import React from 'react'

export default function Modal({modal, setModal}) {
    function handleClick (){
        setModal(false)
    }

    if(modal === true){
        return (
            <div>
                Esse é um modal
                <button onClick={handleClick}>Fechar</button>
                
            </div>
        )
    }else{

        return null
    }

}
