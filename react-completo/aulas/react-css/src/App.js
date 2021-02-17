import styled from 'styled-components'

const Title = styled.h1`
  font-size: 2rem;
  color: green;
`

const Paragrafo = styled.p`
  font-size: 1.5rem;
  color: red;
`

function App() {
  return (
    <div  >
      <Title>Meu Título com Styled</Title>
      <Paragrafo>Teste de texto</Paragrafo>
    </div>
  );
}

export default App;
