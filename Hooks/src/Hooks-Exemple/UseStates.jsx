import { useState } from 'react'

function UseStates() {

    const [contador, setContador] = useState(0);

    function Adicionar() {
        setContador((prevState) => prevState + 1);
    }
    function Subtrair() {
        if (contador > 0) {
            setContador((prevState) => prevState - 1);
        }
    }
    return (
        <>
            <div className="card " >
                <div className="card-body">
                    <h4 className="card-text">useState é um hook do React que permite adicionar e gerenciar estados em componentes funcionais, proporcionando reatividade à interface.</h4>
                    <div className="container mt-5">
                        <h5 className="card-title">Contador</h5>
                        <h6 className="card-subtitle text-body-secondary">{contador}</h6>
                        <button className='btn btn-success m-1' onClick={Adicionar}>Adicionar</button>
                        <button className='btn btn-danger m-1' onClick={Subtrair}>Subtrair</button>
                    </div>
                    <br/>
                </div>
            </div>


        </>
    )
}

export default UseStates;
