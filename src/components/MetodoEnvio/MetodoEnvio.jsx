import React from 'react'

const MetodoEnvio = () => {
    return (
        <>
            <section className='sectionEnvio'>
                <div className='divInicialEnvios'>
                    <h2>Métodos de envío</h2>
                        <p>En La Parfumerie. hacemos envíos a todo el país con excepción de Tierra del Fuego. <br/>
                        Los envíos son realizados por Andreani, Oca, Welivery, Paquery o Moova <br/>
                        {'(cadetería vía moto sólo en ciertos lugares de Bs As)'}. Los tiempos de entrega <br/>
                        pueden verse demorados en fechas comerciales como: Hot Sale, Día del Padre, <br/>
                        Día de la Madre, CyberMonday, Navidad, etc.
                        </p>
                </div>
                <section className='sectionSecun'>
                    <h3>RETIRO EN TIENDA</h3>
                    <div className='divEnvioSecun'>
                        <h4>¡COMPRÁ ONLINE RETIRÁ EN SUCURSAL!</h4><br/>
                        <p>
                        Los pedidos sólo podrán ser retirados por el titular de la compra, presentando DNI original, <br/>
                        y Tarjeta de Crédito o Débito física con la que se haya efectuado la compra, sin excepción. <br/>
                        Los pedidos no podrán ser retirados por terceros autorizados. La disponibilidad de su pedido <br/>
                        para ser retirado en sucursal será notificada al correo electrónico que haya registrado. <br/>
                        Los tiempos logísticos pueden variar entre 24 horas a 7 días hábiles desde confirmada la compra. <br/>
                        Las compras que se realizan los viernes son entregadas a partir del siguiente día hábil.
                        </p>
                    </div>
                    <div className='divEnvioSecun'>
                        <h4>ENVÍO EXPRESS</h4><br/>
                        <p>
                        Los tiempos logísticos son de 24 horas hábiles, desde realizada la compra. Zonas de cobertura: <br/>
                        CABA y zonas de provincia de Buenos Aires {'(*)'}. Las compras que se realizan los viernes son <br/>
                        entregadas el siguiente día hábil. Verificar zona de cobertura y costos para Envíos Express <br/>
                        en el checkout.
                        </p>
                    </div>
                    <div className='divEnvioSecun'>
                        <h4>ENVÍO NEXT DAY</h4><br/>
                        <p>
                        Las compras realizadas antes de las 11.00 hs, serán entregadas al próximo día hábil. Las compras <br/>
                        realizadas los dias viernes hábiles luego de las 11.00 hs, serán entregadas dentro de las 48 horas <br/>
                        hábiles. Zonas de cobertura: Córdoba Capital, Rosario, Santa Fe Capital {'(incluye además Santo Tomé'} <br/>
                        {'y Sauce Viejo)'}, Mendoza Capital, {'(incluye Godoy Cruz y Dorrego)'}. Verificar zona de cobertura y <br/>
                        costos para Envío Next Day en el checkout.
                        </p>
                    </div>
                    <div className='divEnvioSecun'>
                        <h4>ENVÍO RÁPIDO</h4><br/>
                        <p>
                        Los tiempos logísticos pueden ser desde 1 hasta 5 días hábiles, desde realizada la compra. Verificar <br/>
                        zona de cobertura y costos para Envío Rápido en el checkout.
                        </p>
                    </div>
                    <div className='divEnvioSecun'>
                        <h4>ENVÍO A DOMICILIO</h4><br/>
                        <p>
                        Los tiempos logísticos pueden ser desde 2 hasta 10 días hábiles, desde realizada la compra. <br/>
                        Verificar zona de cobertura y costos para Envío a Domicilio en el checkout.
                        </p>
                    </div>
                </section>
            </section>
        </>
    )
}

export default MetodoEnvio
