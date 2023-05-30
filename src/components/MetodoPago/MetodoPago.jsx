import React from 'react'
import CardMetodoPago from '../CardMetodoPago/CardMetodoPago'
import Cabal from '../../assets/Bancos/cabal.png' 
import CREDICOOP from '../../assets/Bancos/credicoop.png'

const MetodoPago = () => {
    return (
        <section className='sectionMetodoPago'>
            <div className='containerMetodoPago'>
                <h1>Metodos de pago</h1>
            </div>
            <div className='divSecuMetodoPago'>
                <CardMetodoPago imagen1={Cabal} tarjeta='CRÉDITO Y DÉBITO' info1='10% OFF' info2='DE REINTEGRO' info3='HASTA 3 CUOTAS SIN INTERES' imagen3={CREDICOOP} entidad='BANCO CREDICOOP'/>
                <CardMetodoPago imagen1={Cabal} tarjeta='CRÉDITO Y DÉBITO' info1='10% OFF' info2='DE REINTEGRO' info3='HASTA 3 CUOTAS SIN INTERES' imagen3={CREDICOOP} entidad='BANCO CREDICOOP'/>
                <CardMetodoPago imagen1={Cabal} tarjeta='CRÉDITO Y DÉBITO' info1='10% OFF' info2='DE REINTEGRO' info3='HASTA 3 CUOTAS SIN INTERES' imagen3={CREDICOOP} entidad='BANCO CREDICOOP'/>
            </div>
        </section>
    )
}

export default MetodoPago
