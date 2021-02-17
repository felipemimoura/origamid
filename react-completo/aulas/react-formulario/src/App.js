import { useState } from "react";
import Input from './Form/Input'

function App() {
  const [cep, setCep] = useState('')
  const [error, setError] = useState(null)

  function validateCep(value){
    if(value.length === 0){
      setError('Preencha um valor')
      return false
    }else if(!/^\d{5}-?\d{3}$/.test(value)){
      setError('Prencha um CEP válido')
      return false
    }else{
      setError(null)
      return true
    }
  }


  function handleBlur ({target}){
   console.log(validateCep(target.value))
  }



  return (
    <form>
      <Input
      label="CEP"
      id="cep"
      type="text"
      value={cep}
      setValue={setCep}
      onBlur={handleBlur}
      placeholder="00000-000" />

      {error && <p>{error}</p>}
   
    </form>
  );
}

export default App;
