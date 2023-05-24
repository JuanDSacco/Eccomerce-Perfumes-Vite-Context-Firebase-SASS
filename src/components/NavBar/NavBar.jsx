import React from 'react'
import { Link } from 'react-router-dom'
import CartWidget from '../CartWidget/CartWidget'
const NavBar = () => {
    return (
        <nav className='navBar'> 
            <ul className='ulNavBar'>
                <li><Link to={'/'}>Inicio</Link></li>
                <li><Link to={'/productos'}>Perfumes</Link></li>
                <li><Link to={'/detalle'}>Detalles</Link></li>
                <li><Link to={'/cart'}><CartWidget/></Link></li>
                <li className='liDarkMode'>DarkMode</li>
            </ul>
        </nav>
    )
}

export default NavBar

