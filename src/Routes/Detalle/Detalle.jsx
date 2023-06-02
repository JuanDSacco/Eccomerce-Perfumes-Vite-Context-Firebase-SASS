import React from 'react'

const Detalle = () => {
    return (
        <div className='divDetalle'>
            <ul className='ulDetalle'>
                <li>Ecommerce iniciado con Vite</li>
                <li>Datos del usuario - Firebase - {'(nombre, email, telefono y mensaje opcional)'}</li>
                <li>Datos de la compra - Firebase - {'(cantidad de productos, precio, id (automático), nombre del producto y valor total)'}</li>
                <li>Extraer datos de los productos - Firebase - {'(nombre, precio, cantidad e imagen)'}</li>
                <li>Context para exportar Estado/Hook {'(cart)'} y Funciones</li>
                <li>Estilado con SASS {'(No contiene ningún tipo de framework)'}</li>
            </ul>
        </div>
    )
}

export default Detalle
