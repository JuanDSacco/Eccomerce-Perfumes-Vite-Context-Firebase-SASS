import { useCartContext } from "../../context/CartContext";
import MapCart from "../../components/MapCart/MapCart";
import { Link } from "react-router-dom";
import Button from "../../components/Button/Button";


const Cart = () => {

    const { totalPrice, clearCart, removeProduct, eliminarPorUnidad, cart } = useCartContext();

    return(
        <>
            {
                cart.length === 0 ?
                <div className="divCarritoVacio">
                    <h2 className="h2CarritoVacio">¡El carrito se encuetra vacío!</h2>
                    <Link to={'/productos'}><Button name='Volver a Productos'/></Link>
                </div>
                : 
                <MapCart totalPrice={totalPrice} clearCart={clearCart} removeProduct={removeProduct} eliminarPorUnidad={eliminarPorUnidad} cart={cart}/>
            }
        </>
    )
}

export default Cart;