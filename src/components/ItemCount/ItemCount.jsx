import { useState } from 'react'
import Swal from 'sweetalert2';

const ItemCount = ({onAdd, data}) => {

    const [contador, setContador] = useState(1)

    const botonAumento = () => {
        setContador(contador + 1);
    };                                              

    const botonDisminuir = () => {
        contador > 0 ? setContador(contador - 1) : setContador(0);
    }

    const agregarProducto = () => {
        onAdd(contador);
        Swal.fire('¡Se añadó al carrito!');
    }

    return(
        <>
            <div>
                <h2>Precio ${data.precio}</h2>
                <button className='btnAumenoDecrement' onClick={botonDisminuir}> - </button>
                <button className='btnAumenoDecrement' onClick={botonAumento}> + </button>
                <span className='cantidad'>Cantidad: {contador}</span>
            </div>
            <div className='divAñadir'>
                <button className='btnAgrgarProd' onClick={agregarProducto}> Agregar producto </button>
            </div>
        </>
    )
}

export default ItemCount;