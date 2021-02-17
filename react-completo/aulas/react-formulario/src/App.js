import { useState } from "react";
import Checkbox from "./Form/Checkbox";
import Input from "./Form/Input";
import Radio from "./Form/Radio";
import Select from "./Form/Select";

function App() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [produto, setProduto] = useState("");
  const [cor, setCor] = useState("");
  const [frutas, setFrutas] = useState("");
  const [linguagens, setLinguagens] = useState([]);
  const [termos, setTermos] = useState([]);

  return (
    <form>
      <h1>Checkbox</h1>
      <Checkbox
        options={["Javascript", "PHP", "Ruby"]}
        value={linguagens}
        setValue={setLinguagens}
      />
      <h1>Termos</h1>
      <Checkbox
        options={["Li e aceito os termos"]}
        value={termos}
        setValue={setTermos}
      />


      <h1>Cores</h1>
      <Radio options={["azul", "vermelho"]} value={cor} setValue={setCor} />
      <h1>Frutas</h1>
      <Radio
        options={["Pera", "Uva", "Maça", "Melancia"]}
        value={frutas}
        setValue={setFrutas}
      />
      <Select
        options={["notebook", "smartphone"]}
        value={produto}
        setValue={setProduto}
      />
      <Input id="nome" label="Nome" value={nome} setValue={setNome} required />
      <Input id="email" label="Email" value={email} setValue={setEmail} />

      <button>Enviar</button>
    </form>
  );
}

export default App;
