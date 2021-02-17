import { useState } from "react";
import Checkbox from "./Form/Checkbox";
import Input from "./Form/Input";
import Radio from "./Form/Radio";
import Select from "./Form/Select";
import useForm from "./Hooks/useForm";

function App() {
  const cep = useForm('cep')
  const email = useForm('email')
  const nome = useForm('')

  function handleSubmit(event){
    event.preventDefault()
    if(cep.validate()){
      console.log('Enviar')
    }else{
      console.log('Não Enviar')
    }
  }

  return (
    <form onSubmit={handleSubmit}>
           <Input
        label="Nome"
        id="nome"
        type="text"
      {...nome}

      />
      <Input
        label="CEP"
        id="cep"
        type="text"
        placeholder="00000-000"
        {...cep}

      />
      <Input
        label="Email"
        id="email"
        type="email"
       
        {...email}

      />
    <button>Enviar</button>
    </form>
  );
}

export default App;
