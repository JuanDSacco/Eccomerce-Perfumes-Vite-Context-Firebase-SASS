import React from 'react'

const Detalle = () => {
    return (
        <div className='divDetalle'>
            <h2>Detalles de la App</h2>
            <p>Cree un Ecommerce de perfumes, iniciando la App con Vite. <br/>
            Utilicé Firebase para almacenar datos del usuario {'(nombre, email, telefono y mensaje opcional)'}. <br/>
            Datos de la compra {'(cantidad de productos, precio, id (automático), nombre del producto'} <br/>
            {' y valor total)'}. <br/> 
            En la misma App de Firestore extraigo datos de los productos {'(nombre, precio, cantidad e imagen)'}. <br/>
            Cree un Context para exportar Estados/Hooks {'(cart, mode)'} y Funciones. <br/>
            Como editor de diseño utilicé solo SASS, no tiene ningún tipo de libería adjunta. <br/>

            </p>
        </div>
    )
}

export default Detalle
