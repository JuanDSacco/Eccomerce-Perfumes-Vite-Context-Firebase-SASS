import React from 'react'
import { Link } from 'react-router-dom'
import CartWidget from '../CartWidget/CartWidget'
import { useCartContext } from '../../context/CartContext'

const NavBar = () => {

    const {mode, setMode} = useCartContext();

    return (
        <div>         
            <nav className='navBar'> 
                <ul className='ulNavBar'>
                    <li><Link to={'/'}>Inicio</Link></li>
                    <li><Link to={'/productos'}>Perfumes</Link></li>
                    <li><Link to={'/detalle'}>Detalles</Link></li>
                    <li><Link to={'/cart'}><CartWidget/></Link></li>
                </ul>
            </nav>
        </div>
    )
}

export default NavBar

