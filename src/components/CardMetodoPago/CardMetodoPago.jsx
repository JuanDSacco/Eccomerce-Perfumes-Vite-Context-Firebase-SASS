import React from 'react'

const CardMetodoPago = ({imagen1,imagen3,tarjeta,info1,info2,info3,entidad}) => {

    return (
        <section className='sectionCardMetodoPago'>
            <div id='div1MetodoPago' className='divSecundario'>
                <div>
                <img className='imgCardMetodoPago1' src={imagen1}/>
                </div>
                <h5 className='h5MetodoPago'>TARJETA DE: {tarjeta}</h5>
            </div>
            <div id='div2MetodoPago' className='divSecundario'>
                <h2 className='h2MetodoPago'>{info1}</h2>
                <h3 className='h3MetodoPago'>{info2}</h3>
                <h4 className='h4MetodoPago'>{info3}</h4>
            </div>
            <div id='div3MetodoPago' className='divSecundario'>
                <h5 className='h5MetodoPago'>Todos los dias</h5>
                <img className='imgCardMetodoPago2' src={imagen3}/>
                <h5>{entidad}</h5>
            </div>
        </section>
    )
}

export default CardMetodoPago
