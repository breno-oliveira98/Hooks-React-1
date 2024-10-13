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

  // const [exibirUseState, setExibirUseState] = useState(false);
  // const [exibirUseEffect, setExibirUseEffect] = useState(false);
  // const [exibirUseRef, setExibirUseRef] = useState(false);
  // const [exibirUseReduce, setExibirUseReduce] = useState(false);
  // const [exibirUseContext, setExibirUseContext] = useState(false);
  // const [exibirUseMemo, setExibirUseMemo] = useState(false);
  // const [exibirUseCallBack, setExibirUseCallBack] = useState(false);
  // const [exibirUseLayoutEffect, setExibirUseLayoutEffect] = useState(false);

  // const ExibirUseStates = () => {
  //   setExibirUseState(!exibirUseState);
  // }
  // const ExibirUseEffect = () => {
  //   setExibirUseEffect(!exibirUseEffect);
  // }
  // const ExibirUseRef = () => {
  //   setExibirUseRef(!exibirUseRef);
  // }
  // const ExibirUseReducer = () =>{
  //   setExibirUseReduce(!exibirUseReduce);
  // }
  // const ExibirUseContext = () => {
  //   setExibirUseContext(!exibirUseContext);
  // }
  // const ExibirUseMemo = () => {
  //   setExibirUseMemo (!exibirUseMemo);
  // }
  // const ExibirUseCallBack = () => {
  //   setExibirUseCallBack(!exibirUseCallBack);
  // }
  // const ExibirUseLayoutEffect = () => {
  //   setExibirUseLayoutEffect(!exibirUseLayoutEffect);
  // }

  const [mudarLayout, setMudarLayout] = useState();

  const exibirLayout = (mudarLayout) => {
    setMudarLayout(mudarLayout);
  }


  return (
    <>

      <div class="btn-group" role="group" aria-label="Basic outlined example">
        <button className='btn btn-outline-primary' onClick={() => exibirLayout(<UseStates />)}>UseStates</button>
        <button className='btn btn-outline-primary' onClick={() => exibirLayout(<UseEffect />)}>UseEffect</button>
      </div>
      <div className="container text-center mt-2">
        <div className="row">
          <div className="col">
            {mudarLayout}
          </div>
        </div>
      </div>

    </>
  )
}

export default App
