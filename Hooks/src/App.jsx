import { useState } from 'react'
import './App.css'

function App() {
  
const [contador, setContador] = useState(0);

function Adicionar() {
  setContador(adicionar => adicionar + 1);
}
function Subtrair() {
  if (contador > 0) {
    setContador(retirar => retirar - 1);    
  }
}
  return (
    <>
      <h1>Contador usando useStates.</h1>
      <br/>
      <h3>Contador: {contador}</h3>
      <br/>
      <button onClick={Adicionar}>Adicionar</button>
      <br/>
      <br/>
      <button onClick={Subtrair}>Subtrair</button>
      
    </>
  )
}

export default App
