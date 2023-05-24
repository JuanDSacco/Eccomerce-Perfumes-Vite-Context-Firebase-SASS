import Card from '../Card/Card';
import { Link } from 'react-router-dom';
import Button from '../Button/Button';

const MapCart = ({cart, removeProduct, eliminarPorUnidad, clearCart, totalPrice}) => {
    return(
        <div className="cartContainer">
            {
            cart.map((data,indice) => 
                <div key={indice}>
                    <div className='divColumn1'>
                        <div>
                        <Card data={data}/>
                        </div>
                        <div className='divColumn2'>                                       
                            <h3>Unidades: {data.cantidad}</h3> 
                            <button className='btnMapCart' disable={data.cantidad <= 0 && removeProduct(data.id)} onClick={() => eliminarPorUnidad (data.id)}>Eliminar Unidad -</button>
                            <div className='divBtnClear'>
                                <button className='btnMapCart' onClick={clearCart}>Vaciar carrito</button>
                            </div>
                        </div>
                    </div>
                </div>
                )
            }
            <section className='sectionColumn3'>
                <div className='divColumn3'>
                    <div>
                        <h2 className="precioTotal">Total = ${totalPrice()}</h2>
                    </div>
                    <div>
                        <Link className='btnContinuar' to={'/form'}><Button name='Continuar'/></Link>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default MapCart;