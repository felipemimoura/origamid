import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

// function operacaoLenta(){
//   let c

//   for(let i = 0; i< 100000000;i ++){
//     c = i + i / 10
//   }

//   return c
// }

function App() {
  const [contar, setContar] = useState(0);
  // // const valor = useMemo(() => {
  // //   const localItem = window.localStorage.getItem('produto')
  // //   console.log('Aconteceu memo')

  // //   return localItem
  // // }, [])

  // const t1 = performance.now()
  // const valor = useMemo(() => operacaoLenta(), [])
  // console.log(performance.now() - t1)

  // console.log(valor)

  const handleClick = useCallback(() => {
    setContar((contar) =>contar + 1);
  });

  return (
    <div>
      <button onClick={handleClick}>{contar}</button>
    </div>
  );
}

export default App;
