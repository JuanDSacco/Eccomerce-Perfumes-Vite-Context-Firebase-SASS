import React from 'react'
import VideoHome from '../../components/VideoHome/VideoHome'
import Button from '../../components/Button/Button'
import { Link } from 'react-router-dom'


const Home = () => {

    return (

        <>
        <div className='divHome'> 
            <VideoHome/>
            <div className='divHomeSecundario'>
                <h3 className='h3Home'>INVICTUS VICTORY EDP</h3>
                <div className='divPHome'>
                    <p className='pHome'>
                    Esta nueva fragancia evoca sensualidad y frescura. Una declaracionde intenciones sorprendente con <br/>
                    un suplemento de frescura: la vivacidaddel limón recubierta por un todopoderoso incienso. Llega a <br/>
                    continuaciónun impulso profundamente sensual: la redondez de la tonka secundada poruna vainilla <br/>
                    intensa. El combarte entre un frescor contundente y una intensidad magnética. Fuerte, cautivador... <br/>
                    Nada puede detenerlo. Paco Rabanne nos descubre un nuevo oriental fresco dotado de vigor extremo
                    </p>
                </div>
                <div className='btnHome'>
                    <Link to={`/productos/24QEOlRWcb6DqnAMZhOU`}><Button name='Ver Producto'/></Link>
                </div>
            </div>
        </div>
        </>
    )
}

export default Home
