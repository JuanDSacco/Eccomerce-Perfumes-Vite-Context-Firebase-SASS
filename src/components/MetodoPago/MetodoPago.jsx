import React from 'react'
import CardMetodoPago from '../CardMetodoPago/CardMetodoPago'
import Visa from '../../assets/Bancos/visa.png' 
import CREDICOOP from '../../assets/Bancos/credicoop.png'
import Mastercard from '../../assets/Bancos/mastercard.png'
import ICBC from '../../assets/Bancos/icbc.png'
import Naranja from '../../assets/Bancos/naranja.png'
import American from '../../assets/Bancos/american.png'

const MetodoPago = () => {
    return (
        <section className='sectionMetodoPago'>
            <div className='divSecuMetodoPago'>
                <CardMetodoPago imagen1={Visa} tarjeta='CRÉDITO Y DÉBITO' info1='10% OFF' info2='DE REINTEGRO' info3='HASTA 3 CUOTAS SIN INTERÉS' imagen3={CREDICOOP} entidad='BANCO CREDICOOP'/>

                <CardMetodoPago imagen1={Mastercard} tarjeta='CRÉDITO Y DÉBITO' info1='15% OFF' info2='DE REINTEGRO' info3='HASTA 3 CUOTAS SIN INTERÉS' imagen3={ICBC} entidad='BANCO ICBC'/>
                
                <CardMetodoPago imagen1={Naranja} tarjeta='CRÉDITO Y DÉBITO' info1='3 y 6 cuotas' info2='Sin interés' info3='NO INCLUYE VISA NI MASTERCARD' imagen3={American} entidad='AMERICAN EXPRESS'/>
            </div>
        </section>
    )
}

export default MetodoPago
