
import Card from "react-bootstrap/Card";

function App() {
  return (
    <>
      <h1>Com bootstrap</h1>
      <div className="card bg-dark text-white m-5" style={{maxWidth: "18rem"}}>
        <div className="card-header">Notebook</div>
        <div className="card-body">
          <h5 className="card-title">R$ 2500,00</h5>
          <p className="card-text">teste teste</p>
        </div>
      </div>
      <h1>Com React-bootstrap</h1>
      <Card bg="dark" text="white" className="m-5" style={{maxWidth: "18rem"}}>
        <Card.Header>Notebook</Card.Header>
        <Card.Body>
          <Card.Title>R$ 2500,00</Card.Title>
          <Card.Text>Teste teste</Card.Text>
        </Card.Body>
      </Card>
    </>

  );
}

export default App;
