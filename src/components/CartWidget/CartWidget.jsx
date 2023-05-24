import { useCartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';
import Carrito from '../../assets/cartwidget.png'


const CartWidget = () => {

    const { cantidadItem } = useCartContext();

    return(
        <>
            <div>
                <img src={Carrito} alt={Carrito} className='imgCartWidget'/>
                <span>{parseInt(cantidadItem())}</span>
            </div>
            
        </>
    )
}

export default CartWidget;   