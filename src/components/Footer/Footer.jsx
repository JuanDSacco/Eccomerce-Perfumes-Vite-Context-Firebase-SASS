import React from 'react'
import { Link } from 'react-router-dom'


const Footer = () => {

    return (
        <footer>
            <div className='divAboutContacto'>
                <div className='divAbout'>
                    <h3 className='h3Footer'>About La Parfumerie</h3>
                    <ul className='ulPrincipalFooter'>
                        <Link to={`/nuestros-locales`}><li>Nuestros locales</li></Link>
                        <Link to={`/metodos-de-pago`}><li>Metodos de pago</li></Link>
                        <Link to={`/metodos-de-envios`}><li>Metodos de envio</li></Link>
                    </ul>
                </div>
                <div className='divContacto'>
                    <h3 className='h3Footer'>Contacto</h3>
                    <ul className='ulPrincipalFooter'>
                        <li>Email: laperfumerie@gmail.com</li>
                        <li>Telefono: 011 4659 2031</li>
                        <div>
                            <ul className='ulRedes'>
                                <li className='liRedes'> <i className="fa-brands fa-facebook"></i> </li>
                                <li className='liRedes'><i className="fa-brands fa-instagram"></i></li>
                                <li className='liRedes'><i className="fa-brands fa-whatsapp"></i></li>
                                <li className='liRedes'><i className="fa-brands fa-twitter"></i></li>
                            </ul>
                        </div>
                    </ul>
                </div>
            </div>
            <div className='divDerechos'>
                <h5>Todos los derechos reservados por Copyright 2023 - La Parfumerie</h5>
            </div>
        </footer>
    )
}

export default Footer
