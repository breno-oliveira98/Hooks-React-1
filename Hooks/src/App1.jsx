import { useState } from 'react'
import './App.css'
import UseStates from './Hooks-Exemple/UseStates';
import UseEffect from './Hooks-Exemple/UseEffect';
import UseRef from './Hooks-Exemple/UseRef';
import UseReducer from './Hooks-Exemple/UseReducer';
import UseContext from './Hooks-Exemple/UseContext';
import UseMemo from './Hooks-Exemple/UseMemo';
import UseCallback from './Hooks-Exemple/UseCallback';
import UseLayoutEffect from './Hooks-Exemple/UseLayoutEffect';

function App() {

  const [exibirUseState, setExibirUseState] = useState(false);
  const [exibirUseEffect, setExibirUseEffect] = useState(false);
  const [exibirUseRef, setExibirUseRef] = useState(false);
  const [exibirUseReduce, setExibirUseReduce] = useState(false);
  const [exibirUseContext, setExibirUseContext] = useState(false);
  const [exibirUseMemo, setExibirUseMemo] = useState(false);
  const [exibirUseCallBack, setExibirUseCallBack] = useState(false);
  const [exibirUseLayoutEffect, setExibirUseLayoutEffect] = useState(false);
  
  const ExibirUseStates = () => {
    setExibirUseState(!exibirUseState);
  }

  const ExibirUseEffect = () => {
    setExibirUseEffect(!exibirUseEffect);
  }

  const ExibirUseRef = () => {
    setExibirUseRef(!exibirUseRef);
  }

  const ExibirUseReducer = () =>{
    setExibirUseReduce(!exibirUseReduce);
  }

  const ExibirUseContext = () => {
    setExibirUseContext(!exibirUseContext);
  }

  const ExibirUseMemo = () => {
    setExibirUseMemo (!exibirUseMemo);
  }

  const ExibirUseCallBack = () => {
    setExibirUseCallBack(!exibirUseCallBack);
  }

  const ExibirUseLayoutEffect = () => {
    setExibirUseLayoutEffect(!exibirUseLayoutEffect);
  }


  return (
    <>
      <div className="container text-center mt-2">
        <div className="row">

          <div className="col">
            <button className='btn btn-primary' onClick={ExibirUseStates}>UseStates</button>
            {/* Renderiza o componente UseStates se showUseStates for true */}
            {exibirUseState && <UseStates />}
          </div>

          <div className="col">
            <button className='btn btn-primary' onClick={ExibirUseEffect}>UseEffect</button>
            {exibirUseEffect && <UseEffect />}
          </div>

          <div className="col">
            <button className='btn btn-primary' onClick={ExibirUseRef}>UseRef</button>
            {exibirUseRef && <UseRef />}
          </div>

          <div className="col">
            <button className='btn btn-primary' onClick={ExibirUseReducer}>UseReducer</button>
            {exibirUseReduce && <UseReducer />}
          </div>

          <div className="col">
            <button className='btn btn-primary' onClick={ExibirUseContext}>UseContext</button>
            {exibirUseContext && <UseContext />}
          </div>

          <div className="col">
            <button className='btn btn-primary' onClick={ExibirUseMemo}>UseMemo</button>
            {exibirUseMemo && <UseMemo />}
          </div>

          <div className="col">
            <button className='btn btn-primary' onClick={ExibirUseCallBack}>UseCallback</button>
            {exibirUseCallBack && <UseCallback />}
          </div>

          <div className="col">
            <button className='btn btn-primary' onClick={ExibirUseLayoutEffect}>UseLayoutEffect</button>
            {exibirUseLayoutEffect && <UseLayoutEffect />}
          </div>

        </div>
      </div>

    </>
  )
}

export default App
