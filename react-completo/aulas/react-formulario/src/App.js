import { useState } from "react";

function App() {
  const coresArray =[
    "azul",
    "roxo",
    "laranja",
    "verde",
    "vermelho",
    "cinza",
  ];
  const [cores, setCores] = useState([])

  function handleChange({ target }) {
    if (target.checked) {
      setCores([...cores, target.value]);
    } else {
      setCores(cores.filter((cor) => cor !== target.value));
    }
  }
  const inputs = coresArray.map((cor, index) => {
    return (
      <label key={index}>
        <input
          type="checkbox"
          value={cor}
          checked={cores.includes(cor)}
          onChange={handleChange}
        />
        {cor}
      </label>
    );
    
  });

  return <form>{inputs}</form>;
}

export default App;
