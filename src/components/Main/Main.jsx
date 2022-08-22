import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './main.css'

const Main = () => {

    const [dolarActual, setDolarActual] = useState([]);
    const [actualTime, setActualTime] = useState([]);
    const [result, setResult] = useState(0);
    const [ars, setArs] = useState(0);


    useEffect(() => {
        const getInfo = () => {
            axios.get('https://www.dolarsi.com/api/api.php?type=valoresprincipales')
                .then(function (response) {
                    // handle success
                    setDolarActual(response.data[1]);
                })
                .catch(function (error) {
                    // handle error
                    console.log(error);
                })
        }

        if (dolarActual.length === 0) {
            getInfo();
        }

    })

    setInterval(function () {

        setActualTime(new Date().toTimeString().replace(/.*(\d{2}:\d{2}:\d{2}).*/, "$1"));

    }, 1000);


    const handleCalculate = (e) => {
        const result = e.target.value * dolarActual.casa.compra.slice(0, 3);
        setResult(result);
    }

    return (
        <div>
            <div className="cover-img"></div>
            <nav>
                <ul className='nav-list'>
                    <li className='language-btn'>{actualTime.slice(0, 5)}</li>
                    <li>made by <a href="https://github.com/dducken" target="_blank" rel='noreferrer' className='link'>Ducken</a></li>
                </ul>
            </nav>
            <div className="container">

                <div className="header">
                    <div className="title">
                        <span id="title">Dolar blue hoy</span>
                    </div>
                </div>
                <div className="t-body">
                    <div className="form-control">
                        <label htmlFor="length">Compra</label>
                        <input type="text" id="len" value={dolarActual.casa ? dolarActual.casa.compra.slice(0, 3) : 0} disabled />
                    </div>
                    <div className="form-control">
                        <label htmlFor="length">Venta</label>
                        <input type="text" id="len" value={dolarActual.casa ? dolarActual.casa.venta.slice(0, 3) : 0} disabled />
                    </div>
                    <div className="form-control">
                        <label htmlFor="length">Calcular</label>
                        <input type="number" id="calc" min='0' placeholder='ARS' onChange={(e) => handleCalculate(e)} />=<input type="text" id="calc" placeholder='USD' disabled value={result > 0 ? result : ''}/>
                    </div>
                
                </div>
            </div>
        </div>
    )
}

export default Main