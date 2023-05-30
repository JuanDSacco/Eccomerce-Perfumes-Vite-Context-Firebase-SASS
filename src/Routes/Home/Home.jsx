import React from 'react'
import VideoHome from '../../components/VideoHome/VideoHome'
import Button from '../../components/Button/Button'
import { Link } from 'react-router-dom'
import { useCartContext } from '../../context/CartContext';


const Home = () => {

    const {mode} = useCartContext();

    return (

        <>
        {
            mode === false ?
        <div className='divHome'> 
            <VideoHome/>
            <div className='divHomeSecundario'>
                <h3 className='h3Home'>INVICTUS VICTORY EDP</h3>
                <div className='divPHome'>
                    <p className='pHome'>
                    Esta nueva fragancia evoca sensualidad y frescura. Una declaracionde intenciones sorprendente con un suplemento de frescura:<br/>
                    la vivacidaddel limón recubierta por un todopoderoso incienso. Llega a continuaciónun impulso profundamente sensual: la<br/>
                    redondez de la tonka secundada poruna vainilla intensa. El combarte entre un frescor contundente y una intensidad magnética.<br/>
                    Fuerte, cautivador...Nada puede detenerlo.Paco Rabanne nos descubre un nuevo oriental fresco dotado de vigor extremo
                    </p>
                </div>
                <div className='btnHome'>
                    <Link to={`/productos/24QEOlRWcb6DqnAMZhOU`}><Button name='Ver Producto'/></Link>
                </div>
            </div>
        </div>
        :
        <div className='divHomeDark'> 
            <VideoHome/>
            <div className='divHomeSecundario'>
                <h3 className='h3Home'>INVICTUS VICTORY EDP</h3>
                <div className='divPHome'>
                    <p className='pHome'>
                    Esta nueva fragancia evoca sensualidad y frescura. Una declaracionde intenciones sorprendente con un suplemento de frescura:<br/>
                    la vivacidaddel limón recubierta por un todopoderoso incienso. Llega a continuaciónun impulso profundamente sensual: la<br/>
                    redondez de la tonka secundada poruna vainilla intensa. El combarte entre un frescor contundente y una intensidad magnética.<br/>
                    Fuerte, cautivador...Nada puede detenerlo.Paco Rabanne nos descubre un nuevo oriental fresco dotado de vigor extremo
                    </p>
                </div>
                <div className='btnHome'> 
                    <Link to={`/productos/24QEOlRWcb6DqnAMZhOU`}><button className='btnHomeDark'>Ver Producto</button></Link>
                </div>
            </div>
        </div>
        }
        </>
    )
}

export default Home
